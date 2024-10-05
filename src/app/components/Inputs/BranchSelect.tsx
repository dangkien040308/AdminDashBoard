'use client'
import { useState } from "react";
import { RoomStatus } from "@/app/typings/room";
import { Dispatch, SetStateAction } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function BranchSelect({BranchLocaiton, setBranchLocation, currentBranchLocation ,lable} : {BranchLocaiton : string[], setBranchLocation : Dispatch<SetStateAction<string>>, currentBranchLocation : string, lable : string}) {

  const handleSetStatus = (location : string) => {
    setBranchLocation(location)
  }
  const [show, setShow] = useState<boolean>(false)
  return (
    <div>
      <label className="block mb-2 text-neutral-950 font-bold">{lable}</label>
          {
            show && (
              <div onClick={() => setShow(!show)} className="fixed top-0 left-0 w-screen h-screen"></div>
            )
          }
          <div className="w-[200px] relative bg-transparent border-2 border-zinc-400 rounded cursor-pointer px-3 py-2 flex items-center justify-between" onClick={() => setShow(!show)}>
              <p>{ BranchLocaiton.find(item => item === currentBranchLocation) ? currentBranchLocation : 'Chon Chi Nhanh'  }</p>
              {show ? <FaAngleUp className="text-lg p-1 ml-2" /> : <FaAngleDown className="text-lg p-1 ml-2" />}
              {show && (
                <div className="h-[300px] overflow-y-auto absolute top-[105%] right-0 z-0 flex-col flex justify-start w-full">
                    {BranchLocaiton?.map((item,id) => (
                      <span key={id} className="bg-[rgba(0,0,0,0.7)] text-white px-3 py-2 w-full hover:cursor-pointer hover:opacity-50" onClick={() => handleSetStatus(item)}>{item}</span>
                    ))}
                </div>
              )}
              
          </div>

    </div>
  )
}