'use client'

import Image from "next/image"
import { useState } from "react";
import { useRouter } from "next/navigation";

import { BranchInforType } from "@/app/typings/branch"
import { Fragment } from "react";
import EditFormBranch  from "./EditForm_Branch"


export default function BranchInfor({name, description, trademark, url, province, ward, best_comforts, location, surrounding_area, images, branch_id} : BranchInforType) {
  const router = useRouter();
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
            <span className="text-neutral-700 block">
                Kiểu chi nhánh :{" "} <strong>{trademark}</strong> 
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
            <div className="text-neutral-900 flex">
                <span className="w-[15%] block"><strong >Mô tả :</strong> </span>  
                 <span className="">
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
          onClick={() => router.push(`branch/edit/${branch_id}`)}
        >
          Chỉnh Sửa
        </button>

    </div>
  )
}