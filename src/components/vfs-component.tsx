
import { useState } from "react";
import FileExplorer from "@/components/file-explorer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileSystemItem } from "@/components/types";

interface VFSComponentProps {
  homePath: string;
  vfsAddress: string;
  currentPath: string | undefined;
  onFileSelect: (selectedFiles: (FileSystemItem | null)[]) => void;
}

export default function VFSComponent({
  homePath,
  vfsAddress,
  currentPath,
  onFileSelect,
}: VFSComponentProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="px-4 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300">
        Select Ados
      </DialogTrigger>
      <DialogContent
        className="max-w-[95vw] md:max-w-[65vw] p-1"
        style={{ overflowX: "auto", overflowY: "hidden", border: "0px" }}
        tabIndex={-1}
      >
        <DialogHeader>
          <DialogDescription>
            <FileExplorer
              closeDialog={() => setIsDialogOpen(false)}
              homePath={homePath}
              vfsAddress={vfsAddress}
              currentPath={currentPath}
              onInput={onFileSelect} 
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
