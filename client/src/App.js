import React, { Component } from 'react'
// import HogwartsElection from './contracts/HogwartsElection.json'
// import getWeb3 from './utils/getWeb3'
import { Candidates } from './Candidates'
import { votingContract } from './Setup'
import './App.css'
import getWeb3 from './utils/getWeb3'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candidates: [
        { id: 1, name: 'Hermione Granger', house: 'Gryffindor', votes: 0 },
        { id: 2, name: 'Draco Malfoy', house: 'Slytherin', votes: 0 },
        { id: 3, name: 'Neville Longbottom', house: 'Gryffindor', votes: 0 }
      ],
      web3: null
    }
    this.castVote = this.castVote.bind(this)
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3()

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts()

      // Get the contract instance.
      const networkId = await web3.eth.net.getId()
      const deployedNetwork = votingContract.networks[networkId]
      const instance = new web3.eth.Contract(
        votingContract.abi,
        deployedNetwork && deployedNetwork.address
      )

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample)
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      )
      console.error(error)
    }
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
