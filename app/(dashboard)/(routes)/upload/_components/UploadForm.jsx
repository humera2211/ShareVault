import React, { useState } from "react";
import AlertMsg from "./AlertMsg";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";
const UploadForm = ({uploadBtnClick , progress}) => {

const [file,setFile]=useState();
const [errMsg,setErrMsg]=useState();

const onFileSelect=(file)=>{

        console.log(file);

        if(file && file.size>2000000)
        {
            console.log("size greater than 2mb");
            setErrMsg("Max file size is 2mb");
            return;
        }
        setErrMsg(null);
        setFile(file);
}

  return (
    <div className="flex flex-col mt-20 w-3/5 text-center">
      <h1 className="text-center text-xl ">
        Start <span className="text-[#C9A227] font-semibold">Uploading </span>
        file and <span className="text-[#C9A227] font-semibold">Share</span> it.
      </h1>

      {/* drop zone */}
      <div className="flex items-center justify-center my-4 text-center border-2  rounded-lg bg-zinc-300">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border rounded-lg cursor-pointer hover:bg-neutral-tertiary-medium"
        >
          <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
            <svg
              className="w-16 h-16 mb-4 text-[#C9A227]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="none"
              viewBox="0 0 30 30"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-lg text-zinc-900">
              <span className="font-semibold text-[#C9A227]">
                Click to upload{" "}
              </span>
              or drag and drop
            </p>
            <p className="text-xs text-zinc-900">
              SVG, PNG, JPG or PDF (MAX : 2MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            onChange={(e) => onFileSelect(e.target.files[0])}
            className="hidden"
          />
        </label>
      </div>
      {errMsg ? <AlertMsg msg={errMsg} /> : null}
      {file ? (
        <FilePreview file={file} removeFile={() => setFile(null)} />
      ) : null}

      {progress > 0 ? (
        <ProgressBar progress={progress} />
      ) : (
        <button
          onClick={() => uploadBtnClick(file)}
          disabled={!file}
          className="bg-[#C9A227] p-2 self-center text-zinc-900 w-1/4 mt-4 rounded-2xl disabled:bg-gray-400 "
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default UploadForm;
