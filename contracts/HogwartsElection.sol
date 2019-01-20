pragma solidity 0.5.0;

//define smart contract
contract HogwartsElection {
    //define the structure of the candidate 
    //candidate variable
    struct Candidate {
        uint id;
        string name;
        string house;
        uint voteCount;
    }

    //the maps act as a hash table!!!
    mapping(address => bool) public voters;

    //create multiple candidates
    mapping(uint => Candidate) public candidates;

    //declare candidatesVotes variable 
    uint public candidateId;

    //function to add candidates to the ballot 
    function addCandidate(string memory _name, string memory _house) private {
        candidateId++;
        candidates[candidateId] = Candidate(candidateId, _name, _house, 0);
    }

    //Constructor adds candidates with add candidate function
    constructor () public {
        addCandidate("Hermione Granger", "Gryffindor");
        addCandidate("Draco Malfoy", "Slytherin");
        addCandidate("Neville Longbottom", "Gryffindor");
    }

    function vote (uint _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender], "you can't vote twice, who do you think you are Lord Voldemort?!");

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidateId, "this candidate doesn't exist!");

        // record voting status
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount ++;
    }
}