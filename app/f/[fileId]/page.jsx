"use client"
import { app } from "@/firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FileItem from "./_components/FileItem";

const FileView = ({params}) => {

    const db=getFirestore(app);
    const [file,setFile]=useState(null);
    const [expired, setExpired] = useState(false);
    useEffect(()=>{
        //console.log(params.fileId);

        params.fileId&&getFileInfo();
    },[]);

    const getFileInfo = async () => {
       try {
         const docRef = doc(db, "uploadedFile", params.fileId);


         const docSnap = await getDoc(docRef);

         if (docSnap.exists()) {
           console.log("Document data:", docSnap.data());

           // Check if link has expired
           if (Date.now() > docSnap.data().expiresAt.toMillis()) {
             setExpired(true);
             return;
           }
           setFile(docSnap.data());
         } else {
           console.log("No such document!");
         }
       } catch (error) {
         console.log(error);
       }
     };

 return (
   <div className="bg-gray-100 h-screen w-full flex justify-center items-center flex-col gap-4">
     {expired ? (
       <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
         <h1 className="text-3xl font-bold text-red-600">Link Expired</h1>
         <p className="mt-3 text-gray-500">
           This download link has expired after 24 hours.
         </p>
       </div>
     ) : file ? (
       <FileItem file={file} />
     ) : (
       <p className="text-gray-500">Loading...</p>
     )}
   </div>
 );
};

export default FileView;
