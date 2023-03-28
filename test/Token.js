const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Token Contract", () => {
	it("Once Deployed, owner should have 1000 tokens", async () => {
		const [owner] = await ethers.getSigners();
		const Token = await ethers.getContractFactory("Token");
		const token = await Token.deploy();

		const ownerBalance = await token.getBalance(owner?.address);
		expect(await token.totalSupply()).to.equal(ownerBalance);
	});
	it("Should transfer tokens between accounts", async () => {
		const [owner, address1, address2] = await ethers.getSigners();
		const Token = await ethers.getContractFactory("Token");
		const token = await Token.deploy();
		await token.transfer(address1.address, 10);
		const bal1 = await token.getBalance(owner.address);
		const bal2 = await token.getBalance(address1.address);
		expect(bal1).to.equal(990);
		expect(bal2).to.equal(10);
	});
});
