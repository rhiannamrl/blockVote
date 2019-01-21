import React, { Component } from 'react'
// import './ShowMovies.css'

export class Candidates extends Component {
  handleChange = candidate => {
    // let _candidate = candidate
    this.props.vote(candidate)
  }

  render() {
    console.log(this.props)
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
            {this.props.candidates.map(candidate => (
              <tr key={candidate.id}>
                <td>{candidate.name}</td>
                <td>{candidate.house}</td>
                <td>{candidate.votes}</td>
                <td>
                  <button onClick={this.handleChange}>vote</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Candidates
