import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [amt, setAmt] = useState(0);
  const [showBalance, setShowBalance] = useState(false); // State to toggle showing balance

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(new ethers.providers.Web3Provider(window.ethereum));
    }
  };

  const handleAccount = async () => {
    if (ethWallet) {
      const accounts = await ethWallet.listAccounts();
      setAccount(accounts[0]);
    }
  };

  const connectAccount = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      await handleAccount();
      getATMContract();
    } catch (error) {
      console.error("Error connecting MetaMask account:", error);
    }
  };

  const getATMContract = async () => {
    if (ethWallet) {
      const signer = ethWallet.getSigner();
      const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
      setATM(atmContract);
    }
  };

  const getBalance = async () => {
    if (atm) {
      try {
        const balance = await atm.getBalance();
        setBalance(balance.toNumber());
        setShowBalance(true); 
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }
  };

  const deposit = async () => {
    if (atm) {
      try {
        const tx = await atm.deposit(amt);
        await tx.wait();
        getBalance();
      } catch (error) {
        console.error("Error depositing:", error);
      }
    }
  };

  const withdraw = async () => {
    if (atm) {
      try {
        const tx = await atm.withdraw(amt);
        await tx.wait();
        getBalance();
      } catch (error) {
        console.error("Error withdrawing:", error);
      }
    }
  };

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance); // Toggle visibility of balance
  };

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask in order to use this ATM.</p>;
    }

    if (!account) {
      return <button className="connect-button" onClick={connectAccount}>Connect MetaMask</button>;
    }

    return (
      <div className="user-info">
        <p>Your Account: {account}</p>
        <button className="action-button balance-button" onClick={toggleBalanceVisibility}>
          {showBalance ? "Hide Balance" : "Show Balance"}
        </button>
        {showBalance && (
          <>
            <p>Your Balance: {balance} ETH</p>
          </>
        )}
        <input
          className="rounded-lg p-2 w-full text-black border-2 border-teal-800 amt-input"
          type="number"
          value={amt}
          onChange={(e) => setAmt(e.target.value)}
        />
        <button className="action-button deposit-button" onClick={deposit}>
          Deposit {amt} ETH
        </button>
        <button className="action-button withdraw-button" onClick={withdraw}>
          Withdraw {amt} ETH
        </button>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header>
        <h1 style={{ color: "#FFD700" }}>Welcome to the Metacrafters ATM!</h1>
      </header>
      {initUser()}
      <style jsx global>{`
        body {
          background-color: #000000; /* Set the background color of the entire page */
          color: #fff; /* White text */
          font-family: Arial, sans-serif; /* Specify your preferred font */
          margin: 0; /* Remove default body margin */
          padding: 0; /* Remove default body padding */
        }

        .container {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #333; /* Darker grey background for container */
          color: #fff; /* White text */
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-top: 2rem; /* Adjust margin-top as needed */
        }

        header h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .user-info {
          background-color: #333; /* Darker grey */
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          margin-top: 1rem;
        }

        .amt-input {
          margin: 1rem 0;
          width: calc(100% - 4px);
        }

        .action-button {
          display: inline-block;
          margin: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          background-color: #007bff; /* Blue color for all action buttons */
          color: #fff; /* White text */
        }

        .deposit-button:hover,
        .withdraw-button:hover,
        .balance-button:hover {
          opacity: 0.8;
        }

        .connect-button {
          background-color: #28a745; /* Green color for connect button */
          color: #fff; /* White text */
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }
      `}</style>
    </main>
  );
}
