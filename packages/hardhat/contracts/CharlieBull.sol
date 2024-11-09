// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol"; 
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol"; 
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol"; 

contract CharlieBull is ERC20, AccessControl, ERC20Burnable, ERC20Permit {
    uint256 private constant MAX_SUPPLY = 420_690_000_000_000 * 10 ** 18; // 420,690,000,000,000 tokens with 18 decimals

    constructor() ERC20("CharlieBull", "CHAR") ERC20Permit("CharlieBull") {
        _mint(msg.sender, MAX_SUPPLY);
    }
}