"use client";

import Heading2 from "@/components/Heading/heading2";
import BasicInput from "@/components/Inputs/BasicInput";
import DatePicker from "@/components/Inputs/DatePicker";
import MutilpleFileInput from "@/components/Inputs/MutipleFileInput";
import TextAreaInput from "@/components/Inputs/TextAreaInput";
import ToDos from "@/components/Inputs/ToDos";
import { addDays } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

import BedTypeSelect from "@/components/Inputs/BedTypeSelect";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { RoomBedType } from "../../../../../../typings/enum";
import { Branch, Room } from "../../../../../../typings/data";
import { redirect } from "next/navigation";

interface RoomEdit extends Omit<Omit<Room, "booking_turn">, "branch_id"> {}

export default function Page({ params: { branch, room } }: { params: { branch: string; room: string } }) {
    const [data, setData] = useState<RoomEdit>({
        name: "",
        acreage: 0,
        comforts: [],
        price_per_night: 0,
        price_per_month: 0,
        bed_type: "king",
        stock: 0,
        description: [],
        available_from: new Date(),
        available_to: addDays(new Date(), 5),
        max_adults: 0,
        max_children: 0,
        max_babies: 0,
        images: [],
        room_id: "",
    });
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 5),
    });
    const [files, setFiles] = useState<FileList>();
    const [comportArray, setComportArray] = useState<string[]>([]);
    const [currentComport, setCurrentComport] = useState<string>("");
    const [bedType, setBedType] = useState<RoomBedType>("king");

    const EditData = async () => {
        axios.put("http://localhost:6002/room", {
            name : data.name,
            stock : data.stock,
            acreage : data.acreage,
            bed_type : bedType,
            max_adults : data.max_adults,
            max_children : data.max_children,
            max_babies : data.max_babies,
            available_from : data.available_from,
            available_to : data.available_to,
            price_per_night : data.price_per_night,
            price_per_month : data.price_per_month,
            description : data.description
        })
         .then(res => console.log(res))
         .catch(err => console.error(err))
    };

    useEffect(() => {
        axios
            .get<{ data: Branch }>(`http://localhost:6002/room/${branch}`)
            .then((res) => {
                if (!res.data) return;
                const r = res.data.data.rooms.find((f) => f.room_id === room);
                if (!r) redirect("/");
                setData(r);
            })
            .catch((error) => {
                redirect("/");
            });
    }, []);

    return (
        <div>
            <span className="text-3xl text-blue-600 font-[600]">Tạo Phòng</span>

            <div className="flex items-start justify-between mt-10 flex-wrap">
                <BasicInput
                    currentValue={data?.name}
                    setValue={(e) => setData({ ...data, name: e.target.value })}
                    nameInput="Tên Phòng"
                    placeholder="Nhập tên phòng"
                    type="text"
                />
                <BasicInput
                    currentValue={data?.stock.toString()}
                    setValue={(e) => setData({ ...data, stock: +e.target.value })}
                    nameInput="Số Phòng Trống"
                    placeholder="Nhập số phòng"
                    type="number"
                />
                <BedTypeSelect setBedType={setBedType} bedType={bedType} />
                <BasicInput
                    currentValue={data?.acreage.toString()}
                    setValue={(e) => setData({ ...data, acreage: +e.target.value })}
                    minValue={10}
                    nameInput="Diện Tích Phòng (m2)"
                    placeholder="Nhập diện tích phòng"
                    type="number"
                />
                <BasicInput
                    currentValue={data?.price_per_night.toString()}
                    setValue={(e) => setData({ ...data, price_per_night: +e.target.value })}
                    nameInput="Giá Tiền (1 ngày)"
                    placeholder="Nhập số tiền (VNĐ)"
                    type="number"
                />
                <BasicInput
                    currentValue={data?.price_per_month.toString()}
                    setValue={(e) => setData({ ...data, price_per_month: +e.target.value })}
                    nameInput="Giá Tiền (1 tháng)"
                    placeholder="Nhập số tiền (VNĐ)"
                    type="number"
                />
                <BasicInput
                    currentValue={data?.max_adults.toString()}
                    setValue={(e) => setData({ ...data, max_adults: +e.target.value })}
                    nameInput="Số Lượng Người Lớn Tối Đa / 1 phòng"
                    placeholder="Nhập số lượng người"
                    type="number"
                />
                <BasicInput
                    currentValue={data?.max_children.toString()}
                    setValue={(e) => setData({ ...data, max_children: +e.target.value })}
                    nameInput="Số Lượng Trẻ Em Tối Đa / 1 phòng"
                    placeholder="Nhập số lượng người"
                    type="number"
                />
                <BasicInput
                    currentValue={data?.max_babies.toString()}
                    setValue={(e) => setData({ ...data, max_babies: +e.target.value })}
                    nameInput="Số Lượng Em Bé Tối Đa / 1 phòng"
                    placeholder="Nhập số lượng người"
                    type="number"
                />
                <TextAreaInput
                    currentValue={data?.description.join("\n")}
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
                onClick={EditData}
                className="w-max mx-auto block mt-3 px-8 py-2 rounded-lg bg-green-500 text-neutral-100 font-[600] hover:opacity-60"
            >
                Tạo Phòng
            </button>
        </div>
    );
}
