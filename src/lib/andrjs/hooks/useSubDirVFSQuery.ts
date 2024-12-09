import { useState, useCallback } from "react";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import VirtualFileSystemAPI from "@/@andromedaprotocol/andromeda.js/dist/api/VirtualFileSystemAPI";
import { add, min } from "lodash";

interface FileSystemItem {
  name: string;
  address: string;
  parent_address: string;
  symlink: string | null;
  children?: Map<string, FileSystemItem>; 
}

const useSubDir = () => {
  const client = useAndromedaClient();
  const [subDirData, setSubDirData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [treeData, setTreeData] = useState<FileSystemItem | null>(null);


  const updateTree = (tree: FileSystemItem | null, path: string[], newData: FileSystemItem[]): FileSystemItem => {
    if (!tree) {
      const rootNode: FileSystemItem = {
        name: "~andr12xxey4enkcfgv522cxl03xmk7tdpmy6k5m5zhr", 
        address: "",
        parent_address: "",
        symlink: null,
        children: new Map<string, FileSystemItem>(newData.map((item) => [item.name, item])), 
      };
      return rootNode;
    }

    const pathParts = [...path];
    pathParts.shift();
    let currentNode = tree;

    while (pathParts.length > 0) {
      const part = pathParts.shift()!;

      if (!currentNode.children) {
        currentNode.children = new Map();
      }

      if (!currentNode.children.has(part)) {
        const newNode: FileSystemItem = { name: part, address: "", parent_address: "", symlink: null, children: new Map() };
        currentNode.children.set(part, newNode);
      }

      currentNode = currentNode.children.get(part)!;
    }

    if (!currentNode.children) {
      currentNode.children = new Map();
    }

    newData.forEach((item) => {
      if (!currentNode.children!.has(item.name)) {
        currentNode.children!.set(item.name, item);
      }
    });

    return tree;
  };


  const preconstructTree = async (path: string) => {
    const parts = path.split("/");
    let currentPath = "";
    const tasks = [];

    for (let i = 0; i < parts.length; i++) {
      currentPath = parts.slice(0, i + 1).join("/");
      console.log("Current path", currentPath);
      tasks.push(fetchSubDir(currentPath));
    }

    
    await Promise.all(tasks);


  };

  const fetchSubDir = useCallback(
    async (path?: string): Promise<FileSystemItem | null> => {
      if (!client) {
        console.warn("Client not initialized yet");
        setError("Client not initialized");
        return null;
      }

      if (!path) {
        console.warn("Path is required");
        setError("Path is required");
        return null;
      }

      setIsLoading(true);
      setError(null);

      const findPathInTree = (pathParts: string[], currentNode: FileSystemItem | null): FileSystemItem | null => {

        console.log("Finding path in tree", pathParts, currentNode);
        if (!currentNode) return null;

        const home = pathParts[0];
        if (currentNode.name !== home) return null;

        pathParts.shift();
        let node = currentNode;

        for (const part of pathParts) {
            console.log("Part", part , node.children);
          if (!node.children || !node.children.has(part)) {
            return null;
          }

          node = node.children.get(part)!;
          if(!node.children){
            return null
          }
        }

        return node; // Return the node if the path exists
      };

      const pathParts = path.split("/");
      const existingNode = findPathInTree(pathParts, treeData);

      console.log("Existing node", existingNode);

      if (existingNode) {
        console.log("Path already exists, returning existing node data");
        console.log("Existing node children", existingNode);
        setSubDirData(existingNode.children ? Array.from(existingNode.children.values()) : []);
        setIsLoading(false);
        return existingNode;
      }

      try {
        const vfsAddress = "andr1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqm5w5ze"; // Replace with actual contract address
        const vfsAPI = new VirtualFileSystemAPI(client, vfsAddress);

        const data = await vfsAPI.subDir(path);
        setSubDirData(data);

        setTreeData((prevTreeData) => {
          return updateTree(prevTreeData, path.split("/"), data);
        });

        return null;
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching subDir data:", err);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [client, treeData]
  );

  return { subDirData, error, isLoading, fetchSubDir, treeData , preconstructTree };
};

export default useSubDir;
