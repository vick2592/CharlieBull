import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Deploying CharlieBull with account:", deployer);

  const deployment = await deploy("CharlieBull", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: 1,
  });

  console.log("CharlieBull token deployed to:", deployment.address);
};

export default func;
func.tags = ["CharlieBull"];
