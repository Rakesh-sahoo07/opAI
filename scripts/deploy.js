async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);

  
    // Deploy AIAgentRegistry contract
    const AIAgentRegistry = await ethers.getContractFactory("AIAgentRegistry");
    const aiAgentRegistry = await AIAgentRegistry.deploy();
  
    await aiAgentRegistry.deployed();
    console.log("AIAgentRegistry deployed to:", aiAgentRegistry.address);
}
  
main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });