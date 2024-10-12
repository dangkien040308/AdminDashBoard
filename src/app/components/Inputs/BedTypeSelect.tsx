"use client";
import { useState } from "react";
import { RoomStatus } from "@/app/typings/room";
import { Dispatch, SetStateAction } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function BedTypeSelect({
  bedTypes,
  setBedTypes,
}: {
  bedTypes: { name : string, id : string };
  setBedTypes: Dispatch<SetStateAction<{ name : string, id : string }>>;
}) {
  const handleSetStatus = (bed_type: { name : string, id : string }) => {
    setBedTypes(bed_type);
  };
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="w-[45%] p-2">
      <label className="block mb-2 text-neutral-950 font-bold">Chọn Loại Giường</label>
      {show && (
        <div
          onClick={() => setShow(!show)}
          className="fixed top-0 left-0 w-screen h-screen"
        ></div>
      )}
      <div
        className="w-full relative bg-transparent border-2 border-zinc-400 rounded cursor-pointer p-3 flex items-center justify-between"
        onClick={() => setShow(!show)}
      >
        <p>
          {bedTypes.name ? bedTypes.name : "Chọn Loại Giường"}
        </p>
        {show ? (
          <FaAngleUp className="text-lg p-1 ml-2" />
        ) : (
          <FaAngleDown className="text-lg p-1 ml-2" />
        )}
        {show && (
          <div className="absolute top-[105%] right-0 z-0 flex-col flex items-center justify-center w-full">
            <span
              className="bg-slate-900 text-white px-3 py-2 w-full hover:cursor-pointer hover:bg-sky-600"
              onClick={() => handleSetStatus({name : "Giường Đơn", id : "single"})}
            >
              Giường Đơn
            </span>
            <span
              className="bg-slate-900 text-white px-3 py-2 w-full hover:cursor-pointer hover:bg-sky-600"
              onClick={() => handleSetStatus({name : "Giường Đôi", id : "king"})}
            >
              Giường Đôi
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
