"use client";
import React from "react";
import UploadForm from "./_components/UploadForm";
import { useState } from "react";
import axios from "axios";
import { app } from "@/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { generateRandomString } from "@/app/_utils/GenerateRandomString";
import { useRouter } from "next/navigation";

const Upload = () => {
  const [progress, setProgress] = useState(0);
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const { user } = useUser(); //hook of clerk

  const router=useRouter();

  const uploadFile = async (file) => {
    if (!file) {
      return;
    }

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "sharevault");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/de0kxcexj/auto/upload",
        formData,
        {
          onUploadProgress: (event) => {
            const percent = Math.round((event.loaded * 100) / event.total);
            setProgress(percent);
          },
        },
      );

      const data = res.data;

      if (data.secure_url) {
        console.log("Upload Successful");
        console.log(data.secure_url);

        await saveInfo(file, data.secure_url);
        return;
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveInfo = async (file, downloadUrl) => {

    try{
    const docId = generateRandomString();

    const data = {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: downloadUrl,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      password: "",
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL +"f/" + docId,
    };

    // Add a new document in collection "uploadedFile" with ID 'docId'
    await setDoc(doc(db, "uploadedFile", docId), data);

    console.log("Saved");
    router.push('/file-preview/'+docId);
    }catch(err)
    {
      console.log(err);
    }finally{
    setProgress(0);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <UploadForm
        uploadBtnClick={(file) => uploadFile(file)}
        progress={progress}
      />
    </div>
  );
};

export default Upload;
