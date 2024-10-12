"use client";
import BasicInput from "@/app/components/Inputs/BasicInput";
import MutilpleFileInput from "@/app/components/Inputs/MutipleFileInput";
import SetStatusRoom from "@/app/components/Inputs/SetStatusRoom";
import TextAreaInput from "@/app/components/Inputs/TextAreaInput";
import { useState } from "react";
import { RoomInfor, RoomStatus } from "@/app/typings/room";

import DatePicker from "@/app/components/Inputs/DatePicker";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import Heading2 from "@/app/components/Heading/heading2";
import ToDos from "@/app/components/Inputs/ToDos";
import BranchSelect from "@/app/components/Inputs/BranchSelect";

import axios from "axios";
import BedTypeSelect from "@/app/components/Inputs/BedTypeSelect";

export default function Room() {
  //Date
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });
  // Room Info State => BasicInput & TextAreaInput
  // Room Info State => SelectGroupInput
  const [roomStatus, setRoomStatus] = useState<RoomStatus | string>("");
  // Room Comport State => CheckBoxInput
  // Room Files State => MutilpleFileInput
  const [files, setFiles] = useState<FileList>();
  const [roomInforData, setRoomInforData] = useState<RoomInfor>({
    branch: "",
    name: "",
    acreage: "",
    comports: [""],
    price_per_night: "",
    price_per_month: "",
    bed_type: "",
    status: "",
    stock: "",
    description: [""],
    available_from: "",
    available_to: "",
    max_adults: "",
    max_children: "",
    max_babies: "",
  });
  // Comports
  const [comportArray, setComportArray] = useState<string[]>([]);
  const [currentComport, setCurrentComport] = useState<string>("");
  // Branch Selector
  const [branch, setBranch] = useState<{
    id: string;
    name: string;
  }>({
    id: "",
    name: "",
  });

  const branchArray = [
    {
      id: "cm25zey1c0004jv0a02qe0zb0",
      name: "Tao Đàn Park",
    },
  ];
  // Bed Type 
  const [bedTypes, setBedTypes] = useState<{
    id : string,
    name : string
  }>({
    id : "",
    name : ""
  })

  const handleSubmitGlobalData = async () => {
    try {
      const formData = new FormData();
  
      formData.append("branch", branch.id);
      formData.append("price_per_night", roomInforData.price_per_night);
      formData.append("price_per_month", roomInforData.price_per_month);
      formData.append("name", roomInforData.name);
      formData.append("acreage", roomInforData.acreage);
      formData.append("bed_type", bedTypes.id);
      formData.append("status", roomStatus);
      formData.append("stock", roomInforData.stock);
      formData.append("max_adults", roomInforData.max_adults);
      formData.append("max_children", roomInforData.max_children);
      formData.append("max_babies", roomInforData.max_babies);
      formData.append("available_from", date?.from?.getTime().toString() || "");
      formData.append("available_to", date?.to?.getTime().toString() || "");

      for (const desc of roomInforData.description) {
        formData.append("description", desc);
      }

      for (const confort of comportArray) {
        formData.append("comforts", confort);
      }
  
      if (files && files.length > 0) {
        for (const file of files) {
          if (file instanceof File) {
            formData.append(`images`, file, file.name);
          } 
        }
      }
  
      const res = await axios.post("http://localhost:6002/room", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log(res.data);
    } catch (error: Error | any) {
      console.log(
        "Error ",
        Array.isArray(error.response?.data?.message)
          ? error.response?.data?.message.join(", ")
          : error.response?.data?.message
      );
    }
  };

  return (
    <div>
      <span className="text-3xl text-blue-600 font-[600]">Tạo Phòng</span>

      <div className="flex items-start justify-between mt-10 flex-wrap">
        {/* Room Info => BasicInput & TextAreaInput */}
        <BranchSelect
          placeholder="Chọn chi nhánh"
          BranchLocaiton={branchArray}
          currentBranchLocation={branch}
          setBranchLocation={setBranch}
          lable="Chọn Chi Nhánh"
        />
        <BasicInput
          currentValue={roomInforData.name}
          field="name"
          setValue={setRoomInforData}
          nameInput="Tên Phòng"
          placeholder="Nhập tên phòng"
          type="text"
        />
        <BasicInput
          currentValue={roomInforData.stock}
          field="stock"
          setValue={setRoomInforData}
          nameInput="Số Phòng Trống"
          placeholder="Nhập số phòng"
          type="number"
        />
        <BedTypeSelect 
          setBedTypes={setBedTypes}
          bedTypes={bedTypes}
        />
        <BasicInput
          currentValue={roomInforData.acreage}
          field="acreage"
          setValue={setRoomInforData}
          minValue={10}
          nameInput="Diện Tích Phòng (m2)"
          placeholder="Nhập diện tích phòng"
          type="number"
        />
        <BasicInput
          currentValue={roomInforData.price_per_night}
          field="price_per_night"
          setValue={setRoomInforData}
          nameInput="Giá Tiền (1 ngày)"
          placeholder="Nhập số tiền (VNĐ)"
          type="number"
        />
        <BasicInput
          currentValue={roomInforData.price_per_month}
          field="price_per_month"
          setValue={setRoomInforData}
          nameInput="Giá Tiền (1 tháng)"
          placeholder="Nhập số tiền (VNĐ)"
          type="number"
        />
        <BasicInput
          currentValue={roomInforData.max_adults}
          field="max_adults"
          setValue={setRoomInforData}
          nameInput="Số Lượng Người Lớn Tối Đa / 1 phòng"
          placeholder="Nhập số lượng người"
          type="number"
        />
        <BasicInput
          currentValue={roomInforData.max_babies}
          field="max_babies"
          setValue={setRoomInforData}
          nameInput="Số Lượng Em Bé Tối Đa / 1 phòng"
          placeholder="Nhập số lượng người"
          type="number"
        />
        <BasicInput
          currentValue={roomInforData.max_children}
          field="max_children"
          setValue={setRoomInforData}
          nameInput="Số Lượng Trẻ Em Tối Đa / 1 phòng"
          placeholder="Nhập số lượng người"
          type="number"
        />
        <TextAreaInput
          currentValue={roomInforData.description}
          field="description"
          setValue={setRoomInforData}
          nameInput="Mô Tả Phòng"
          placeholder="Nhập mô tả"
        />

        {/* Room Status => SelectGroupInput */}
        <div className="my-20 w-[100%]">
          <Heading2>Thời Gian Trống Của Phòng</Heading2>
          <div className="w-[100%] flex items-center justify-center mt-4">
            <DatePicker date={date} setDate={setDate} />
          </div>
        </div>

        <div className="my-10">
          <Heading2>Trạng Thái Phòng</Heading2>
          <SetStatusRoom
            roomStatus={roomStatus}
            setRoomStatus={setRoomStatus}
          />
        </div>

        {/* Room Comport => CheckBoxInput */}
        <div className="w-[100%] my-10">
          <Heading2>Tiện Ích</Heading2>
          <ToDos
            comportArray={comportArray}
            setComportArray={setComportArray}
            currentComport={currentComport}
            setCurrentComport={setCurrentComport}
          />
        </div>

        {/* Room Files => MutilpleFileInput */}
        <div className="w-full ">
          <Heading2>Chọn Ảnh</Heading2>
          <MutilpleFileInput files={files} setFiles={setFiles} />
        </div>
      </div>

      <button
        onClick={handleSubmitGlobalData}
        className="w-max mx-auto block mt-3 px-8 py-2 rounded-lg bg-green-500 text-neutral-100 font-[600] hover:opacity-60"
      >
        Tạo Phòng
      </button>
    </div>
  );
}
