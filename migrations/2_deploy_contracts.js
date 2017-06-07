var DSMath = artifacts.require("./DSMath.sol");
var CLNY = artifacts.require("./CLNY.sol");
var ColonyTokenSale = artifacts.require("./ColonyTokenSale.sol");
const Token = artifacts.require('./Token.sol');
const Resolver = artifacts.require('./Resolver.sol');

module.exports = function(deployer) {
  deployer.deploy(DSMath);
  deployer.deploy(CLNY);
  deployer.deploy(ColonyTokenSale);

  // Deploy the fixed token and router
  deployer.deploy([Resolver]);
  deployer.deploy([Token]);
};
