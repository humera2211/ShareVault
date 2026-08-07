"use client"
import { app } from '@/firebaseConfig';
import { doc , getDoc , getFirestore , updateDoc } from 'firebase/firestore';
import { ArrowLeftSquare } from 'lucide-react';
import React, {useState, useEffect } from 'react'
import FileInfo from './FileInfo';
import FileShareForm from './FileShareForm';
import Link from 'next/link';

const FilePreview = ({params}) => {

  const [file,setFile]=useState(null);

  const db=getFirestore(app);

  useEffect(()=>{
    console.log(params?.fileId);
    params?.fileId&&getFileInfo();
  },[params]);

 const getFileInfo = async () => {
   try {
     const docRef = doc(db, "uploadedFile", params.fileId);
     const docSnap = await getDoc(docRef);

     if (docSnap.exists()) {
       console.log("Document data:", docSnap.data());
       setFile(docSnap.data());
     } else {
       console.log("No such document!");
     }
   } catch (error) {
     console.log(error);
   }
 };

 const onPasswordSave=async (password)=>{
  const docRef=doc(db,"uploadedFile",params?.fileId);
  await updateDoc(docRef,{
    password:password
  });
 }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <Link
        href="/upload"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-600 mb-6 transition"
      >
        {" "}
        <ArrowLeftSquare size={22} /> Go to Uploads
      </Link>
      {file && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          <FileInfo file={file} />
          <FileShareForm
            file={file}
            onPasswordSave={(password) => onPasswordSave(password)}
          />
        </div>
      )}
    </div>
  );
}

export default FilePreview