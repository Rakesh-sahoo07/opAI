import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { setAddress } from "../redux/walletSlice";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const opBNBTestnet = {
  chainId: "0x15E", // 350
  chainName: "opBNB Testnet",
  rpcUrls: ["https://opbnb-testnet-rpc.bnbchain.org"],
  nativeCurrency: {
    name: "tBNB",
    symbol: "tBNB",
    decimals: 18,
  },
  blockExplorerUrls: ["https://testnet.opbnbscan.com"],
};

const opBNBMainnet = {
  chainId: "0xCC", // 204
  chainName: "opBNB Mainnet",
  rpcUrls: ["https://opbnb-mainnet-rpc.bnbchain.org"],
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  blockExplorerUrls: ["https://opbnbscan.com"],
};

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const walletAddress = useSelector((state: { wallet: { address: string } }) => state.wallet.address);

  const switchNetwork = async (network: typeof opBNBMainnet | typeof opBNBTestnet) => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: network.chainId }],
      });
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [network],
          });
        } catch (addError) {
          throw new Error("Failed to add network");
        }
      }
      throw switchError;
    }
  };

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        network: "mainnet",
        cacheProvider: true,
        providerOptions: {}
      });

      const connection = await web3Modal.connect();
      let provider = new ethers.BrowserProvider(connection);
      
      // Check current network
      const network = await provider.getNetwork();
      const chainId = Number(network.chainId);
      
      // Switch to opBNB if not on it
      if (chainId !== parseInt(opBNBMainnet.chainId, 16)) {
        await switchNetwork(opBNBMainnet);
        // Refresh provider after network switch
        provider = new ethers.BrowserProvider(connection);
      }

      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      
      dispatch(setAddress(address));
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Failed to connect wallet or switch network. Please try again.");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">opAI</h1>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Button variant="outline" onClick={() => navigate("/create")}>
            Create
          </Button>
          {walletAddress ? (
            <Button>
              {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
            </Button>
          ) : (
            <Button onClick={connectWallet}>
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

interface Window {
  ethereum?: any;
  solana?: {
    isPhantom?: boolean;
    connect(): Promise<{ publicKey: { toString(): string } }>;
  };
}