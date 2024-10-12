'use client'
import Image from "next/image"
import { useState } from "react";

import { BranchInforType } from "@/app/typings/branch"
import { Fragment } from "react";
import EditFormBranch  from "./EditForm_Branch"


export default function BranchInfor({name, description, trademark, url, province, ward, best_comforts, location, surrounding_area, images} : BranchInforType) {
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <div className="rounded-lg shadow-lg bg-slate-200 p-5 flex items-start justify-center mt-5 flex-col">
       <h2 className="text-xl font-[600] mb-2">{name}</h2>
       <div className="flex items-start justify-between gap-4">
       {images?.map((item, id) => {
          // Check if the item is a string (URL) or a File object
          const imageUrl = typeof item === "string" ? item : URL.createObjectURL(item);
          
          return (
            <Image
              key={id}
              src={imageUrl}
              alt="loading..."
              width={400}
              height={300}
              className="w-[250px] h-[150px] rounded mb-2 object-cover"
            />
          );
        })}
       </div>

       <div className="flex items-start justify-between gap-4 text-neutral-900 mt-5">
          <div className="w-[50%]">
            {/* <div>
              <span
                className={`inline-block w-[10px] h-[10px] rounded-full mr-1 ${
                  status === "availabe" ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
              <span
                className={`font-[650] text-lg ${
                  status === "availabe" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status === "availabe" ? "Còn Phòng" : "Đã Đầy"}
              </span>
            </div> */}
            <span className="text-neutral-700 block">
                Kiểu chi nhánh :{" "} <strong>{trademark.name}</strong> 
            </span>
            <span className="text-neutral-700 block">
                Tỉnh/ Thành Phố :{" "} <strong>{province}</strong>
            </span>
            <span className="text-neutral-700 block">
                Quận/ Huyện :{" "} <strong>{ward}</strong> 
            </span>
            <span className="text-neutral-700 block">
                Địa chỉ :{" "} <strong className="text-neutral-900"><i>{location}</i></strong> 
            </span>

          </div>
          <div className="w-[45%]">
            <span className="text-neutral-900 flex">
                <strong className="w-[20%]">Mô tả :</strong> 
                <i className="">
                  {description.map((item : string, id : number) => (
                      <Fragment key={id}>
                        {item}
                        {id < description.length - 1 && <br />} {/* Add <br /> except for the last item */}
                      </Fragment>
                  ))}
                </i>
            </span>
          </div>
          

          <div className="flex items-center justify-start flex-wrap">
              {best_comforts?.map((comfortItem: string, id: number) => {
                return (
                  <span
                    key={id}
                    className="text-white bg-orange-500 px-2 py-1 rounded-lg inline-block m-1"
                  >
                    {comfortItem}
                  </span>
                );
              })}
          </div>
       </div>
       
       <button
          className="mt-10 w-max mx-auto px-5 py-1 rounded-lg bg-blue-500 text-white font-bold cursor-pointer hover:opacity-50 hover:bg-blue-600"
          onClick={() => setEdit(true)}
        >
          Chỉnh Sửa
        </button>


       {edit ? (
        <div>
          <EditFormBranch
            name={name}
            description={description}
            trademark={trademark}
            province={province}
            ward={ward}
            best_comforts={best_comforts}
            location={location}
            images={images || []}
            setEdit={setEdit}
          />
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50"
            onClick={(e) => {
              setEdit(false);
            }}
          ></div>
        </div>
      ) : null}

    </div>
  )
}