"use client";
import { useState } from "react";
import BasicInput from "@/app/components/Inputs/BasicInput";
import TextAreaInput from "@/app/components/Inputs/TextAreaInput";
import MutilpleFileInput from "@/app/components/Inputs/MutipleFileInput";
import ToDos from "@/app/components/Inputs/ToDos";
import Heading2 from "@/app/components/Heading/heading2";
import BranchSelect from "@/app/components/Inputs/BranchSelect";

import { BranchInforType } from "@/app/typings/branch";

export default function BranchCreatePage() {
  const [files, setFiles] = useState<File[]>([]);
  const [branchInfor, setBranchInfor] = useState<BranchInforType>({
    name: "",
    description: [""],
    trademark: "",
    url: "",
    province: "",
    ward: "",
    best_comforts: [""],
    location: "",
    surrounding_area: [],
    images : []
  });
  const [comportArray, setComportArray] = useState<string[]>([]);
  const [currentComport, setCurrentComport] = useState<string>("");

  const handleBranchSubmit = async () => {
    const data = {
      name: branchInfor.name,
      description: branchInfor.description,
      trademark: branchInfor.trademark,
      url: branchInfor.url,
      province: branchInfor.province,
      ward: branchInfor.ward,
      best_comforts: comportArray,
      location: branchInfor.location,
      surrounding_area: branchInfor.surrounding_area,
    }
  }
  const [trademark, setTrademark] = useState<{
    id : string,
    name : string
  }>({
    id : "",
    name : ""
  })

  return (
    <div>
      <span className="text-3xl text-blue-600 font-[600]">Tạo Chi Nhánh</span>

      <div className="flex items-start justify-between mt-10 flex-wrap">
        <BasicInput
          nameInput="Tên Chi Nhánh"
          placeholder="Nhập tên chi nhánh"
          type="text"
          field="name"
          setValue={(e) => set}
          currentValue={branchInfor.name}
        />
        <BasicInput
          nameInput="Tỉnh/ Thành Phố"
          placeholder="Nhập tỉnh/ thành phố"
          type="text"
          field="province"
          setValue={setBranchInfor}
          currentValue={branchInfor.province}
        />
        <BasicInput
          nameInput="Quận/ Huyện"
          placeholder="Nhập quận/ huyện"
          type="text"
          field="ward"
          setValue={setBranchInfor}
          currentValue={branchInfor.ward}
        />
        <BasicInput
          nameInput="Địa Chỉ"
          placeholder="Nhập địa chỉ"
          type="text"
          field="location"
          setValue={setBranchInfor}
          currentValue={branchInfor.location}
        />

        <div className="w-[100%] my-10 p-2">
          <Heading2>Tiện Ích Phổ Biến</Heading2>
          <ToDos
            comportArray={comportArray}
            setComportArray={setComportArray}
            currentComport={currentComport}
            setCurrentComport={setCurrentComport}
          />
        </div>

        <TextAreaInput
          nameInput="Mô Tả"
          placeholder="Nhập mô tả"
          field="description"
          setValue={setBranchInfor}
          currentValue={branchInfor.description}
        />
        
        <div className="w-full ">
          <Heading2>Chọn Ảnh</Heading2>
          <MutilpleFileInput files={files} setFiles={setFiles} />
        </div>

      </div>

      <button
        onClick={handleBranchSubmit}
        className="w-max mx-auto block mt-3 px-8 py-2 rounded-lg bg-green-500 text-neutral-100 font-[600] hover:opacity-60"
      >
        Tạo Chi Nhánh
      </button>
    </div>
  );
}
