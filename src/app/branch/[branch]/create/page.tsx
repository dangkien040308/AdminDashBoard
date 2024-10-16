"use client";

import Heading2 from "@/components/Heading/heading2";
import BasicInput from "@/components/Inputs/BasicInput";
import DatePicker from "@/components/Inputs/DatePicker";
import MutilpleFileInput from "@/components/Inputs/MutipleFileInput";
import TextAreaInput from "@/components/Inputs/TextAreaInput";
import ToDos from "@/components/Inputs/ToDos";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";

import BedTypeSelect from "@/components/Inputs/BedTypeSelect";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { RoomBedType } from "../../../../../typings/enum";

export default function Room({ params: { branch } }: { params: { branch: string } }) {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 5),
    });
    const [files, setFiles] = useState<FileList>();
    const [data, setData] = useState<RoomInfor>({
        name: "",
        acreage: "",
        comports: [],
        price_per_night: "",
        price_per_month: "",
        bed_type: "",
        stock: "",
        description: [],
        available_from: "",
        available_to: "",
        max_adults: "",
        max_children: "",
        max_babies: "",
    });
    const [comportArray, setComportArray] = useState<string[]>([]);
    const [currentComport, setCurrentComport] = useState<string>("");
    const [bedType, setBedType] = useState<RoomBedType>("king");

    const { toast } = useToast();

    const handleSubmitGlobalData = async () => {
        try {
            const formData = new FormData();

            formData.append("branch", branch);
            formData.append("price_per_night", data.price_per_night);
            formData.append("price_per_month", data.price_per_month);
            formData.append("name", data.name);
            formData.append("acreage", data.acreage);
            formData.append("bed_type", bedType);
            formData.append("stock", data.stock);
            formData.append("max_adults", data.max_adults);
            formData.append("max_children", data.max_children);
            formData.append("max_babies", data.max_babies);
            formData.append("available_from", date?.from?.getTime().toString() || "");
            formData.append("available_to", date?.to?.getTime().toString() || "");

            for (const desc of data.description) {
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

            await axios.post("http://localhost:6002/room", formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            toast({ title: "Tạo phòng thành công" });
        } catch (error: any) {
            console.log(error);
            toast({
                title: "Có gì đó không ổn",
                description: Array.isArray(error.response?.data?.message)
                    ? error.response.data?.message?.join(", ")
                    : error.response.data?.message,
                variant: "destructive",
            });
        }
    };

    return (
        <div>
            <span className="text-3xl text-blue-600 font-[600]">Tạo Phòng</span>

            <div className="flex items-start justify-between mt-10 flex-wrap">
                <BasicInput
                    currentValue={data.name}
                    setValue={(e) => setData({ ...data, name: e.target.value })}
                    nameInput="Tên Phòng"
                    placeholder="Nhập tên phòng"
                    type="text"
                />
                <BasicInput
                    currentValue={data.stock}
                    setValue={(e) => setData({ ...data, stock: e.target.value })}
                    nameInput="Số Phòng Trống"
                    placeholder="Nhập số phòng"
                    type="number"
                />
                <BedTypeSelect setBedType={setBedType} bedType={bedType} />
                <BasicInput
                    currentValue={data.acreage}
                    setValue={(e) => setData({ ...data, acreage: e.target.value })}
                    minValue={10}
                    nameInput="Diện Tích Phòng (m2)"
                    placeholder="Nhập diện tích phòng"
                    type="number"
                />
                <BasicInput
                    currentValue={data.price_per_night}
                    setValue={(e) => setData({ ...data, price_per_night: e.target.value })}
                    nameInput="Giá Tiền (1 ngày)"
                    placeholder="Nhập số tiền (VNĐ)"
                    type="number"
                />
                <BasicInput
                    currentValue={data.price_per_month}
                    setValue={(e) => setData({ ...data, price_per_month: e.target.value })}
                    nameInput="Giá Tiền (1 tháng)"
                    placeholder="Nhập số tiền (VNĐ)"
                    type="number"
                />
                <BasicInput
                    currentValue={data.max_adults}
                    setValue={(e) => setData({ ...data, max_adults: e.target.value })}
                    nameInput="Số Lượng Người Lớn Tối Đa / 1 phòng"
                    placeholder="Nhập số lượng người"
                    type="number"
                />
                <BasicInput
                    currentValue={data.max_children}
                    setValue={(e) => setData({ ...data, max_children: e.target.value })}
                    nameInput="Số Lượng Trẻ Em Tối Đa / 1 phòng"
                    placeholder="Nhập số lượng người"
                    type="number"
                />
                <BasicInput
                    currentValue={data.max_babies}
                    setValue={(e) => setData({ ...data, max_babies: e.target.value })}
                    nameInput="Số Lượng Em Bé Tối Đa / 1 phòng"
                    placeholder="Nhập số lượng người"
                    type="number"
                />
                <TextAreaInput
                    currentValue={data.description.join("\n")}
                    setValue={(e) => setData({ ...data, description: e.target.value.split("\n") })}
                    nameInput="Mô Tả Phòng"
                    placeholder="Nhập mô tả"
                />
                <div className="my-20 w-[100%]">
                    <Heading2>Thời Gian Trống Của Phòng</Heading2>
                    <div className="w-[100%] flex items-center justify-center mt-4">
                        <DatePicker date={date} setDate={setDate} />
                    </div>
                </div>
                <div className="w-[100%] my-10">
                    <Heading2>Tiện Ích</Heading2>
                    <ToDos
                        comportArray={comportArray}
                        setComportArray={setComportArray}
                        currentComport={currentComport}
                        setCurrentComport={setCurrentComport}
                    />
                </div>
                <div className="w-full">
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
