import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Deploying LionHeart token with the account:", deployer);

  await deploy("LionHeart", {
    from: deployer,
    args: [],
    log: true,
  });

  const LionHeart = await deployments.get("LionHeart");
  console.log("LionHeart token deployed to:", LionHeart.address);
};

export default func;
func.tags = ["LionHeart"];
