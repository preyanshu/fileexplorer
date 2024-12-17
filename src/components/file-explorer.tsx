
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
import { ArrowLeft } from "lucide-react";


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
  onInput: (selectedFiles: (string | null)[]) => void;
};

export default function FileExplorer({ closeDialog ,currentPath, homePath , vfsAddress , onInput}: FileExplorerProps) {
  const {  isLoading, error, fetchSubDir, treeData: fileSystem , preconstructTree, loadingPaths} = useSubDirVFSQuery();
  const client = useAndromedaClient();


  const [selectedFolder, setSelectedFolder] = React.useState<FileSystemItem | null>(null);
  const [selectedItems, setSelectedItems] = React.useState<Set<string | null>>(new Set());
  const [selectedFile, setSelectedFile] = React.useState<FileSystemItem | null>(null);


 

  const fileTreeRef  = useRef<HTMLDivElement>(null);
  const folderContentsRef = useRef<HTMLDivElement>(null);
  const cancelBtnRef = useRef<HTMLButtonElement>(null);
  const selectBtnRef = useRef<HTMLButtonElement>(null);

  const bigDivRefs = [fileTreeRef, folderContentsRef, cancelBtnRef, selectBtnRef];




  React.useEffect(() => {
    if (!fileSystem) {
      const fullPath = currentPath ? `${homePath}/${currentPath}` : homePath;
      
        preconstructTree(vfsAddress, fullPath);
      
    
    }
  }, [fileSystem, currentPath, client, homePath, vfsAddress]);
  


  React.useEffect(() => {
    if (fileSystem) {
      if (currentPath) {
        const pathParts = currentPath.split("/"); 
        let currentFolder: FileSystemItem | undefined = fileSystem;
  
        for (const part of pathParts) {
          if (!currentFolder || !currentFolder.children) {
            currentFolder = undefined;
            break;
          }
          currentFolder = currentFolder.children.get(part);
        }
  
        if (currentFolder) {
          setSelectedFolder(currentFolder); 
        } else {
          console.error("Folder not found for path:", currentPath);
          setSelectedFolder(fileSystem);
        }
      } else {
        setSelectedFolder(fileSystem);
      }
    }
  }, [fileSystem, currentPath]); 
  

  const toggleItemSelection = (item: string) => {
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
            {(isLoading || !fileSystem) && (
              <>
                {Array.from({ length: 14 }).map((_, index) => (
                  <Skeleton key={index} className="h-[25px] my-3 mx-3" />
                ))}
              </>
            )}
            {(!isLoading && fileSystem) && (
              <div className="py-1" ref={fileTreeRef} tabIndex={0} onKeyDown={(e) => handleKeyDown(e, 0, bigDivRefs)}>
                <FileSystemTree
                  fetchSubDir={fetchSubDir}
                  item={fileSystem}
                  level={0}
                  onSelectFolder={setSelectedFolder}
                  selectedFolder={selectedFolder}
                  loadingPaths={loadingPaths}
                  handleKeyDown={handleKeyDown}
                  vfsAddress  = {vfsAddress}
                  skipParent={true}
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
              {((isLoading))&& (
                <>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <Skeleton key={index} className="h-[37px] my-4 mx-6" />
                  ))}
                </>
              )}

              { error && !isLoading && (
                <div className="flex items-center justify-center h-[60vh] w-[100%]">
                  <div className="w-1/2">
                  <p className="text-sm text-zinc-300"> error : {error}</p>
                  </div>
                </div>
              )}

              {(!isLoading && fileSystem) && (
                <div className="py-1">
                  <FolderContents
                    folder={selectedFolder}
                    selectedItems={selectedItems}
                    toggleItemSelection={toggleItemSelection}
                    selectedFile={selectedFile}
                    onSelectFile={setSelectedFile}
                    onSelectFolder={setSelectedFolder}
                    folderContentsRef={folderContentsRef}
                    bigDivRefs={bigDivRefs}
                    vfsAddress={vfsAddress}
                    handleKeyDown={handleKeyDown}
                    loadingPaths={loadingPaths}
                    fetchSubDir={fetchSubDir}
                    
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
          ref={cancelBtnRef}
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
          ref={selectBtnRef}
          onKeyDown={(e) => handleKeyDown(e, 3, bigDivRefs)}
          disabled={!(!error && client && fileSystem)}
        >
          Select
        </Button>
      </div>
    </div>
  );
}

type BreadcrumbsProps = {
  folder: FileSystemItem | null;
  onNavigate: (folder: FileSystemItem) => void;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ folder, onNavigate}) => {
  if (!folder) return null;

  const breadcrumbs: FileSystemItem[] = [];
  let current: FileSystemItem | undefined = folder;

 
  while (current) {
    breadcrumbs.unshift(current);
    current = current.parent;
  }

  const handleBack = () => {
    if (breadcrumbs.length > 1) {
      onNavigate(breadcrumbs[breadcrumbs.length - 2]); 
    }
  };

  return (
    <div className="flex items-center justify-between">
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
      
      {/* Back Button on the right side */}
      <Button
        variant="link"
        className="p-0 text-xs text-zinc-300 hover:text-zinc-50 mx-5"
        onClick={handleBack}
      >

        <ArrowLeft className="h-3 w-3" />
        back
      </Button>
    </div>
  );
};


