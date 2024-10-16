"use client";
import { FC, Fragment, useState } from "react";
import EditForm from "./EditForm_Room";
import Image from "next/image";
import EditFormRoom from "./EditForm_Room";

const RoomInforItem: FC<any> = ({
  roomId,
  branch,
  branch_id,
  price_per_day,
  price_per_month,
  name,
  description,
  comforts,
  status,
  acreage,
  available_from,
  available_to,
  max_adults,
  max_children,
  max_babies,
  images,
  bed_type,
  stock,
}) => {

  const [imagesFile, setImagesFile] = useState<File[]>([]);

  const [edit, setEdit] = useState<boolean>(false);
  const pricePerDay = parseFloat(price_per_day).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const pricePerMonth = parseFloat(price_per_month).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className="rounded-lg shadow-lg bg-slate-200 p-5 flex items-start justify-center mt-5 flex-col">
      <div className="flex items-start justify-between gap-4">
          {images?.map((item : string,id : number) => (
            <Image
              key={id}
              src={item}
              alt="loading..."
              width={400}
              height={300}
              className="w-[250px] h-[150px] rounded mb-2 object-cover"
          />
          ))}
      </div>
      <div className="flex items-start justify-center gap-4 mt-5"> 
          <div className="w-[50%]">
            <h2 className="text-xl font-[600] text-neutral-900 mb-2">{name}</h2>
            <span className="text-neutral-500 italic block">{branch_id}</span>
            <div>
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
            </div>
            <span className="text-neutral-700 block">
              Giá tiền theo ngày:{" "}
              <span className="text-xl font-[650] text-orange-400">
                {" "}
                {pricePerDay}{" "}
              </span>{" "}
              / ngày
            </span>
            <span className="text-neutral-700 block">
              Giá tiền theo tháng:{" "}
              <span className="text-xl font-[650] text-orange-400">
                {" "}
                {pricePerMonth}{" "}
              </span>{" "}
              / tháng
            </span>
            <span className="text-neutral-900 block mt-7">
              <strong>Mô tả :{' '}</strong> 
              {description.map((item : string, id : number) => (
                  <Fragment key={id}>
                    {item}
                    {id < description.length - 1 && <br />} {/* Add <br /> except for the last item */}
                  </Fragment>
              ))}
            </span>
          </div>

          <div className="w-[40%]">
            <span className="text-neutral-700 block">
              Diện tích phòng :{" "}
              <span className="font-[650] italic">{acreage} m2</span>{" "}
            </span>
            <span className="text-neutral-700 block">
              Số lượng người lớn tối đa :{" "}
              <span className="font-[650] italic">{max_adults} người</span>{" "}
            </span>
            <span className="text-neutral-700 block">
              Số lượng trẻ em tối đa :{" "}
              <span className="font-[650] italic">{max_children} trẻ em</span>{" "}
            </span>
            <span className="text-neutral-700 block">
              Số lượng em bé tối đa :{" "}
              <span className="font-[650] italic">{max_babies} em bé</span>{" "}
            </span>
           

          </div>
          <div className="flex items-center justify-start flex-wrap">
              {comforts?.map((comfortItem: string, id: number) => {
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
          className="mt-10 w-max mx-auto px-5 py-1 rounded-lg bg-blue-500 text-white font-bold cursor-pointer hover:opacity-50"
          onClick={() => setEdit(true)}
        >
          Cập Nhật
        </button>

      {edit ? (
        <div>
          <EditFormRoom
            bed_type={bed_type}
            stock={stock}
            setEdit={setEdit}
            roomId={roomId}
            branch={branch}
            branch_id={branch_id}
            price_per_day={price_per_day}
            price_per_month={price_per_month}
            name={name}
            description={description}
            comforts={comforts}
            status={status}
            acreage={acreage}
            available_from={available_from}
            available_to={available_to}
            max_adults={max_adults}
            max_children={max_children}
            max_babies={max_babies}
            images={imagesFile}
            setImagesFile={setImagesFile}
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
  );
};

export default RoomInforItem;
