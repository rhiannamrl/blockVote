import React, { Component } from 'react'
import HogwartsElection from './contracts/HogwartsElection.json'
import getWeb3 from './utils/getWeb3'
import Candidates from './Candidates'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candidates: [
        { name: 'Hermione Granger', house: 'Gryffindor' },
        { name: 'Draco Malfoy', house: 'Slytherin' },
        { name: 'Neville Longbottom', house: 'Gryffindor' }
      ]
    }
    this.handleVoting = this.handleVoting.bind(this)
  }

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3()
      const accounts = await web3.eth.getAccounts()
      const networkId = await web3.eth.net.getId()
      const deployedNetwork = HogwartsElection.networks[networkId]
      const instance = new web3.eth.Contract(
        HogwartsElection.abi,
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

  handleVoting(candidate) {
    HogwartsElection.vote(candidate)
    let votes = HogwartsElection.voteCount(candidate).toNumber()
    this.setState({
      candidates: this.state.candidates.map(el =>
        el.name === candidate ? Object.assign({}, el, { votes: votes }) : el
      )
    })
  }

  runExample = async () => {
    const { accounts, contract } = this.state
    console.log(this.state)
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading wizards...</div>
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hogwarts Class Election</h1>
        </header>
        <p className="App-intro">Vote For The Brightest Young Wizard!</p>
        <div className="movie-table">
          <Candidates
            candidates={this.state.candidates}
            vote={this.handleVoting}
          />
        </div>
      </div>
    )
  }
}

export default App
