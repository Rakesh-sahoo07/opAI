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

    function createDAO(
        address agentTokenAddress,
        address platformTokenAddress,
        uint256 minVotingDelay,
        uint256 minVotingPeriod,
        uint256 quorumPercentage
    ) external onlyOwner returns (uint256) {
        require(agentTokenAddress != address(0), "Invalid agent token address");
        require(platformTokenAddress != address(0), "Invalid platform token address");

        // Create TimelockController
        TimelockController timelock = new TimelockController(
            2 days, // Minimum delay for execution
            new address , // No initial proposers
            new address   // No initial executors
        );

        // Create Governor
        Governor governor = new Governor(
            "AI Agent DAO",
            IERC20(agentTokenAddress),
            IERC20(platformTokenAddress),
            minVotingDelay,
            minVotingPeriod,
            quorumPercentage
        );

        // Register DAO
        daos[daoCount] = DAO(address(timelock), address(governor), agentTokenAddress);
        emit DAOCreated(daoCount, address(timelock), address(governor), agentTokenAddress);

        return daoCount++;
    }
}
