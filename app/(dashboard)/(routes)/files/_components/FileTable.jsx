"use client";

import Link from "next/link";

const FileTable = ({ files }) => {
  return (
    <table className="w-full border-collapse">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left p-3">File Name</th>
          <th className="text-left p-3">Type</th>
          <th className="text-left p-3">Size</th>
          <th className="text-left p-3">Action</th>
        </tr>
      </thead>

      <tbody>
        {files.map((file) => (
          <tr key={file.id} className="border-b hover:bg-gray-50">
            <td className="p-3">{file.fileName}</td>

            <td className="p-3">{file.fileType}</td>

            <td className="p-3">
              {(file.fileSize / (1024 * 1024)).toFixed(2)} MB
            </td>

            <td className="p-3">
              <Link
                href={`/file-preview/${file.id}`}
                className="text-blue-600 hover:underline"
              >
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FileTable;
