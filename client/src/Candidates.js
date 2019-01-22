import React, { Component } from 'react'
// import './ShowMovies.css'

export class Candidates extends Component {
  handleChange = candidate => {
    let _candidate = candidate
    this.props.vote(_candidate)
  }

  render() {
    return (
      <div>
        <h3> Candidates</h3>
        <hr />
        <table className="table">
          <tbody>
            <tr>
              <th />
              <th>Candidate</th>
              <th>House</th>
              <th>Votes</th>
            </tr>
            {this.props.candidates.map(candidate => (
              <tr key={candidate.id}>
                <td>
                  <button onClick={this.handleChange.bind(this)}>vote</button>
                </td>
                <td>{candidate.name}</td>
                <td>{candidate.house}</td>
                <td>{candidate.votes}</td>
                <td />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Candidates
