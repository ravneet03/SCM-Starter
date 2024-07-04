a
# Module 2 Assessment

This project is an Ethereum-based smart contract ATM application coded in Solidity, with a React frontend. It allows users to check balances, deposit, and withdraw ETH tokens through a MetaMask wallet.

## Features

- Added styles and CSS for better UI.
- Functionality to deposit and withdraw values inputted by the user.
- Toggle functionality to show and hide balances.

## Description

This project demonstrates the implementation of a basic ATM system using Ethereum smart contracts. Users can connect their MetaMask wallet, deposit, withdraw, and check their balance.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MetaMask](https://metamask.io/) browser extension

### Installing and Executing

After cloning the GitHub repository, follow these steps to get the code running on your computer:

1. Inside the project directory, install dependencies:
   ```bash
   npm install
   ```

2. Open two additional terminals in your VS Code.

3. In the second terminal, start a local Ethereum network:
   ```bash
   npx hardhat node
   ```

4. In the third terminal, deploy the smart contract to the local network:
   ```bash
   npx hardhat run --network localhost scripts/deploy.js
   ```

5. Back in the first terminal, start the React application:
   ```bash
   npm run dev
   ```
   This will launch the frontend, typically accessible at [http://localhost:3000/](http://localhost:3000/).

## Usage

1. Open the application in your browser.
2. Connect your MetaMask wallet.
3. Use the input fields to deposit or withdraw ETH.
4. Toggle the balance visibility using the "Show Balance"/"Hide Balance" button.

## Help

For any issues, you can refer to the [Remix documentation](https://remix.ethereum.org/) or common Ethereum development resources.

## Authors

- **Ravneet Singh**(22BCS15231)
  - Email: [ravneetsingh290@gmail.com](mailto:ravneetsingh290@gmail.com)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
