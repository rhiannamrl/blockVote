const HogwartsElection = artifacts.require('./HogwartsElection.sol')

module.exports = function(deployer) {
  deployer.deploy(HogwartsElection, [
    'Hermione Granger, Draco Malfoy, Neville Longbottom'
  ])
}
