"use client";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function BranchSelect({
  BranchLocaiton,
  setBranchLocation,
  currentBranchLocation,
  lable,
  placeholder
}: {
  BranchLocaiton: { name: string; id: string }[];
  setBranchLocation: Dispatch<SetStateAction<{ id: string; name: string }>>;
  currentBranchLocation: { id: string; name: string };
  lable: string;
  placeholder: string;
}) {
  const handleSetStatus = (location: { id: string; name: string }) => {
    setBranchLocation(location);
  };
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="w-[45%] p-2">
      <label className="block mb-3 text-neutral-950 font-bold">{lable}</label>
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
          {BranchLocaiton.find(
            (item) => item.name === currentBranchLocation.name
          )
            ? currentBranchLocation.name
            : placeholder}
        </p>
        {show ? (
          <FaAngleUp className="text-lg p-1 ml-2" />
        ) : (
          <FaAngleDown className="text-lg p-1 ml-2" />
        )}
        {show && (
          <div className="h-[300px] overflow-y-auto absolute top-[105%] right-0 z-0 flex-col flex justify-start w-full">
            {BranchLocaiton?.map((item, id) => (
              <span
                key={id}
                className="bg-slate-900 text-white px-3 py-2 w-full hover:cursor-pointer hover:bg-sky-500"
                onClick={() => handleSetStatus(item)}
              >
                {item.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
