import useQueryChain from "@/lib/graphql/hooks/chain/useChainConfig";
import { disconnectAndromedaClient, useAndromedaStore } from "@/zustand/andromeda";
import React, { FC, useState } from "react";

interface ConnectedProps {}
const Connected: FC<ConnectedProps> = (props) => {
  const {} = props;
  const { accounts, chainId } = useAndromedaStore();
  const account = accounts[0];
  const { data: config } = useQueryChain(chainId);
  const address = account?.address ?? "";
  const truncatedAddress = address.slice(0, 6) + "......" + address.slice(address.length - 4);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className={`flex items-center justify-between border ${
          isOpen ? "border-white" : "border-zinc-950"
        } rounded-lg px-4 py-2 w-full bg-zinc-900 shadow-md text-white`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center ">
          {config?.iconUrls?.sm && (
            <img src={config.iconUrls.sm} alt="chain icon" className="w-5 h-5" />
          )}
          <span className="text-sm font-medium mr-3">{truncatedAddress}</span>
          <span
            className={`text-xs px-2 py-1 rounded-full bg-white text-black  `}
          >
            {config?.chainType}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 transform ${
            isOpen ? "rotate-180" : ""
          } transition-transform mr-2 ml-3`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l6 6a1 1 0 01-1.414 1.414L10 5.414l-5.293 5.293A1 1 0 013.293 9.293l6-6A1 1 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-zinc-900 border border-gray-700 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <div className="flex items-center mb-3 space-x-2">
              {config?.iconUrls?.sm && (
                <img
                  src={config.iconUrls.sm}
                  alt="chain icon"
                  className="w-5 h-5"
                />
              )}
              <span className="text-gray-300 font-semibold">
                {config?.chainName ?? config?.chainId}
              </span>
              <span
                className={`text-xs px-2 py-1 rounded-full bg-white text-black`}
              >
                {config?.chainType}
              </span>
            </div>
            <input
              type="text"
              value={account?.address ?? ""}
              readOnly
              className="w-full p-2 mb-3 text-sm text-gray-300 border border-gray-700 rounded-lg bg-gray-800 focus:outline-none"
            />
            <div className="flex space-x-2">
              <a
                href={config?.blockExplorerAddressPages[0]?.replaceAll(
                  "${address}",
                  account?.address ?? ""
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-800 transition w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 21H4a1 1 0 01-1-1V4a1 1 0 011-1h9.828a1 1 0 01.707.293l6.172 6.172a1 1 0 01.293.707V20a1 1 0 01-1 1h-7z"
                  />
                </svg>
                Explorer
              </a>
              <button
                onClick={disconnectAndromedaClient}
                className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Disconnect
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Connected;
