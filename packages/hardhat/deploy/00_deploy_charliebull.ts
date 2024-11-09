import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("CharlieBull", {
    from: deployer,
    args: [],
    log: true,
  });

  const CharlieBull = await deployments.get("CharlieBull");
  console.log("CharlieBull token deployed to:", CharlieBull.address);
};

export default func;
func.tags = ["CharlieBull"];
