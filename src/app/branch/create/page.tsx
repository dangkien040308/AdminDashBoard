"use client";
import { useState } from "react";
import BasicInput from "@/app/components/Inputs/BasicInput";
import TextAreaInput from "@/app/components/Inputs/TextAreaInput";
import MutilpleFileInput from "@/app/components/Inputs/MutipleFileInput";
import ToDos from "@/app/components/Inputs/ToDos";
import Heading2 from "@/app/components/Heading/heading2";
import BranchSelect from "@/app/components/Inputs/BranchSelect";

import axios from "axios";
import slugify from "@/lib/convertString";

import { BranchInforType } from "@/app/typings/branch";

export default function BranchCreatePage() {
    const [data, setData] = useState<any | undefined>();
    const [files, setFiles] = useState<FileList>();
    const [branchInfor, setBranchInfor] = useState<BranchInforType>({
        name: "",
        description: [""],
        trademark: "",
        url: "",
        province: "",
        ward: "",
        best_comforts: [""],
        location: "",
        surrounding_area: [
            { name: "Đăk Lăk", distance: "20000" },
            { name: "Đăk Noong", distance: "20000" },
        ],
        images: [],
        branch_id : ""
    });
    const [comportArray, setComportArray] = useState<string[]>([]);
    const [currentComport, setCurrentComport] = useState<string>("");

    // const handleTest = async () => {
    //   const data = {
    //     name: branchInfor.name,
    //     description: branchInfor.description,
    //     trademark: branchInfor.trademark,
    //     url: branchInfor.name.toLocaleLowerCase().trim().replace(' ','_'),
    //     province: branchInfor.province,
    //     ward: branchInfor.ward,
    //     best_comforts: comportArray,
    //     location: branchInfor.location,
    //     surrounding_area: branchInfor.surrounding_area,
    //     images : files
    //   }
    //   console.log(data)
    //   axios
    //    .post('http://localhost:6002/branch', {
    //      name : branchInfor.name,
    //      description : branchInfor.description,
    //      trademark : branchInfor.trademark,
    //      province : branchInfor.province,
    //      url : branchInfor.name.toLocaleLowerCase().trim().replace(' ','_'),
    //      ward : branchInfor.ward,
    //      best_comforts : branchInfor.best_comforts,
    //      location : branchInfor.location,
    //      surrounding_area : branchInfor.surrounding_area
    //    }, {
    //      withCredentials : true,
    //      headers: {
    //       'Content-Type': 'application/json'
    //     }
    //    })
    //     .then(res => {
    //       setData(res)
    //     })
    //     .catch(err => {
    //       console.error(err)
    //     })

    // }
    const handleBranchSubmit = async () => {
        try {
            const formData = new FormData();

            formData.append("name", branchInfor.name);
            formData.append("trademark", branchInfor.trademark);
            formData.append("province", branchInfor.province);
            formData.append("url", slugify(branchInfor.name)); // cái này em sài hàm hôm qua anh gửi nhé
            formData.append("ward", branchInfor.ward);
            formData.append("location", branchInfor.location);

            branchInfor.description.forEach((desc, index) => {
                formData.append(`description[${index}]`, desc); // Chuyển đối
            });

            branchInfor.best_comforts.forEach((comfort, index) => {
                formData.append(`best_comforts[${index}]`, comfort);
            });
            branchInfor.surrounding_area.forEach((area, index) => {
                formData.append(`surrounding_area[${index}][name]`, area.name);
                formData.append(`surrounding_area[${index}][distance]`, area.distance);
            });

            if (files && files.length > 0) {
                Array.from(files).forEach((file : File, index : number) => {
                  if (file instanceof File) {  
                    formData.append(`images[${index}]`, file, file.name);
                  }
                    
                });
            }

            const res = await axios.post("http://localhost:6002/branch", formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(res);
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <div>
            <span className="text-3xl text-blue-600 font-[600]">Tạo Chi Nhánh</span>

            <div className="flex items-start justify-between mt-10 flex-wrap">
                <BasicInput
                    nameInput="Tên Chi Nhánh"
                    placeholder="Nhập tên chi nhánh"
                    type="text"
                    setValue={(e) => {
                        const name = e.target.value;
                        const trademark = e.target.value.toLowerCase().trim().replaceAll(" ", "_");

                        setBranchInfor({
                            ...branchInfor,
                            name,
                            trademark,
                        });
                    }}
                    currentValue={branchInfor.name}
                />
                <BasicInput
                    nameInput="Tỉnh/ Thành Phố"
                    placeholder="Nhập tỉnh/ thành phố"
                    type="text"
                    setValue={(e) => setBranchInfor({ ...branchInfor, province: e.target.value })}
                    currentValue={branchInfor.province}
                />
                <BasicInput
                    nameInput="Quận/ Huyện"
                    placeholder="Nhập quận/ huyện"
                    type="text"
                    setValue={(e) => setBranchInfor({ ...branchInfor, ward: e.target.value })}
                    currentValue={branchInfor.ward}
                />
                <BasicInput
                    nameInput="Địa Chỉ"
                    placeholder="Nhập địa chỉ"
                    type="text"
                    setValue={(e) => setBranchInfor({ ...branchInfor, location: e.target.value })}
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
                    setValue={(e) => setBranchInfor({ ...branchInfor, description: e.target.value.split("\n") })}
                    currentValue={branchInfor.description.join("\n")}
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
