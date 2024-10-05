'use client'
import { RoomManagement } from "@/app/typings/room"
import { FC, useEffect, useState } from "react"
import EditForm from "../Form/EditForm"


const RoomInforItem : FC<RoomManagement> = ({
  roomId, branch, branch_id, price_per_day, price_per_month, name, 
  description, comport, status, acreage, available_from, available_to, 
  max_adults, max_children, max_babies, images,person_per_room
  }) => {
    const fileName = "hotel1.png";
    const fileType = "image/png";

    // This is binary data. For demonstration, we're using a simple string.
    const fileData = "data:image content here";

    // Convert the string to a Blob, which is required for the File constructor.
    const blob = new Blob([fileData], { type: fileType });

    // Create a new File instance using the Blob.
    const file = new File([blob], fileName, { type: fileType });
    useEffect(() => {
      console.log(file)
    },[])
    const fileArray = [file, file, file]
    const [imagesFile, setImagesFile] = useState<File[]>(fileArray)

    const roomComport = [
      { field: "pool", name: "Bể Bơi" },
      { field: "free_laundry", name: "Giặt Ủi Miễn Phí" },
      { field: "HCM_center", name: "Gần Trung Tâm TP HCM" },
      { field: "HN_center", name: "Gần Trung Tâm TP HN" },
      { field: "free_laundry_room", name: "Dịch Vụ Vệ Sinh" },
      { field: "suitable_for_1_2_people", name: "Phù Hợp Từ 1-2 Người" },
      { field: "high_speed_wifi", name: "Wifi Tốc Độ Nhanh" },
      { field: "area_from_20m2_32m2", name: "Diện Tích Từ 20m2 - 30m2" },
      { field: "city_view", name: "View Thành Phố" },
      { field: "river_view", name: "View Sông" },
      { field: "balcony", name: "Có Ban Công" },      
      { field: "desk_working", name: "Có Không Gian Làm Việc" },
      { field: "utility_kitchen", name: "Bếp Tiện Ích" },
      { field: "microwave_open", name: "Lò Vi Sóng" },
      { field: "private_bathroom", name: "Phòng Tắm Riêng Tư" },
      { field: "minibar_refrigerator", name: "Quầy Bar Nhỏ" },
      { field: "security_247", name: "An Ninh 24/7" },
      { field: "gym", name: "Gym"},
      { field: "comfortable_room", name: "Phòng Thoải Mái" },
      { field: "breakfast_buffet", name: "Bữa Sáng Buffet" },
      { field: "civilized_community", name: "Cộng Đồng Văn Minh" },
      { field: "free_laundry", name: "Dọn Dẹp Miễn Phí" },
      { field: "television", name: "Tivi" },
      { field: "beauty_scene", name: "Cảnh Đẹp" },
      { field: "airport_support", name: "Gần Sân Bay" }
    ]
    const [edit, setEdit] = useState<boolean>(false)
    const pricePerDay = parseFloat(price_per_day).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    const pricePerMonth = parseFloat(price_per_month).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })

  return (
    <div className="rounded-lg shadow-lg bg-slate-200 px-7 py-5 flex items-start justify-center mt-5">
      <div>
        <img src={URL.createObjectURL(fileArray[0])} alt="hotel" className="w-[250px] h-[150px] rounded mb-2 object-cover block" />
        {fileArray.slice(1).map((item,id) => (
          <img key={id} src={URL.createObjectURL(item)} alt="hotel" className="w-[120px] h-[70px] rounded mr-2 mt-2 object-cover inline-block" />
        ))}
      </div>
      <div className="w-[40%] px-2">
        <h2 className="text-xl font-[600] text-neutral-900 mb-2">{name}</h2>
        <span className="text-neutral-500 italic block">{branch_id}</span>
        <div>
          <span className={`inline-block w-[10px] h-[10px] rounded-full mr-1 ${status === 'availabe' ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span className={`font-[650] text-lg ${status === 'availabe' ? 'text-green-500' : 'text-red-500'}`}>{status === 'availabe' ? 'Còn Phòng' : 'Đã Đầy'}</span>
        </div>
        <span className="text-neutral-700 block">Giá tiền theo ngày: <span className="text-xl font-[650] text-orange-400"> {pricePerDay} </span> / ngày</span>
        <span className="text-neutral-700 block">Giá tiền theo tháng: <span className="text-xl font-[650] text-orange-400"> {pricePerMonth} </span> / tháng</span>
        <span className="text-neutral-900 block mt-7">Mô tả : {description}</span>
      </div>
      
      <div className="w-[30%]">
        <span className="text-neutral-700 block">Diện tích phòng : <span className="font-[650] italic">{acreage} m2</span> </span>
        <span className="text-neutral-700 block">Số lượng người lớn tối đa : <span className="font-[650] italic">{max_adults} người</span> </span>
        <span className="text-neutral-700 block">Số lượng trẻ em tối đa : <span className="font-[650] italic">{max_children} trẻ em</span> </span>
        <span className="text-neutral-700 block">Số lượng em bé tối đa : <span className="font-[650] italic">{max_babies} em bé</span> </span>
        <div className="flex items-center justify-start flex-wrap">
          {
            comport.map((comportItem : string, id : number) => {
              return <span key={id} className="text-white bg-rose-400 px-2 py-1 rounded-lg inline-block m-1">{roomComport.find(item => item.field === comportItem)?.name}</span>
            })
          }
        </div>

        <button className="mt-10 px-5 py-1 rounded-lg bg-blue-500 text-white font-bold cursor-pointer hover:opacity-50" onClick={() => setEdit(true)}>Edit</button>
      </div>
      
      {edit ? (
        <div>
          <EditForm  
              setEdit={setEdit} 
              roomId={roomId} 
              branch={branch} 
              branch_id={branch_id} 
              price_per_day={price_per_day} 
              price_per_month={price_per_month} 
              name={name} 
              description={description} 
              comport={comport} 
              status={status} 
              acreage={acreage} 
              available_from={available_from} 
              available_to={available_to} 
              person_per_room={person_per_room} 
              max_adults={max_adults} 
              max_children={max_children} 
              max_babies={max_babies} 
              images={imagesFile} 
              setImagesFile={setImagesFile}
          />
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50" onClick={(e) => { setEdit(false)  }} ></div>
        </div>
        
      )  : null}
     
    </div>
)
}

export default RoomInforItem