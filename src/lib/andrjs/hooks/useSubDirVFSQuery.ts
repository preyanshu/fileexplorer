import { useState, useCallback } from "react";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import VirtualFileSystemAPI from "@andromedaprotocol/andromeda.js/dist/api/VirtualFileSystemAPI";

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

    const pathParts = [...path];
    const rootNodeName = pathParts.shift();

    if (!tree) {
      const rootNode: FileSystemItem = {
        name: rootNodeName!, 
        address: "_",
        parent_address: "_",
        symlink: null,
        children: new Map<string, FileSystemItem>(newData.map((item) => [item.name, item])), 
      };
      return rootNode;
    }

   


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


  const preconstructTree = async (vfsAddress: string, path: string) => {
    if (!client) {
      console.warn("Client not initialized yet");
      setError("Client not initialized");
      return;
    }

    if (!path) {
      console.warn("Path is required");
      setError("Path is required");
      return;
    }
    setIsLoading(true);
    setError(null);

    const parts = path.split("/");
    let currentPath = "";
    const vfsAPI = new VirtualFileSystemAPI(client, vfsAddress);
  
    
    const fetchTasks = parts.map((_, i) => {
      currentPath = parts.slice(0, i + 1).join("/");
      console.log("Fetching data for path:", currentPath);
  
      return vfsAPI.subDir(currentPath);
    });
  
    try {

      const results = await Promise.all(fetchTasks);

      let accumulatedTree = treeData ? { ...treeData } : null;

    results.forEach((data, index) => {
      if (data) {
        const pathParts = parts.slice(0, index + 1);
        accumulatedTree = updateTree(
          accumulatedTree,
          pathParts,
          data.map((item: any) => ({
            name: item.name,
            address: item.address,
            parent_address: item.parent_address,
            symlink: item.symlink || null,
            children: item.children ? new Map<string, FileSystemItem>() : undefined,
          }))
        );
      }
    });

   
    setTreeData(accumulatedTree);
    

  
 
    } catch (err : any) {
      console.error("Error during tree construction:", err);
      setError(err?.message || "Unknown error occurred");
    }
  };
  
  


  const fetchSubDir = useCallback(
    async (vfsAddress: string, path: string) : Promise<FileSystemItem | null> => {
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
            
          if (!node.children || !node.children.has(part)) {
            return null;
          }

          node = node.children.get(part)!;
          if(!node.children){
            return null
          }
        }

        return node; 
      };

      const pathParts = path.split("/");
      const existingNode = findPathInTree(pathParts, treeData);

      

      if (existingNode) {
        console.log("Path already exists, returning existing node data");
        console.log("Existing node children", existingNode);
        setSubDirData(existingNode.children ? Array.from(existingNode.children.values()) : []);
        setIsLoading(false);
        return existingNode;
      }

      try {
        const vfsAPI = new VirtualFileSystemAPI(client, vfsAddress);

        const data = await vfsAPI.subDir(path);
        setSubDirData(data);

        setTreeData((prevTreeData) => {
          
          return updateTree(prevTreeData, path.split("/"), data);
        });

        return null;
      } catch (err: any) {
        setError(err.message);
        
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [client, treeData ]
  );

  return { subDirData, error, isLoading, fetchSubDir, treeData , preconstructTree };
};

export default useSubDir;
