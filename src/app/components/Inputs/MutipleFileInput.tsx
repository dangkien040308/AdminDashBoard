'use client'
import Image from "next/image";
import React, { useRef } from "react"
import { Dispatch, SetStateAction } from "react"
import { FaCloudUploadAlt, FaFileImage } from "react-icons/fa";
export default function MutilpleFileInput({files, setFiles} : {files : File[] | null, setFiles : Dispatch<SetStateAction<File[]>>}) {
  const handleRemoveFile = (index : number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
    console.log(files)
  }
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return
    const filesArray = Array.from(e.target.files);
    const url = URL.createObjectURL(filesArray[0])
    console.log(url)
    setFiles((prevFiles) => [...prevFiles, ...filesArray])
  }
  const inputEle = useRef<HTMLInputElement>(null)
  return (
    <>
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
     
       <ul className="mt-3 flex items-center justify-evenly flex-wrap">
          {files && Array.from(files).map((file, index) => (
            <li key={index} className="flex items-center justify-between py-4 px-3 rounded-lg bg-[#496ee9] text-white my-1 w-[45%]">
              <span>{file.name}</span>
              <Image alt="img" width={200} height={200} src={URL.createObjectURL(file)} className="w-[150px] h-[150px] object-cover rounded mr-5" />
              <button className="hover:bg-[rgba(0,0,0,0.4)] rounded-md px-2 py-1" onClick={() => handleRemoveFile(index)}>X</button>
            </li>
          ))}
       </ul> 
       </>
    
  )
}