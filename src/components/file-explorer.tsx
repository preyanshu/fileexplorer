import * as React from "react"
import { ChevronRight, Folder, ChevronLast, File, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { useSubDirVFSQuery } from "@/lib/andrjs"
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient"


type FileSystemItem = {
  name: string;
  address : string;
  children?: Map<string, FileSystemItem> | null;

};



function addParentReferences(item: FileSystemItem, parent?: FileSystemItem) {

  if(!item) return;

  if (!('parent' in item)) {
    Object.defineProperty(item, 'parent', {
      value: parent,
      writable: true, 
      enumerable: true, 
      configurable: true 
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
  };

export default function FileExplorer({ closeDialog }: FileExplorerProps) {

     const { 
      subDirData, 
      isLoading, 
      error, 
      fetchSubDir, 
      treeData: fileSystem,  
      preconstructTree 
    } = useSubDirVFSQuery();

    const client = useAndromedaClient();

  




  const [selectedFolder, setSelectedFolder] = React.useState<FileSystemItem| null>(null) ;
  const [selectedItems, setSelectedItems] = React.useState<Set<string>>(new Set())
  const [selectedFile, setSelectedFile] = React.useState<FileSystemItem | null>(null)

  React.useEffect(() => {
   
    if (!fileSystem ) {
      fetchSubDir("~andr12xxey4enkcfgv522cxl03xmk7tdpmy6k5m5zhr");
    }
  
   
    if (fileSystem && !selectedFolder) {
      setSelectedFolder(fileSystem);
    }
  }, [fileSystem, selectedFolder, client]);


  if(!client || isLoading){
    return <>Loading .. </>
  }

  if( error){
    return <>{error} </>
  }

  if(!fileSystem){
    return <>No data </>
  }
  
    const toggleItemSelection = (itemName: string) => {
      setSelectedItems(prev => {
        const newSet = new Set(prev)
        if (newSet.has(itemName)) {
          newSet.delete(itemName)
        } else {
          newSet.add(itemName)
        }
        return newSet
      })
    }

 

    if(fileSystem){
      addParentReferences(fileSystem)
    }
  
    return (
      <div className="flex flex-col  bg-zinc-950 text-zinc-50 min-w-[800px] " >
        {/* Header */}
        <div className="flex w-full">
          <div className="w-1/4 border-r border-zinc-800">
            <div className="p-2 border-b border-zinc-800">
              <h1 className="text-sm font-semibold">VFS Explorer</h1>
            </div>
            <ScrollArea className="h-[60vh] w-full" >
              <div className="py-1">
                <FileSystemTree
                  item={fileSystem}
                  level={0}
                  onSelectFolder={setSelectedFolder}
                  selectedFolder={selectedFolder}
                />
              </div>
            </ScrollArea>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="p-2 border-b border-zinc-800">
              <Breadcrumbs folder={selectedFolder} onNavigate={setSelectedFolder} />
            </div>
            <div className="flex-1 flex">
              <ScrollArea className="flex-1 h-[60vh] overflow-y-auto w-full">
                <div className="py-1">
                  <FolderContents
                    folder={selectedFolder}
                    selectedItems={selectedItems}
                    toggleItemSelection={toggleItemSelection}
                    onSelectFile={setSelectedFile}
                  />
                </div>
              </ScrollArea>
              {selectedFile && (
                <div className="w-1/3 border-l border-zinc-800 p-4">
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
        <div className="w-full px-4 py-3 border-t border-zinc-800 flex justify-end ">
          <Button
            variant="secondary"
            className="mr-4"
            onClick={() => {
              console.log('Cancel clicked')
              closeDialog();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="default"
            onClick={() => {
              console.log('Save clicked')
            }}
          >
            Open
          </Button>
        </div>
      </div>
    )
  }
  
  function FileSystemTree({
    item,
    level,
    onSelectFolder,
    selectedFolder,
  }: {
    item: FileSystemItem;
    level: number;
    onSelectFolder: (folder: FileSystemItem) => void;
    selectedFolder: FileSystemItem;
  }) {
    const [isOpen, setIsOpen] = React.useState(level === 0);
    const [focusIndex, setFocusIndex] = React.useState(-1);
    const treeRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
      onSelectFolder(item);
    };
  
    const isSelected = item === selectedFolder;
  
    const handleKey = (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setIsOpen(!isOpen);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        navigate(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        navigate(-1);
      }
    };
  
    const navigate = (direction: number) => {
      console.log('Navigating')
      const siblings = item.children ? Array.from(item.children.values()) : [];
      const maxIndex = siblings.length - 1;
      let newFocusIndex = focusIndex + direction;
  
   
      if (newFocusIndex > maxIndex) newFocusIndex = 0;
      if (newFocusIndex < 0) newFocusIndex = maxIndex;
  
      setFocusIndex(newFocusIndex);
  

      const targetNode = treeRefs.current[newFocusIndex];
      if (targetNode) {
        targetNode.focus();
        onSelectFolder(siblings[newFocusIndex]);
      }
    };
  
    React.useEffect(() => {
    
      if (!isOpen) {
        setFocusIndex(-1);
      }
    }, [isOpen]);
  
    return (
      <div onKeyDown={handleKey}>
        <Button
          ref={(el) => (treeRefs.current[level] = el)}
          variant="ghost"
          size="sm"
          className={`h-6 w-full justify-start px-1 py-0 text-xs font-normal text-zinc-100 hover:bg-zinc-800 hover:text-zinc-50 
              ${level > 0 ? "ml-3" : ""} 
              ${isSelected ? "bg-zinc-800 text-zinc-50" : ""}`}
          onClick={toggleOpen}
        >
          <ChevronRight
            className={`mr-1 h-3 w-3 transition-transform ${isOpen ? "rotate-90" : ""}`}
          />
          <Folder className="mr-1 h-3 w-3 text-zinc-500" />
          {item.name.length > 15 ? `${item.name.slice(0, 15)}...` : item.name}
        </Button>
        {isOpen && item.children && (
          <div className="ml-3">
            {Array.from(item.children.values()).map((child, index) => (
              <FileSystemTree
                key={index}
                item={child}
                level={level + 1}
                onSelectFolder={onSelectFolder}
                selectedFolder={selectedFolder}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
  

function Breadcrumbs({ folder, onNavigate }: { 
  folder: FileSystemItem,
  onNavigate: (folder: FileSystemItem) => void
}) {
  const breadcrumbs: FileSystemItem[] = []
  let current: FileSystemItem | undefined = folder
  while (current) {
    breadcrumbs.unshift(current)
    current = current?.parent 
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
  )
}

function FolderContents({ 
  folder, 
  selectedItems, 
  toggleItemSelection,
  onSelectFile
}: { 
  folder: FileSystemItem; 
  selectedItems: Set<string>;
  toggleItemSelection: (itemName: string) => void;
  onSelectFile: (file: FileSystemItem) => void;
}) {
  const contents = Array.from(folder?.children?.values() || []) 

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div>
      {contents.length > 0 ? (
        <table className="w-full text-xs">
          <thead>
            <tr className="text-left text-zinc-500">
              <th className="w-[60px] p-2"></th>
              <th className="p-2">Name</th>
              <th className="p-2">Address</th>
              <th className="p-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-zinc-800 ${selectedItems.has(item.name) ? "text-fuchsia-500" : ""}`}
              >
                <td className="w-[60px] p-2">
                  <Checkbox
                    checked={selectedItems.has(item.name)}
                    onCheckedChange={() => toggleItemSelection(item.name)}
                    aria-label={`Select ${item.name}`}
                    className="h-4 w-4 mx-[15px]"
                  />
                </td>
                <td className="pl-0 pr-2 py-2 flex items-center" style={{width:"fit-content"}}>
                  {true ? (
                    <Folder className="mr-1 h-3 w-3 text-zinc-500" />
                  ) : (
                    <File className="mr-1 h-3 w-3 text-zinc-500" />
                  )}
                  {item.name}
                </td>
                <td className="p-2 text-nowrap">{item.address.slice(0, 4) + '....' + item.address.slice(-4)}</td>
                <td className="p-2">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-xs text-zinc-50 hover:text-zinc-300"
                    onClick={() => onSelectFile(item)}
                  >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-zinc-500 text-s p-4">This folder is empty</p>
      )}
    </div>
  );
  
}

function FileDetails({ file }: { file: FileSystemItem }) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="text-left space-y-4">
      <div>
        <h3 className="text-sm font-semibold">Name</h3>
        <p className="text-sm">{file.name}</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold">Name</h3>
        <p className="text-sm">{file.address}</p>
      </div>

      {/* Placeholder for custom information based on type */}
      <div>
        <h3 className="text-sm font-semibold">Additional Information</h3>
        <p className="text-sm text-zinc-400">Custom details will be displayed here based on the file type.</p>
      </div>
    </div>
  )
}