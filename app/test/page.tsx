'use client'
import React, { useState, useEffect } from "react";
// import useSubDir from "@/hooks/useSubDir";
import { useSubDirVFSQuery } from "@/lib/andrjs";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";

const FileExplorer = () => {
  const baseDirectory = "~andr12xxey4enkcfgv522cxl03xmk7tdpmy6k5m5zhr"; // Home directory
  const [currentPath, setCurrentPath] = useState<string>(baseDirectory);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([baseDirectory]);
  const { subDirData, isLoading, error, fetchSubDir, treeData , preconstructTree} = useSubDirVFSQuery ();

//   useEffect(() => {
//     // Fetch initial directory contents
//     fetchSubDir(currentPath);
//     // console.log('subDirData', subDirData)
//     // console.log('treeData', treeData)
//   }, [currentPath, fetchSubDir]);
 
useEffect(()=>{
  console.log('td : ', treeData)
}
, [treeData])

const client = useAndromedaClient();
  useEffect(()=>{
    preconstructTree("~andr12xxey4enkcfgv522cxl03xmk7tdpmy6k5m5zhr")
    
    setCurrentPath("~andr12xxey4enkcfgv522cxl03xmk7tdpmy6k5m5zhr")
    updateBreadcrumbs("~andr12xxey4enkcfgv522cxl03xmk7tdpmy6k5m5zhr")
  },[client])

  const navigateTo = async (path: string) => {
    setCurrentPath(path);
    await fetchSubDir(path);
    updateBreadcrumbs(path);
  };

  useEffect(()=>{
    console.log('subDirData', subDirData)
  }, [subDirData])

  const updateBreadcrumbs = (path: string) => {
    const parts = path.replace(baseDirectory, "").split("/").filter(Boolean);
    const breadcrumbPaths = parts.map(
      (part, idx) => `${baseDirectory}/${parts.slice(0, idx + 1).join("/")}`
    );
    setBreadcrumbs([baseDirectory, ...breadcrumbPaths]);
  };

  const handleFolderClick = (folderName: string) => {
    const newPath =
      currentPath === baseDirectory ? `${currentPath}/${folderName}` : `${currentPath}/${folderName}`;
    navigateTo(newPath);
  };

  const handleBreadcrumbClick = (breadcrumb: string) => {
    navigateTo(breadcrumb);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb}>
            <button
              onClick={() => handleBreadcrumbClick(breadcrumb)}
              className="text-blue-500 hover:underline"
            >
              {breadcrumb === baseDirectory ? "Home" : breadcrumb.split("/").pop()}
            </button>
            {index < breadcrumbs.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Main File Explorer Area */}
      <div className="flex-grow overflow-y-auto p-4">
        {isLoading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">Error: {error}</div>
        ) : subDirData ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {subDirData.map((item: any) => (
              <div
                key={item.name}
                onClick={() => handleFolderClick(item.name)}
                className="flex flex-col items-center space-y-2 cursor-pointer"
              >
                <div className="flex justify-center items-center w-20 h-20 rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700">
                  <i className="fas fa-folder text-yellow-500 text-4xl"></i>
                </div>
                <p className="text-center text-sm truncate w-20">{item.name}</p>
              </div>
            ))}

            {subDirData.length === 0 && (
                <div className="text-center text-lg ">No items to display</div>
            )}
          </div>
        ) : (
          <div className="text-center text-lg ">No items to display</div>
        )}
      </div>
    </div>
  );
};

export default FileExplorer;
