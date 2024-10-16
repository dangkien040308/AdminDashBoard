"use client";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { RoomBedType } from "../../../typings/enum";

export default function BedTypeSelect({
    bedType,
    setBedType,
}: {
    bedType: RoomBedType;
    setBedType: Dispatch<SetStateAction<RoomBedType>>;
}) {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className="w-[45%] p-2">
            <label className="block mb-2 text-neutral-950 font-bold">Chọn Loại Giường</label>
            {show && <div onClick={() => setShow(!show)} className="fixed top-0 left-0 w-screen h-screen"></div>}
            <div
                className="w-full relative bg-transparent border-2 border-zinc-400 rounded cursor-pointer p-3 flex items-center justify-between"
                onClick={() => setShow(!show)}
            >
                <p>{bedType === 'king' ? 'Giường Đôi' : 'Giường Đơn'}</p>
                {show ? <FaAngleUp className="text-lg p-1 ml-2" /> : <FaAngleDown className="text-lg p-1 ml-2" />}
                {show && (
                    <div className="absolute top-[105%] right-0 z-0 flex-col flex items-center justify-center w-full">
                        <span
                            className="bg-slate-900 text-white px-3 py-2 w-full hover:cursor-pointer hover:bg-sky-600"
                            onClick={() => setBedType("single")}
                        >
                            Giường Đơn
                        </span>
                        <span
                            className="bg-slate-900 text-white px-3 py-2 w-full hover:cursor-pointer hover:bg-sky-600"
                            onClick={() => setBedType("king")}
                        >
                            Giường Đôi
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
