"use client";
import React, { FC } from "react";
import Connected from "./Connected";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import { connectAndromedaClient, useAndromedaStore } from "@/zustand/andromeda";

interface ConnectWalletProps {}

const ConnectWallet: FC<ConnectWalletProps> = (props) => {
  const {} = props;
  const { isLoading } = useAndromedaStore();
  const client = useAndromedaClient();

  if (client) {
    return <Connected />;
  }

  return (
    <button
      onClick={() => connectAndromedaClient()}
      className={`flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition ${
        isLoading ? "cursor-not-allowed opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v16m8-8H4"
        />
      </svg>
      {isLoading ? "Loading..." : "Connect Wallet"}
    </button>
  );
};

export default ConnectWallet;
