import React from "react";
import { ChevronRight, Folder, File, FolderOpen } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FileSystemItem } from "./types";

// Define the types for the props of FolderContents component.
interface FolderContentsProps {
  folder: FileSystemItem | null;
  selectedItems: Set<FileSystemItem | null>;
  toggleItemSelection: (item: FileSystemItem) => void;
  onSelectFile: (file: FileSystemItem | null) => void;
  selectedFile: FileSystemItem | null;
  bigDivRefs: React.RefObject<HTMLDivElement>[];
  handleKeyDown: (event: React.KeyboardEvent, index: number, refs: React.RefObject<HTMLDivElement>[]) => void;
}

export function FolderContents({
  folder,
  selectedItems,
  toggleItemSelection,
  onSelectFile,
  selectedFile,
  bigDivRefs,
  handleKeyDown,
}: FolderContentsProps) {
  const contents = Array.from(folder?.children?.values() || []);

  return (
    <div
    >
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
          <tbody ref={bigDivRefs[1] as React.RefObject<HTMLTableSectionElement>} tabIndex={0} onKeyDown={(e) => handleKeyDown(e, 1, bigDivRefs)}>
            {contents.map((item, index) => (
              <tr key={index} className={`hover:bg-zinc-800 `} tabIndex={0}>
                <td className="w-[60px] p-2">
                  <Checkbox
                    checked={selectedItems.has(item)}
                    onCheckedChange={() => toggleItemSelection(item)}
                    aria-label={`Select ${item.name}`}
                    className="h-4 w-4 mx-[15px]"
                  />
                </td>
                <td className="pl-0 pr-2 py-2 flex items-center" style={{ width: "fit-content" }}>
                  {item.children ? (
                    <Folder className="mr-1 h-3 w-3 text-zinc-500" />
                  ) : (
                    <File className="mr-1 h-3 w-3 text-zinc-500" />
                  )}
                  {item.name}
                </td>
                <td className="p-2 text-nowrap">
                  {item.address.slice(0, 4) + "...." + item.address.slice(-4)}
                </td>
                <td className="p-2">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-xs text-zinc-50 hover:text-zinc-300"
                    onClick={() => {
                      if (selectedFile && selectedFile === item) {
                        onSelectFile(null);
                      } else {
                        onSelectFile(item);
                      }
                    }}
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
