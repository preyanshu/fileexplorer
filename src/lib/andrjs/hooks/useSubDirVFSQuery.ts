import { useState, useCallback } from "react";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import VirtualFileSystemAPI from "@andromedaprotocol/andromeda.js/dist/api/VirtualFileSystemAPI";
import {useQueryClient } from "@tanstack/react-query";

interface FileSystemItem {
  name: string;
  address: string;
  parent_address: string;
  symlink: string | null;
  children?: Map<string, FileSystemItem>; 
}

const useSubDir = () => {
 
  const [subDirData, setSubDirData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingPaths, setLoadingPaths] = useState<Map<string, boolean>>(new Map());
  const [treeData, setTreeData] = useState<FileSystemItem | null>(null);


  const client = useAndromedaClient();
  const queryClient = useQueryClient(); 



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


  const getDir = async (vfsAddress: string, path: string) => {
    if(!client){
      console.warn("Client not initialized yet");
      setError("Client not initialized");
      return;
    }
    console.log("calling")
    const vfsAPI = new VirtualFileSystemAPI(client, vfsAddress);
    return await vfsAPI.subDir(path);
  };


  const getSubDirData = (vfsAddress:string,currentPath:string) =>{
    const queryKey = ['subDir', vfsAddress, currentPath];
    return queryClient.fetchQuery({
      queryKey,
      queryFn: () => getDir(vfsAddress, currentPath),
      staleTime: Infinity
    });
  }



  
  const preconstructTree = async (vfsAddress: string, path: string) => {
     

    setIsLoading(true);
    setError(null);
  

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
  
  
    const parts = path.split("/");
    let currentPath = "";
  
    const fetchTasks = parts.map(async(_, i) => {
      currentPath = parts.slice(0, i + 1).join("/");
      console.log("Fetching data for path:", currentPath);
      return getSubDirData(vfsAddress,currentPath);
    });
  
    try {

      const results = await Promise.all(fetchTasks);

      console.log("Results", results);
  
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
      setIsLoading(false);
  
    } catch (err: any) {
      console.error("Error during tree construction:", err);
      setIsLoading(false);
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

      setLoadingPaths(prevState => new Map(prevState.set(path, true)));
      setError(null);

      try {


       
        const data = await getSubDirData(vfsAddress, path);

        setSubDirData(data);


        setTreeData((prevTreeData) => {
          
          return updateTree(prevTreeData, path.split("/"), data);
        });



        return null;
      } catch (err: any) {
        setError(err.message);
        
        return null;
      } finally {
        setLoadingPaths(prevState => {
          const updatedState = new Map(prevState);
          updatedState.set(path, false);
          return updatedState;
        });
      }
    },
    [client, treeData ]
  );

  return { subDirData, error, isLoading,loadingPaths ,fetchSubDir, treeData , preconstructTree };
};

export default useSubDir;
