import { expect } from "chai";
import { ethers } from "hardhat";
import { CharlieBull } from "../typechain-types";

describe("CharlieBull", function () {
  let charlieBull: CharlieBull;

  before(async () => {
    const [owner] = await ethers.getSigners();
    console.log("Deploying CharlieBull with the account:", owner.address);

    const CharlieBullFactory = await ethers.getContractFactory("CharlieBull");
    charlieBull = (await CharlieBullFactory.deploy()) as CharlieBull;
    await charlieBull.waitForDeployment();
    console.log("CharlieBull deployed to:", await charlieBull.getAddress());
  });

  describe("Deployment", function () {
    it("Should have the correct name and symbol", async function () {
      expect(await charlieBull.name()).to.equal("CharlieBull");
      expect(await charlieBull.symbol()).to.equal("CHAR");
      console.log("Name:", await charlieBull.name());
      console.log("Symbol:", await charlieBull.symbol());
    });

    it("Should have the correct total supply", async function () {
      const expectedSupply = ethers.parseUnits("420690000000000", 18);
      const actualSupply = await charlieBull.totalSupply();
      expect(actualSupply).to.equal(expectedSupply);
      console.log("Total Supply:", ethers.formatUnits(actualSupply, 18));
    });
  });

  describe("Token Distribution", function () {
    it("Should assign the total supply to the owner", async function () {
      const [owner] = await ethers.getSigners();
      const ownerBalance = await charlieBull.balanceOf(owner.address);
      expect(await charlieBull.totalSupply()).to.equal(ownerBalance);
      console.log("Owner Balance:", ethers.formatUnits(ownerBalance, 18));
    });
  });

  describe("Transactions", function () {
    it("Should allow token transfers", async function () {
      const [, addr1] = await ethers.getSigners();
      const transferAmount = ethers.parseEther("1000");

      console.log("Transferring", ethers.formatEther(transferAmount), "BULL tokens to:", addr1.address);
      await charlieBull.transfer(addr1.address, transferAmount);

      const addr1Balance = await charlieBull.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(transferAmount);
      console.log("Recipient Balance:", ethers.formatEther(addr1Balance));
    });
  });
});
