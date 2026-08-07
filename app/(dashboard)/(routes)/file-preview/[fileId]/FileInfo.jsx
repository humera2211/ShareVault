import Image from "next/image";

const FileInfo = ({ file }) => {
  const isImage = file.fileType.startsWith("image/");

  return (
    <div className=" rounded-2xl shadow-sm p-8 bg-zinc-600">
      {isImage ? (
        <Image
          src={file.fileUrl}
          width={250}
          height={250}
          alt={file.fileName}
          className="rounded-xl object-contain mx-auto"
        />
      ) : (
        <Image
          src="/pdf.png" // ya pdf-icon.png
          width={80}
          height={80}
          alt="PDF File"
          className="mx-auto"
        />
      )}

      <h2 className="text-xl text-black font-semibold text-center mt-8 break-all">
        {file.fileName}
      </h2>

      <p className="text-zinc-900 text-center mt-2">
        {file.fileType} / {(file.fileSize / 1024).toFixed(2)} KB
      </p>
    </div>
  );
};

export default FileInfo;
