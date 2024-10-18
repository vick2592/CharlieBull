import { expect } from "chai";
import { ethers } from "hardhat";
import { CharlieCat } from "../typechain-types";

describe("CharlieCat", function () {
  let charlieCat: CharlieCat;

  before(async () => {
    const [owner] = await ethers.getSigners();
    console.log("Deploying CharlieCat with the account:", owner.address);

    const CharlieCatFactory = await ethers.getContractFactory("CharlieCat");
    charlieCat = (await CharlieCatFactory.deploy()) as CharlieCat;
    await charlieCat.waitForDeployment();
    console.log("CharlieCat deployed to:", await charlieCat.getAddress());
  });

  describe("Deployment", function () {
    it("Should have the correct name and symbol", async function () {
      expect(await charlieCat.name()).to.equal("CharlieCat");
      expect(await charlieCat.symbol()).to.equal("CHAR");
      console.log("Name:", await charlieCat.name());
      console.log("Symbol:", await charlieCat.symbol());
    });

    it("Should have the correct total supply", async function () {
      const expectedSupply = ethers.parseUnits("420690000000000", 18);
      const actualSupply = await charlieCat.totalSupply();
      expect(actualSupply).to.equal(expectedSupply);
      console.log("Total Supply:", ethers.formatUnits(actualSupply, 18));
    });
  });

  describe("Token Distribution", function () {
    it("Should assign the total supply to the owner", async function () {
      const [owner] = await ethers.getSigners();
      const ownerBalance = await charlieCat.balanceOf(owner.address);
      expect(await charlieCat.totalSupply()).to.equal(ownerBalance);
      console.log("Owner Balance:", ethers.formatUnits(ownerBalance, 18));
    });
  });

  describe("Transactions", function () {
    it("Should allow token transfers", async function () {
      const [, addr1] = await ethers.getSigners();
      const transferAmount = ethers.parseEther("1000");

      console.log("Transferring", ethers.formatEther(transferAmount), "CAT tokens to:", addr1.address);
      await charlieCat.transfer(addr1.address, transferAmount);

      const addr1Balance = await charlieCat.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(transferAmount);
      console.log("Recipient Balance:", ethers.formatEther(addr1Balance));
    });
  });
});
