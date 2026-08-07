import { Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const FileItem = ({file}) => {
  const [password,setPassword]=useState('');

  console.log("File URL:",file.fileUrl);
  return (
    <div className="max-w-md mx-auto bg-zinc-800 rounded-2xl shadow-lg p-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center">
        <span className="text-yellow-600">ShareVault</span>{" "}
        <span className="text-white">Shared the file with You</span>
      </h2>

      <p className="text-center text-gray-500 mt-3">Find file details below</p>

      {/* File Icon */}
      <div className="flex justify-center mt-10">
        <Image
          src="/downloadFile.gif"
          alt="file download"
          width={150}
          height={150}
          className="rounded-lg"
        />
      </div>

      {/* File Details */}
      <div className="mt-10 text-center text-xl font-semibold text-white space-y-2">
        <p>
          <span>{file.fileName}</span>
        </p>

        <p>
          {file.fileType} &nbsp; {(file.fileSize / (1024 * 1024)).toFixed(2)} MB
        </p>
      </div>

      {/* Password */}

      {file.password?.length > 0 ? (
        <input
          type="password"
          placeholder="Enter password to access"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-8 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : null}

      {/* Download Button */}
      <button
        disabled={file.password && file.password !== password}
        onClick={() => window.open(file?.fileUrl)}
        className={`w-full mt-8 rounded-full py-4 flex justify-center items-center gap-2 transition
${
  file.password && file.password !== password
    ? "bg-gray-400 cursor-not-allowed"
    : "bg-yellow-600 hover:bg-yellow-700 text-black"
}`}
      >
        <Download size={22} />
        Download
      </button>

    </div>
  );
};

export default FileItem;
