import React, { Component } from 'react'
// import HogwartsElection from './contracts/HogwartsElection.json'
// import getWeb3 from './utils/getWeb3'
import { Candidates } from './Candidates'
import { votingContract } from './Setup'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candidates: [
        { id: 1, name: 'Hermione Granger', house: 'Gryffindor', votes: 0 },
        { id: 2, name: 'Draco Malfoy', house: 'Slytherin', votes: 0 },
        { id: 3, name: 'Neville Longbottom', house: 'Gryffindor', votes: 0 }
      ]
    }
    this.castVote = this.castVote.bind(this)
  }

  castVote(candidate) {
    votingContract.methods.voteForCandidate(candidate)
    let totalVotes = votingContract.methods.totalVotesFor(candidate)
    this.setState({
      candidates: this.state.candidates.map(el =>
        el.name === candidate
          ? Object.assign({}, el, { votes: totalVotes })
          : el
      )
    })
  }

  render() {
    if (!this.state) {
      return <div>Loading wizards...</div>
    }
    console.log('votingContract', votingContract)
    return (
      <div className="App">
        <div className="App-header">
          <h1>Hogwarts School of Witchcraft and Wizardry</h1>
        </div>
        <h2 className="App-intro">Class Election</h2>
        <div className="movie-table">
          <Candidates candidates={this.state.candidates} vote={this.castVote} />
        </div>
      </div>
    )
  }
}
