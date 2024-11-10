import { expect } from "chai";
import { ethers } from "hardhat";
import { CharlieBull } from "../typechain-types";

describe("CharlieBull", function () {
  let charlieBull: CharlieBull;
  let owner: any;
  let addr1: any;

  before(async () => {
    [owner, addr1] = await ethers.getSigners();
    console.log("Deploying CharlieBull with the account:", owner.address);

    const CharlieBullFactory = await ethers.getContractFactory("CharlieBull");
    charlieBull = (await CharlieBullFactory.deploy()) as CharlieBull;
    await charlieBull.waitForDeployment();
    console.log("CharlieBull deployed to:", await charlieBull.getAddress());
  });

  describe("Deployment", function () {
    it("Should have the correct total supply", async function () {
      const expectedSupply = ethers.parseUnits("420690000000000", 18);
      const actualSupply = await charlieBull.totalSupply();
      expect(actualSupply).to.equal(expectedSupply);
      console.log("Total Supply:", ethers.formatUnits(actualSupply, 18));
    });

    it("Should set deployer as minter", async function () {
      expect(await charlieBull.hasRole(await charlieBull.MINTER_ROLE(), owner.address)).to.be.true;
    });
  });

  describe("Role-Based Access Control", function () {
    it("Should prevent non-minters from minting", async function () {
      const mintAmount = ethers.parseUnits("1000", 18);
      await expect(charlieBull.connect(addr1).mint(addr1.address, mintAmount))
        .to.be.revertedWithCustomError(charlieBull, "AccessControlUnauthorizedAccount")
        .withArgs(addr1.address, await charlieBull.MINTER_ROLE());
    });
  });

  describe("Supply Limits", function () {
    it("Should prevent minting beyond MAX_SUPPLY", async function () {
      // Since MAX_SUPPLY is already minted in constructor, any additional minting should fail
      const mintAmount = ethers.parseUnits("1", 18);
      await expect(charlieBull.mint(owner.address, mintAmount)).to.be.revertedWithCustomError(
        charlieBull,
        "MaxSupplyExceeded",
      );
    });
  });
});
