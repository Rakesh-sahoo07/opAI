// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AIAgentRegistry is Initializable, UUPSUpgradeable, Ownable {
    struct Agent {
        string name;
        string description;
        string instruction;
        string model;
        string modelId;
        address agentToken;
        address daoAddress;
    }

    mapping(uint256 => Agent) public agents;
    uint256 public agentCount;

    event AgentRegistered(
        uint256 indexed agentId,
        string name,
        string description,
        string instruction,
        string model,
        string modelId,
        address indexed agentToken,
        address indexed daoAddress
    );

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize() public initializer {
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function registerAgent(
        string memory name,
        string memory description,
        string memory instruction,
        string memory model,
        string memory modelId,
        address agentToken,
        address daoAddress
    ) external onlyOwner returns (uint256) {
        require(agentToken != address(0), "Invalid agent token address");
        require(daoAddress != address(0), "Invalid DAO address");

        agents[agentCount] = Agent(
            name,
            description,
            instruction,
            model,
            modelId,
            agentToken,
            daoAddress
        );

        emit AgentRegistered(
            agentCount,
            name,
            description,
            instruction,
            model,
            modelId,
            agentToken,
            daoAddress
        );

        return agentCount++;
    }

    function updateInstructions(uint256 agentId, string memory newInstructions) external {
        require(agentId < agentCount, "Agent does not exist");
        require(msg.sender == agents[agentId].daoAddress, "Only the DAO can update instructions");

        agents[agentId].instruction = newInstructions;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}
