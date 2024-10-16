'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import { BranchInforType } from "@/app/typings/branch";
import { useToast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";
import BasicInput from "@/components/Inputs/BasicInput";
import Heading2 from "@/components/Heading/heading2";
import MutilpleFileInput from "@/components/Inputs/MutipleFileInput";
import TextAreaInput from "@/components/Inputs/TextAreaInput";
import ToDos from "@/components/Inputs/ToDos";
import slugify from "@/lib/convertString";

export default function BranchEdit({params : {branch_id}} : {params : {branch_id : string}}) {
  const { toast } = useToast();
  const [data, setData] = useState<any | undefined>();
  const [files, setFiles] = useState<FileList>();
  const [comportArray, setComportArray] = useState<string[]>([]);
  const [currentComport, setCurrentComport] = useState<string>("");
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

  useEffect(() => {
    axios
      .get('http://localhost:6002/branch/all')
      .then(res => {
        if (!res.data) return;
        const r = res.data.data.find((f : any) => f.branch_id === branch_id);
        if (!r) redirect("/");
        console.log(r)
        setBranchInfor(r);
        setComportArray(r.best_comforts);
      })
      .catch(err => {
        console.error(err)
      })
  },[])

  const handleBranchEdit = async () => {
    setBranchInfor({...branchInfor, surrounding_area: [
        { name: "Đăk Lăk", distance: "20000" },
        { name: "Đăk Noong", distance: "20000" },
    ]})
    console.log(branchInfor.surrounding_area)
    try {
        const formData = new FormData();
        
        formData.append("branch_id",branch_id)
        formData.append("name", branchInfor.name);
        formData.append("trademark", branchInfor.trademark);
        formData.append("province", branchInfor.province);
        formData.append("url", slugify(branchInfor.name)); // cái này em sài hàm hôm qua anh gửi nhé
        formData.append("ward", branchInfor.ward);
        formData.append("location", branchInfor.location);
        
        if (branchInfor.description) {
            branchInfor.description.forEach((desc, index) => {
                formData.append(`description[${index}]`, desc); // Chuyển đối
            });
        } 
        
        if (comportArray) {
            comportArray.forEach((comfort, index) => {
                formData.append(`best_comforts[${index}]`, comfort);
            });
        }
       
        if (files) {
            for (const file of files) {
                if (file instanceof File) {
                    formData.append("images", file, file.name);
                }
            }
        }

        const res = await axios.put("http://localhost:6002/branch", formData, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(res.data)
    } catch (error: any) {
        console.log(error);
        toast({
            title: "Có gì đó không ổn",
            description: Array.isArray(error.response?.data?.message)
                ? error.response?.data?.message?.join(", ")
                : error.response?.data?.message,
            variant: "destructive",
        });
    }
};
  
  return (
    <div>
  
        <span className="text-3xl text-blue-600 font-[600]">Sửa Chi Nhánh</span>

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
                    initialComports={branchInfor.best_comforts}
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
            onClick={handleBranchEdit}
            className="w-max mx-auto block mt-3 px-8 py-2 rounded-lg bg-green-500 text-neutral-100 font-[600] hover:opacity-60"
        >
          Sửa Chi Nhánh
        </button>
        
    </div>
  )
}