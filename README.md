# Module 2 Assessment

This project is an Ethereum-based smart contract ATM application coded in Solidity, with a React frontend. It allows users to check balances, deposit, and withdraw ETH tokens through a MetaMask wallet.

## Features

- Added styles and CSS for better UI.
- Functionality to deposit and withdraw values inputted by the user.
- Toggle functionality to show and hide balances.

## Description

This project demonstrates the implementation of a basic ATM system using Ethereum smart contracts. Users can connect their MetaMask wallet, deposit, withdraw, and check their balance.

1. **Solidity Smart Contract**: The core logic of the ATM is implemented in Solidity, a contract-oriented programming language for writing smart contracts on Ethereum. The smart contract handles the storage and manipulation of balances, and includes functions for depositing and withdrawing ETH.

2. **React Frontend**: The user interface is built with React, a popular JavaScript library for building user interfaces. The frontend connects to the Ethereum blockchain via MetaMask, allowing users to interact with the smart contract directly from their browser.

3. **Ethers.js**: A library for interacting with the Ethereum blockchain, used in this project to connect the React frontend with the Solidity smart contract.

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
