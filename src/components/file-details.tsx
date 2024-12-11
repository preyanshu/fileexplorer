import { FileSystemItem } from "./types";

export function FileDetails({ file }: { file: FileSystemItem }) {
    return (
      <div className="text-left space-y-4 ">
        <div>
          <h3 className="text-sm font-semibold">Name</h3>
          <p className="text-sm break-words">{file.name}</p>
        </div>
  
        <div>
          <h3 className="text-sm font-semibold">Address</h3>
          <p className="text-sm break-words">{file.address}</p>
        </div>
  
        <div>
          <h3 className="text-sm font-semibold">Parent Address</h3>
          <p className="text-sm break-words">{file.parent_address}</p>
        </div>
  
        {/* Placeholder for custom information based on type */}
        <div>
          <h3 className="text-sm font-semibold">Additional Information</h3>
          <p className="text-sm text-zinc-400">
            Custom details will be displayed here based on the file type.
          </p>
        </div>
      </div>
    );
  }