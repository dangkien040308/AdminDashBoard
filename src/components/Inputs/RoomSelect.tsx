"use client";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function RoomSelect({
  setRoomBranch,
  currentRoomBranch,
  roomsBranch,
  lable,
}: {
  currentRoomBranch: string;
  roomsBranch: string[] | undefined;
  setRoomBranch: Dispatch<SetStateAction<string>>;
  lable: string;
}) {
  const handleSetStatus = (room: string) => {
    setRoomBranch(room);
  };
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <label className="block mb-2 text-neutral-950 font-bold">{lable}</label>
      {show && (
        <div
          onClick={() => setShow(!show)}
          className="fixed top-0 left-0 w-screen h-screen"
        ></div>
      )}
      <div
        className="w-[200px] relative bg-transparent border-2 border-zinc-400 rounded cursor-pointer px-3 py-2 flex items-center justify-between"
        onClick={() => setShow(!show)}
      >
        <p>
          {roomsBranch?.find((item) => item === currentRoomBranch)
            ? currentRoomBranch
            : "Chon Phong"}
        </p>
        {show ? (
          <FaAngleUp className="text-lg p-1 ml-2" />
        ) : (
          <FaAngleDown className="text-lg p-1 ml-2" />
        )}
        {show && (
          <div className="h-[300px] overflow-y-auto absolute top-[105%] right-0 z-0 flex-col flex justify-start w-full">
            {roomsBranch?.map((item, id) => (
              <span
                key={id}
                className="bg-[rgba(0,0,0,0.7)] text-white px-3 py-2 w-full hover:cursor-pointer hover:opacity-50"
                onClick={() => handleSetStatus(item)}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
