"use client";
import { RoomComport, RoomInfor, RoomManagement } from "@/app/typings/room";
import { useState, Dispatch, SetStateAction } from "react";
import ToDos from "@/components/Inputs/ToDos";
import MutilpleFileInput from "@/components/Inputs/MutipleFileInput";
import BasicInput from "../Inputs/BasicInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import { AnyNode } from "postcss";

const EditFormRoom: React.FC<any> = ({
  roomId,
  branch,
  branch_id,
  price_per_day,
  price_per_month,
  name,
  description,
  status,
  acreage,
  available_from,
  available_to,
  max_adults,
  max_children,
  max_babies,
  images,
  setEdit,
  setImagesFile,
  bed_type,
  stock,
  comforts,
}) => {
  const [dataState, setDataState] = useState<any>({
    branch: branch,
    bed_type: bed_type,
    stock: stock,
    price_per_day: price_per_day,
    price_per_month: price_per_month,
    name: name,
    description: description,
    acreage: acreage,
    available_from: available_from,
    available_to: available_to,
    max_adults: max_adults,
    max_children: max_children,
    max_babies: max_babies,
    status: status,
    comforts: comforts,
  });
  const [comportArray, setComportArray] = useState<string[]>([]);
  const [currentComport, setCurrentComport] = useState<string>("");

  const [files, setFiles] = useState<File[]>([]);

  const handleSubmitGlobalData = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const data = {
      dataState,
    };

    console.log(data);
  };

  return (
     <div className="flex items-center justify-between flex-wrap fixed top-1/2 left-1/2 -translate-x-[40%] -translate-y-[43%]  w-[800px] h-screen-15 bg-white rounded-lg p-5 shadow-lg overflow-y-scroll z-10">
        <button
            type="button"
            title="Set State to Edit (false)"
            className="hover:bg-[rgba(0,0,0,0.4)] bg-[rgba(0,0,0,0.6)] rounded-md px-2 py-1 absolute top-1 right-1"
            onClick={() => setEdit(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M8,16 C12.4183,16 16,12.4183 16,8 C16,3.58172 12.4183,0 8,0 C3.58172,0 0,3.58172 0,8 C0,12.4183 3.58172,16 8,16 Z M4.29289,4.29289 C4.68342,3.90237 5.31658,3.90237 5.70711,4.29289 L8,6.58579 L10.2929,4.29289 C10.6834,3.90237 11.3166,3.90237 11.7071,4.29289 C12.0976,4.68342 12.0976,5.31658 11.7071,5.70711 L9.41421,8 L11.7071,10.2929 C12.0976,10.6834 12.0976,11.3166 11.7071,11.7071 C11.3166,12.0976 10.6834,12.0976 10.2929,11.7071 L8,9.41421 L5.70711,11.7071 C5.31658,12.0976 4.68342,12.0976 4.29289,11.7071 C3.90237,11.3166 3.90237,10.6834 4.29289,10.2929 L6.58579,8 L4.29289,5.70711 C3.90237,5.31658 3.90237,4.68342 4.29289,4.29289 Z"
              />
            </svg>
        </button>

        <div className="flex items-center justify-between flex-wrap">
          <BasicInput
            nameInput="Tên Phòng"
            placeholder="Nhập tên phòng"
            type="text"
            currentValue={dataState.name}
            setValue={setDataState}
            field="name"
          />
          <BasicInput
            nameInput="Diện Tích Phòng (m2)"
            placeholder="Nhập diện tích phòng"
            type="number"
            currentValue={dataState.acreage}
            setValue={setDataState}
            field="acreage"
          />
          <BasicInput
            nameInput="Sức Chứa Của Phòng (người)"
            placeholder="Nhập sức chứa của phòng (người)"
            type="number"
            currentValue={dataState.max_adults}
            setValue={setDataState}
            field="max_adults"
          />
          <BasicInput
            nameInput="Giá Tiền ( 1 ngày )"
            placeholder="Nhap số tiền"
            type="number"
            currentValue={dataState.price_per_day}
            setValue={setDataState}
            field="price_per_day"
          />
          <BasicInput
            nameInput="Giá Tiền ( 1 tháng )"
            placeholder="Nhập số tiền"
            type="number"
            currentValue={dataState.price_per_month}
            setValue={setDataState}
            field="price_per_month"
          />
          <BasicInput
            nameInput="Số lượng người lớn tối đa"
            placeholder="Nhập số lượng người lớn tối đa"
            type="number"
            currentValue={dataState.max_adults}
            setValue={setDataState}
            field="max_adults"
          />
          <BasicInput
            nameInput="Số lượng trẻ em tối đa"
            placeholder="Nhập số lượng trẻ em tối đa"
            type="number"
            currentValue={dataState.max_children}
            setValue={setDataState}
            field="max_children"
          />
          <BasicInput
            nameInput="Số lượng em bé tối đa"
            placeholder="Nhập số lượng em bé tối đa"
            type="number"
            currentValue={dataState.max_babies}
            setValue={setDataState}
            field="max_babies"
          />
          <TextAreaInput
            nameInput="Mô Tả Phòng"
            placeholder="Nhap mố tả"
            setValue={setDataState}
            field="description"
            currentValue={dataState.description}
          />

          <div className="mt-3 flex items-center justify-evenly flex-wrap">
            <ToDos 
              comportArray={comportArray}
              setComportArray={setComportArray}
              currentComport={currentComport}
              setCurrentComport={setCurrentComport}
              initialComports={comforts}
            />
          </div>

          <div className="w-[70%]">
            <label className="text-2xl font-[600] block mb-2 text-stone-900">
              Chọn Ảnh
            </label>
            <MutilpleFileInput files={images} setFiles={setImagesFile} />
          </div>

        </div>

        <button
            className="block mt-5 rounded-lg w-max mx-auto bg-green-500 px-5 py-2 text-white font-bold cursor-pointer hover:opacity-50"
            onClick={(e) => handleSubmitGlobalData(e)}
          >
            Cập Nhật
        </button>

    </div>
   
  );
};

export default EditFormRoom;
