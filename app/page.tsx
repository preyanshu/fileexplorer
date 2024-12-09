'use client'
import FileExplorer from "@/components/file-explorer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ConnectWallet } from "@/modules/wallet";

export default function Page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="absolute top-4 right-4">
        <ConnectWallet />

      </div>
      {/* Center the trigger button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger className="px-4 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400">
          Select
        </DialogTrigger>
        <DialogContent
          className="max-w-[95vw] md:max-w-[65vw] p-1"
          style={{ overflowX: "auto", overflowY: "hidden" }}
          onKeyDown={(e)=>{
            e.preventDefault()
            console.log(e.key)
          }}
        >
          <DialogHeader>
            <DialogDescription>
              {/* Pass `setIsDialogOpen` to FileExplorer */}
              <FileExplorer closeDialog={() => setIsDialogOpen(false)} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
