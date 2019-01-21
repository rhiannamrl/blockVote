import React, { Component } from 'react'
// import './ShowMovies.css'

export class Candidates extends Component {
  handleChange = candidate => {
    let _candidate = candidate
    this.props.vote(_candidate)
  }

  render() {
    let candidateList = this.props.candidates.map((candidate, i) => (
      <tr key={i}>
        <td onClick={this.handleChange.bind(this, candidate.name)}>
          {candidate.name}
        </td>
        <td>{candidate.house}</td>
        <td>{candidate.votes}</td>
      </tr>
    ))

    return (
      <div>
        <h3> Candidates</h3>
        <hr />
        <table>
          <tbody>
            <tr>
              <th>Candidate</th>
              <th>House</th>
              <th>Votes</th>
            </tr>
            {candidateList}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Candidates
