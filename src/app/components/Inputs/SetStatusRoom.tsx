'use client'
import { useState } from "react";
import { RoomStatus } from "@/app/typings/room";
import { Dispatch, SetStateAction } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function SetStatusRoom({roomStatus, setRoomStatus} : {roomStatus : RoomStatus | string, setRoomStatus : Dispatch<SetStateAction<RoomStatus | string>>}) {

  const handleSetStatus = (status : string) => {
    setRoomStatus(status)
  }
  const [show, setShow] = useState<boolean>(false)
  return (
    <div>
      
          {
            show && (
              <div onClick={() => setShow(!show)} className="fixed top-0 left-0 w-screen h-screen"></div>
            )
          }
          <div className="w-[200px] relative bg-transparent border-2 border-zinc-400 rounded cursor-pointer px-3 py-2 flex items-center justify-between" onClick={() => setShow(!show)}>
              <p>{ roomStatus === 'available' ? 'Còn Phòng' : roomStatus === 'full' ? 'Đã Đầy' : 'Trạng Thái Phòng'  }</p>
              {show ? <FaAngleUp className="text-lg p-1 ml-2" /> : <FaAngleDown className="text-lg p-1 ml-2" />}
              {show && (
                <div className="absolute top-[105%] right-0 z-0 flex-col flex items-center justify-center w-full">
                    <span className="bg-[rgba(0,0,0,0.7)] text-white px-3 py-2 w-full hover:cursor-pointer hover:opacity-50" onClick={() => handleSetStatus('available')}>Còn Phòng</span>
                    <span className="bg-[rgba(0,0,0,0.7)] text-white px-3 py-2 w-full hover:cursor-pointer hover:opacity-50" onClick={() => handleSetStatus('full')} >Đã Đầy</span>
                </div>
              )}
              
          </div>

    </div>
  )
}