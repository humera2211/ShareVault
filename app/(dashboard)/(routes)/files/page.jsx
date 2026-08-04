"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { app } from "@/firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import FileTable from "./_components/FileTable";

const Files = () => {
  const { user } = useUser();
  const db = getFirestore(app);

  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (user) {
      getUserFiles();
    }
  }, [user]);

  const getUserFiles = async () => {
    const q = query(
      collection(db, "uploadedFile"),
      where("userEmail", "==", user?.primaryEmailAddress?.emailAddress),
    );

    const querySnapshot = await getDocs(q);

    const list = [];

    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });

    setFiles(list);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Files</h1>

      <div className="border rounded-xl p-4 mb-6">
        <h2 className="text-xl">
          Total Files : <span className="font-bold">{files.length}</span>
        </h2>
      </div>

      <FileTable files={files} />
    </div>
  );
};

export default Files;
