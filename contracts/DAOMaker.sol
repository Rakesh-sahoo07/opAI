// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/governance/TimelockController.sol";
import "@openzeppelin/contracts/governance/IGovernor.sol";
import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DAOMaker is Ownable {
    struct DAO {
        address timelock;
        address governor;
        address agentToken;
    }

    mapping(uint256 => DAO) public daos;
    uint256 public daoCount;

    event DAOCreated(
        uint256 indexed daoId,
        address indexed timelock,
        address indexed governor,
        address agentToken
    );

    /// @dev Pass the initial owner to the `Ownable` constructor.
    constructor(address initialOwner) Ownable(initialOwner) {}

    function createDAO(
        address agentTokenAddress,
        address platformTokenAddress,
        uint256 minVotingDelay,
        uint256 minVotingPeriod,
        uint256 quorumPercentage
    ) external onlyOwner returns (uint256) {
        require(agentTokenAddress != address(0), "Invalid agent token address");
        require(platformTokenAddress != address(0), "Invalid platform token address");

        // Create empty arrays for proposers and executors (no initial proposers or executors)
        address; // Empty array for proposers
        address; // Empty array for executors

        // Create TimelockController
        TimelockController timelock = new TimelockController(
            2 days, // Minimum delay for execution
            proposers, // No proposers initially
            executors // No executors initially
        );

        // Create Governor with proper governance parameters
        Governor governor = new Governor(
            "AI Agent DAO", // Name of the DAO
            IERC20(agentTokenAddress), // Agent token (voting token)
            IERC20(platformTokenAddress), // Platform token (for governance)
            minVotingDelay, // Minimum voting delay
            minVotingPeriod, // Minimum voting period
            quorumPercentage // Quorum percentage
        );

        // Register DAO
        uint256 daoId = daoCount;
        daos[daoId] = DAO(address(timelock), address(governor), agentTokenAddress);

        emit DAOCreated(daoId, address(timelock), address(governor), agentTokenAddress);

        // Increment daoCount and return the new daoId
        daoCount++;

        return daoId;
    }
}
