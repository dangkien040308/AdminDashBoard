"use client";

import React, { useEffect, useRef } from "react";
import { Dispatch, SetStateAction } from "react";

import { FaCloudUploadAlt } from "react-icons/fa";
import Image from "next/image";

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
  useEffect(() => {
    if (currentFiles) {
      setFiles(currentFiles)
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return; 
    setFiles(e.target.files);
  };
  
  return (
    <div>
      <form action="#" className="hover:opacity-50 cursor-pointer w-[40%]" onClick={() => { inputEle.current?.click() }}>
          <input
            ref={inputEle}
            type="file"
            multiple
            onChange={handleChange}
            accept="image/*"
            hidden
          />
          <div className="flex flex-col items-center justify-center border border-blue-500 border-dashed rouneded-lg p-4 h-[200px]">
               <FaCloudUploadAlt className="text-3xl text-blue-500" />
               <span className="text-xl text-blue-500" >Chọn Ảnh</span>
          </div>
      </form>

      <ul className="mt-3 flex items-center justify-evenly flex-wrap gap-5">
          {files && Array.from(files).map((file, index) => (
            <li key={index} className="rounded">
              <Image alt="img" width={350} height={210} src={URL.createObjectURL(file)} className="w-[350px] h-[210px] object-cover rounded mr-5 aspect-video" />
            </li>
          ))}
       </ul> 


    </div>
    // <input
    //       ref={inputEle}
    //       type="file"
    //       multiple
    //       onChange={handleChange}
    //       accept="image/*"
    //       placeholder="Chọn Ảnh"
    //   />
  
  );
}
