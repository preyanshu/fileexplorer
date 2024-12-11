import React from "react";
import { FileSystemItem } from "./types";
import { ChevronRight, Folder, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactLoading from "react-loading";

interface FileSystemTreeProps {
  item: FileSystemItem | null;
  level: number;
  onSelectFolder: (folder: FileSystemItem) => void;
  selectedFolder: FileSystemItem | null;
  fetchSubDir: (vfsaddress:string , path: string) => Promise<FileSystemItem | null>;
  isLoading: boolean;
  currentLoadingSubDir: string | null;
  setCurrentLoadingSubDir: (subdir: string | null) => void;
  bigDivRefs: React.RefObject<HTMLDivElement>[];
  vfsAddress: string;
  handleKeyDown: (e: React.KeyboardEvent, divIndex: number, bigDivRefs: React.RefObject<HTMLDivElement>[]) => void;
}

export function FileSystemTree({
  item,
  level,
  onSelectFolder,
  selectedFolder,
  fetchSubDir,
  isLoading,
  currentLoadingSubDir,
  setCurrentLoadingSubDir,
  bigDivRefs,
  vfsAddress,
  handleKeyDown,
}: FileSystemTreeProps) {
 

  const [isOpen, setIsOpen] = React.useState(level === 0);
 

  const isSelected = item === selectedFolder;

  // Construct the full path based on the current item and its parents.
  const constructFullPath = (item: FileSystemItem | null): string => {
    let path = item?.name || "";
    let parent = item?.parent; // Assuming each `item` has a `parent` reference.
    while (parent) {
      path = `${parent.name}/${path}`;
      parent = parent.parent;
    }
    return path;
  };

  const navigateTo = async (path: string) => {
    
    await fetchSubDir(vfsAddress , path);
    if (item) {
      onSelectFolder(item);
    }
  };

  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        className={`h-6 w-full justify-start px-1 py-0 text-xs font-normal text-zinc-100 hover:bg-zinc-800 hover:text-zinc-50 
          ${level > 0 ? "ml-3" : ""} 
          ${isSelected ? "bg-zinc-800 text-zinc-50" : ""}`}
        onClick={() => {
          setIsOpen(!isOpen);
          if (item) {
            setCurrentLoadingSubDir(item.address);
            navigateTo(constructFullPath(item));
          }
        }}
        tabIndex={0}
      >
        <ChevronRight
          className={`mr-1 h-3 w-3 transition-transform ${isOpen ? "rotate-90" : ""}`}
        />
        {isOpen && <FolderOpen className="mr-1 h-3 w-3 text-zinc-500" />}
        {!isOpen && <Folder className="mr-1 h-3 w-3 text-zinc-500" />}
        {item && item?.name?.length > 15 ? `${item.name.slice(0, 15)}...` : item?.name}
      </Button>

      {currentLoadingSubDir === item?.address && isLoading && (
        <div className="ml-11 flex items-center space-x-2 text-sm text-gray-400">
          <ReactLoading type="spin" color="gray" height={16} width={16} />
          <span>Loading . . .</span>
        </div>
      )}

      {isOpen && item?.children && (
        <div className="ml-3">
          {Array.from(item.children.values()).map((child, index) => (
            <FileSystemTree
              key={index}
              item={child}
              level={level + 1}
              onSelectFolder={onSelectFolder}
              selectedFolder={selectedFolder}
              fetchSubDir={fetchSubDir}
              isLoading={isLoading}
              currentLoadingSubDir={currentLoadingSubDir}
              setCurrentLoadingSubDir={setCurrentLoadingSubDir}
              bigDivRefs={bigDivRefs}
              vfsAddress={vfsAddress}
              handleKeyDown={handleKeyDown}
            />
          ))}
        </div>
      )}
    </div>
  );
}
