// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CharlieCat is ERC20 {
	uint256 private constant MAX_SUPPLY = 420_690_000_000_000 * 10 ** 18; // 420,690,000,000,000 tokens with 18 decimals

	constructor() ERC20("CharlieCat", "CHAR") {
		_mint(msg.sender, MAX_SUPPLY);
	}
}
