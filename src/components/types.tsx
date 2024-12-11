export interface FileSystemItem {
    name: string;
    address: string;
    parent_address: string;
    symlink: string | null;
    parent ?: FileSystemItem;
    children?: Map<string, FileSystemItem>; 
  }