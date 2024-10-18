import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("CharlieCat", {
    from: deployer,
    args: [],
    log: true,
  });

  const CharlieCat = await deployments.get("CharlieCat");
  console.log("CharlieCat token deployed to:", CharlieCat.address);
};

export default func;
func.tags = ["CharlieCat"];
