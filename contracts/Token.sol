// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Token {
    string public name = "AS Token";
    string public symbol = "AS";

    uint public totalSupply = 1000;

    address public owner;

    mapping(address => uint) balances;

    constructor() {
        owner = msg.sender;
        balances[owner] = 1000;
    }

    function transfer(address to, uint amount) external {
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function getBalance(address acc) external view returns (uint) {
        return balances[acc];
    }
}
