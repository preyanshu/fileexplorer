'use client';
import { useState } from "react";
import { ConnectWallet } from "@/modules/wallet";
import VFSComponent from "@/components/vfs-component";
import { FileSystemItem } from "@/components/types";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"; 

export default function Page() {
  
  const [currentPath, setCurrentPath] = useState<string>("none");

  
  const pathOptions = [
    "none", 
    "adnrjs_update_test",
    "adnrjs_beta_test/beta-auction"
  ];

  const handleFileSelect = (selectedFiles: (FileSystemItem | null)[]) => {
   
    let message = "";
    selectedFiles.forEach((file) => {
      if (file) {
        message += `File Name: ${file.name}, Address: ${file.address}\n`;
      } else {
        message += "Null file encountered\n";
      }
    });
  
   
    setTimeout(() => {
      alert(message);
    }, 200);
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="absolute top-4 right-4">
        <ConnectWallet />
      </div>

      {/* Dropdown menu for testing current paths */}
      <div className="mb-8 w-full max-w-sm">
        <label htmlFor="path-selector" className="block mb-2">
          Default Path Selector:
        </label>
        <Select onValueChange={(value) => setCurrentPath(value)} value={currentPath}>
          <SelectTrigger className="w-full border rounded-md py-2 px-3">
            <SelectValue placeholder="Select a path" />
          </SelectTrigger>
          <SelectContent>
            {pathOptions.map((pathOption) => (
              <SelectItem key={pathOption} value={pathOption}>
                {pathOption === "none" ? "None (No path selected)" : pathOption}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

    
      <VFSComponent
        homePath="~andr12xxey4enkcfgv522cxl03xmk7tdpmy6k5m5zhr"
        vfsAddress="andr1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqm5w5ze"
        currentPath={currentPath !== "none" ? currentPath : undefined} 
        onFileSelect={handleFileSelect}
      />
    </div>
  );
}
