pragma solidity 0.5.0;

contract HogwartsElection {

    //mapping utitlizes hash tables
    mapping (bytes32 => uint8) public votes;
  
    bytes32[] public candidateList;

    constructor(bytes32[] memory _candidateNames) public {
        candidateList = _candidateNames;
    }

    function totalVotesFor(bytes32 _candidate) public view returns (uint8) {
        return votes[_candidate];
    } 

    function voteForCandidate(bytes32 _candidate) public {
        votes[_candidate] += 1;
    }
}