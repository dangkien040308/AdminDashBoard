'use client'
import BasicInput from "@/app/components/Inputs/BasicInput";
import TextAreaInput from "@/app/components/Inputs/TextAreaInput";
import MutilpleFileInput from "@/app/components/Inputs/MutipleFileInput";
import ToDos from "@/app/components/Inputs/ToDos";
import BranchSelect from "@/app/components/Inputs/BranchSelect";

import { useState } from "react";
export default function EditFormBranch({
  name,
  description,
  trademark,
  province,
  ward,
  best_comforts,
  location,
  images,
  setEdit
} : {
  name : string,
  description : string[],
  trademark : {
    name : string,
    id : string
  },
  province : string,
  ward : string,
  best_comforts : string[],
  location : string,
  images? : string[],
  setEdit : React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [dataState, setDataState] = useState<any>({
    name: name,
    description: description,
    trademark: trademark,
    province: province,
    ward: ward,
    best_comforts: best_comforts,
    location: location,
    images: images,
  });
  const [comportArray, setComportArray] = useState<string[]>([]);
  const [currentComport, setCurrentComport] = useState<string>("");
  const [imagesFile, setImagesFile] = useState<File[]>([]);

  const dataTrademark = [
    {
      name : 'Manor Villas',
      id : 'manor_villas'
    }, 
    {
      name : 'New Life',
      id : 'new_life'
    }, 
    {
      name : 'Gate Boutique Da Lat',
      id : 'gate_boutique_da_lat'
    }, 
    {
      name : 'Gate Boutique Sa Pa',
      id : 'gate_boutique_sa_pa'
    },
    {
      name : 'Gold View',
      id : 'gold_view'
    },
    {
      name : 'Moon Valley Villas',
      id : 'moon_valley_villas'
    },
    {
      name : 'Yukkuri Boutique',
      id : 'yukkuri_boutique'
    },
    {
      name : 'Lumina',
      id : 'lumina'
    }
  ]
  const [trademarkValue, setTrademarkValue] = useState<{
    id : string,
    name : string
  }>({
    id : "",
    name : ""
  })

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
    <div>
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
            <BranchSelect 
              placeholder="Chọn kiểu chi nhánh"
              BranchLocaiton={dataTrademark}
              currentBranchLocation={trademarkValue}
              setBranchLocation={setTrademarkValue}
              lable="Chọn Kiểu Chi Nhánh"    
            />
            <BasicInput
              nameInput="Tên Chi Nhánh"
              placeholder="Nhập tên chi nhánh"
              type="text"
              currentValue={name}
              setValue={setDataState}
              field="name"
            />
            <BasicInput
              nameInput="Tỉnh/ Thành Phố"
              placeholder="Nhập tên tỉnh/ thành phố"
              type="text"
              currentValue={dataState.province}
              setValue={setDataState}
              field="province"
            />
            <BasicInput
              nameInput="Quận/ Huyện"
              placeholder="Nhập tên quận/ huyện"
              type="text"
              currentValue={dataState.ward}
              setValue={setDataState}
              field="ward"
            />
            <BasicInput
              nameInput="Địa Chỉ"
              placeholder="Nhập địa chỉ"
              type="text"
              currentValue={dataState.location}
              setValue={setDataState}
              field="location"
            />
            <TextAreaInput
              nameInput="Mô Tả Phòng"
              placeholder="Nhập mô tả phòng"
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
                initialComports={best_comforts}
              />
            </div>

            <div className="w-[70%]">
              <label className="text-2xl font-[600] block mb-2 text-stone-900">
                Chọn Ảnh
              </label>
              <MutilpleFileInput files={imagesFile} setFiles={setImagesFile} />
            </div>

          </div>

          <button
              className="block mt-5 rounded-lg w-max mx-auto bg-green-500 px-5 py-2 text-white font-bold cursor-pointer hover:opacity-50"
              onClick={(e) => handleSubmitGlobalData(e)}
            >
              Cập Nhật
          </button>

      </div>
    </div>
  )
}