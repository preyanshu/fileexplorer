
import * as React from "react";
import { ChevronLast, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSubDirVFSQuery } from "@/lib/andrjs";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import { useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { handleKeyDown } from "./keyboard-nav";
import { FileSystemItem } from "./types";
import { FileSystemTree } from "./file-system-tree";
import { FolderContents } from "./folder-contents";
import { FileDetails } from "./file-details";

function addParentReferences(item: FileSystemItem, parent?: FileSystemItem): void {
  if (!item) return;

  if (!('parent' in item)) {
    Object.defineProperty(item, 'parent', {
      value: parent,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  } else {
    item.parent = parent;
  }

  if (item.children) {
    item.children.forEach(child => addParentReferences(child, item));
  }
}

type FileExplorerProps = {
  closeDialog: () => void;
  currentPath?: string;  
  homePath: string;
  vfsAddress: string;
  onInput: (selectedFiles: (FileSystemItem | null)[]) => void;
};

export default function FileExplorer({ closeDialog ,currentPath, homePath , vfsAddress , onInput}: FileExplorerProps) {
  const {  isLoading, error, fetchSubDir, treeData: fileSystem , preconstructTree } = useSubDirVFSQuery();
  const client = useAndromedaClient();

  const [selectedFolder, setSelectedFolder] = React.useState<FileSystemItem | null>(null);
  const [selectedItems, setSelectedItems] = React.useState<Set<FileSystemItem | null>>(new Set());
  const [selectedFile, setSelectedFile] = React.useState<FileSystemItem | null>(null);
  const [currentLoadingSubDir, setCurrentLoadingSubDir] = React.useState<string | null>(null);

 
  const bigDivRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];



  React.useEffect(() => {
    if (!fileSystem) {
      const fullPath = currentPath ? `${homePath}/${currentPath}` : homePath;
      preconstructTree(vfsAddress, fullPath);
    }
  }, [fileSystem, currentPath, client, homePath, vfsAddress]);
  


  React.useEffect(() => {
    if (fileSystem) {
      if (currentPath) {
        const pathParts = currentPath.split("/"); // Split the currentPath into parts
        let currentFolder: FileSystemItem | undefined = fileSystem;
  
        for (const part of pathParts) {
          if (!currentFolder || !currentFolder.children) {
            currentFolder = undefined;
            break;
          }
          currentFolder = currentFolder.children.get(part); // Traverse to the next child
        }
  
        if (currentFolder) {
          setSelectedFolder(currentFolder); // Set the located folder
        } else {
          console.error("Folder not found for path:", currentPath);
          setSelectedFolder(fileSystem); // Set to root if not found
        }
      } else {
        setSelectedFolder(fileSystem); // Set to root if no currentPath
      }
    }
  }, [fileSystem, currentPath]); // Depend on fileSystem and currentPath
  

  const toggleItemSelection = (item: FileSystemItem) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });
  };

  React.useEffect(() => {
    bigDivRefs[0]?.current?.focus();
  }, [bigDivRefs[0].current]);

  if (fileSystem) {
    addParentReferences(fileSystem);
  }

  return (
    <div className="flex flex-col bg-zinc-950 text-zinc-50 min-w-[800px]" tabIndex={-1}>
      {/* Header */}
      <div className="flex w-full">
        <div className="border-r border-zinc-800 overscroll-y-auto min-w-[300px]">
          <div className="p-2 border-b border-zinc-800">
            <h1 className="text-sm font-semibold">VFS Explorer</h1>
          </div>
          <ScrollArea className="h-[60vh] w-full">
            {(error || !client || !fileSystem) && (
              <>
                {Array.from({ length: 14 }).map((_, index) => (
                  <Skeleton key={index} className="h-[25px] my-3 mx-3" />
                ))}
              </>
            )}
            {(!error && client && fileSystem) && (
              <div className="py-1" ref={bigDivRefs[0]} tabIndex={0} onKeyDown={(e) => handleKeyDown(e, 0, bigDivRefs)}>
                <FileSystemTree
                  fetchSubDir={fetchSubDir}
                  item={fileSystem}
                  level={0}
                  onSelectFolder={setSelectedFolder}
                  selectedFolder={selectedFolder}
                  isLoading={isLoading}
                  currentLoadingSubDir={currentLoadingSubDir}
                  setCurrentLoadingSubDir={setCurrentLoadingSubDir}
                  bigDivRefs={bigDivRefs}
                  handleKeyDown={handleKeyDown}
                  vfsAddress  = {vfsAddress}
                />
              </div>
            )}
          </ScrollArea>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="p-2 border-b border-zinc-800">
            <Breadcrumbs folder={selectedFolder} onNavigate={setSelectedFolder} />
          </div>
          <div className="flex-1 flex relative">
            <ScrollArea className="flex-1 h-[60vh] overflow-y-auto w-full">
              {((!client && error) || (!fileSystem && !error))&& (
                <>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <Skeleton key={index} className="h-[37px] my-4 mx-6" />
                  ))}
                </>
              )}

              {(error && client) && (
                <div className="flex items-center justify-center h-[60vh] w-[100%]">
                  <div className="w-1/2">
                  <p className="text-sm text-zinc-300"> error : {error}</p>
                  </div>
                </div>
              )}

              {(!error && client && fileSystem) && (
                <div className="py-1">
                  <FolderContents
                    folder={selectedFolder}
                    selectedItems={selectedItems}
                    toggleItemSelection={toggleItemSelection}
                    selectedFile={selectedFile}
                    onSelectFile={setSelectedFile}
                    bigDivRefs={bigDivRefs}
                    handleKeyDown={handleKeyDown}
                  />
                </div>
              )}
            </ScrollArea>
            {selectedFile && (
              <div className="w-1/3 border-l border-zinc-800 p-4 absolute top-0 right-0 bg-zinc-950 h-full overflow-y-auto">
                <div className="flex justify-between items-between mb-4">
                  <h2 className="text-lg font-semibold text-left">File Details</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="-mt-[2px]"
                    onClick={() => setSelectedFile(null)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <FileDetails file={selectedFile} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full px-4 py-3 border-t border-zinc-800 flex justify-end">
        <Button
          variant="secondary"
          className="mr-4"
          onClick={() => {
            console.log('Cancel clicked');
            closeDialog();
          }}
          tabIndex={0}
          ref={bigDivRefs[2] as unknown as React.RefObject<HTMLButtonElement>}
          onKeyDown={(e) => handleKeyDown(e, 2, bigDivRefs)}
        >
          Cancel
        </Button>
        <Button
          variant="default"
          onClick={() => {
            console.log('Save clicked');
            closeDialog();
            onInput(Array.from(selectedItems));
          
          }}
          tabIndex={0}
          ref={bigDivRefs[3] as unknown as React.RefObject<HTMLButtonElement>}
          onKeyDown={(e) => handleKeyDown(e, 3, bigDivRefs)}
          disabled={!(!error && client && fileSystem)}
        >
          Select
        </Button>
      </div>
    </div>
  );
}

function Breadcrumbs({ folder, onNavigate }: { 
  folder: FileSystemItem | null;
  onNavigate: (folder: FileSystemItem) => void;
}) {
  if (!folder) return null;

  const breadcrumbs: FileSystemItem[] = [];
  let current: FileSystemItem | undefined = folder;
  while (current) {
    breadcrumbs.unshift(current);
    current = current.parent;
  }

  return (
    <div className="flex items-center text-xs">
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronLast className="h-3 w-3 mx-1 text-zinc-500" />}
          <Button
            variant="link"
            className="p-0 h-auto text-xs font-normal text-zinc-300 hover:text-zinc-50"
            onClick={() => onNavigate(item)}
          >
            {item.name}
          </Button>
        </React.Fragment>
      ))}
    </div>
  );
}
