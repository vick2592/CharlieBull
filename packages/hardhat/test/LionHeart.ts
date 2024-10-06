import { expect } from "chai";
import { ethers } from "hardhat";
import { LionHeart } from "../typechain-types";

describe("LionHeart", function () {
  let lionHeart: LionHeart;

  before(async () => {
    const [owner] = await ethers.getSigners();
    console.log("Deploying LionHeart with the account:", owner.address);

    const LionHeartFactory = await ethers.getContractFactory("LionHeart");
    lionHeart = (await LionHeartFactory.deploy()) as LionHeart;
    await lionHeart.waitForDeployment();
    console.log("LionHeart deployed to:", await lionHeart.getAddress());
  });

  describe("Deployment", function () {
    it("Should have the correct name and symbol", async function () {
      expect(await lionHeart.name()).to.equal("LionHeart");
      expect(await lionHeart.symbol()).to.equal("HEART");
      console.log("Name:", await lionHeart.name());
      console.log("Symbol:", await lionHeart.symbol());
    });

    it("Should have the correct total supply", async function () {
      const expectedSupply = ethers.parseUnits("420690000000000", 18);
      const actualSupply = await lionHeart.totalSupply();
      expect(actualSupply).to.equal(expectedSupply);
      console.log("Total Supply:", ethers.formatUnits(actualSupply, 18));
    });
  });

  describe("Token Distribution", function () {
    it("Should assign the total supply to the owner", async function () {
      const [owner] = await ethers.getSigners();
      const ownerBalance = await lionHeart.balanceOf(owner.address);
      expect(await lionHeart.totalSupply()).to.equal(ownerBalance);
      console.log("Owner Balance:", ethers.formatUnits(ownerBalance, 18));
    });
  });

  describe("Transactions", function () {
    it("Should allow token transfers", async function () {
      const [, addr1] = await ethers.getSigners();
      const transferAmount = ethers.parseEther("1000");

      console.log("Transferring", ethers.formatEther(transferAmount), "HEART tokens to:", addr1.address);
      await lionHeart.transfer(addr1.address, transferAmount);

      const addr1Balance = await lionHeart.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(transferAmount);
      console.log("Recipient Balance:", ethers.formatEther(addr1Balance));
    });
  });
});
