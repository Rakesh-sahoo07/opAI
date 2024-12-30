// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AgentToken is ERC20 {
    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }
}

contract AgentTokenFactory is Ownable {
    event AgentTokenCreated(address indexed tokenAddress, string name, string symbol, uint256 initialSupply);

    constructor(address initialOwner) Ownable(initialOwner) {}

    function createAgentToken(
        string memory name,
        string memory symbol
    ) external onlyOwner returns (address) {
        uint256 initialSupply = 100_000_000 * (10 ** 18); // 100 million tokens with 18 decimals
        AgentToken token = new AgentToken(name, symbol, initialSupply);
        emit AgentTokenCreated(address(token), name, symbol, initialSupply);
        return address(token);
    }
}
