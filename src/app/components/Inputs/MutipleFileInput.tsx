"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Dispatch, SetStateAction } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
export default function MutilpleFileInput({
  files,
  setFiles,
  currentFiles
}: {
  files: FileList | undefined;
  setFiles: Dispatch<SetStateAction<FileList | undefined>> ;
  currentFiles? : FileList
}) {

  const inputEle = useRef<HTMLInputElement>(null);
  const handleRemoveFile = (index: number) => {
    
  };
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!e.target.files) return; 
    
  //   const filesArray = Array.from(e.target.files);
  //   setFiles((prevFiles) => [...prevFiles, ...filesArray]);

  //   if (inputEle.current) {
  //     inputEle.current.value = "";
  //   }
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return; 
    setFiles(e.target.files);
    console.log(e.target.files)
  };
  
  return (
  
      <input
          ref={inputEle}
          type="file"
          multiple
          onChange={handleChange}
          accept="image/*"
          placeholder="Chọn Ảnh"
      />
  
  );
}
