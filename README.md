# 🐶 Charlie Bull

<h4 align="center">
  <a href="https://scaffoldeth.io">Website</a>
</h4>

😺 Welcome to Charlie Bull, the most lovable meme coin on the Ethereum blockchain! Charlie Bull is here to bring joy and fun to the world of decentralized applications (dapps). With Charlie Bull, you can easily take apart of our awesome community and swap any of your tokens on any EVM chain within our awesome network.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Meme Coin Overload**: Your frontend auto-adapts to Charlie as you HODL it.

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.18)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart for Local Testing

To get started with Charlie Bull, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
cd CharlieBull
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `CharlieBull.sol` in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`

## Contributing to Charlie Bull

We welcome contributions to Charlie Bull!

Reach out to @VickzInBK on X or @NBigOnIsig on Instagram.