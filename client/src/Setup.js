import Web3 from 'web3'

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
let votingABI = [
  {
    constant: true,
    inputs: [{ name: '', type: 'bytes32' }],
    name: 'votes',
    outputs: [{ name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x2b38cd96'
  },
  {
    constant: true,
    inputs: [],
    name: 'candidateList',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x498ea441'
  },
  {
    inputs: [{ name: 'candidateNames', type: 'string' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor'
  },
  {
    constant: true,
    inputs: [{ name: '_candidate', type: 'bytes32' }],
    name: 'totalVotesFor',
    outputs: [{ name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x2f265cf7'
  },
  {
    constant: false,
    inputs: [{ name: '_candidate', type: 'bytes32' }],
    name: 'voteForCandidate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xcc9ab267'
  }
]
let votingAddress = '0x7ee43e67e6aDA220f2D015E718148173b25882cC'
web3.eth.defaultAccount = web3.eth.accounts[0]

let votingContract = new web3.eth.Contract(votingABI, votingAddress)

export { votingContract }

// const ratingContract = web3.eth.contract(ratingABI).at(ratingAddress)
