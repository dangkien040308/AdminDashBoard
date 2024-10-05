'use client'
import { RoomComport, RoomInfor, RoomManagement } from "@/app/typings/room"
import { useState, Dispatch, SetStateAction } from "react"
import CheckBoxInput from "@/app/components/Inputs/CheckBoxInput"
import MutilpleFileInput from '@/app/components/Inputs/MutipleFileInput'
import BasicInput from "../Inputs/BasicInput"
import TextAreaInput from "../Inputs/TextAreaInput"


type dataState = {
  branch : string,
  branch_id : string,
  name : string,
  acreage : string,
  price_per_day : string,
  price_per_month : string,
  description : string,
  available_from : Date,
  available_to : Date,
  max_adults : string,
  max_children : string,
  max_babies : string,
}

type setEditAction = {
  setEdit : Dispatch<SetStateAction<boolean>>
}
type setImagesFileAction = {
  setImagesFile : Dispatch<SetStateAction<File[]>>
}
type Props = RoomManagement & setEditAction & setImagesFileAction

const EditForm : React.FC<Props> = ({
  roomId, branch, branch_id, price_per_day, price_per_month, name, 
  description, comport, status, acreage, available_from, available_to, 
  max_adults, max_children, max_babies, images, setEdit, person_per_room, setImagesFile
}) => {
  const [dataState, setDataState] = useState<RoomInfor>({
    branch : branch,
    branch_id : branch_id,
    person_per_room : person_per_room,
    price_per_day : price_per_day,
    price_per_month : price_per_month,
    name : name,
    description : description,
    acreage : acreage,
    available_from : available_from,
    available_to : available_to,
    max_adults : max_adults,
    max_children : max_children,
    max_babies : max_babies,
    images : images
  })
  const dataCheckBox = [
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
  const roomComportState: Record<string, boolean> = {
    free_laundry_room : false,
    HCM_center : false,
    HN_center : false,
    cleaning_services : false,
    suitable_for_1_2_people : false,
    high_speed_wifi : false,
    area_from_20m2_32m2 : false,
    city_view : false,
    river_view : false,
    balcony : false,
    desk_working : false,
    utility_kitchen : false,
    microwave_open : false,
    private_bathroom : false,
    minibar_refrigerator : false,
    security_247 : false,
    gym : false,
    comfortable_room : false,
    breakfast_buffet : false,
    pool : false,
    civilized_community : false,
    free_laundry : false,
    television : false,
    beauty_scene : false,
    airport_support : false
  }
  const [files,setFiles] = useState<File[]>([])
  Object.keys(roomComportState).forEach(key => {
    roomComportState[key] = comport.includes(key)
  })

  const handleSubmitGlobalData = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const data = {
      dataState,  
      roomComport
    }

    console.log(data)

  }

  const [roomComport, setRoomComport] = useState<RoomComport>(roomComportState)
  return ( 
      <div className=" flex items-center justify-between flex-wrap fixed top-1/2 left-1/2 -translate-x-[40%] -translate-y-[43%]  w-[800px] h-screen-15 bg-white rounded-lg p-5 shadow-lg overflow-y-scroll z-10">
          <BasicInput nameInput="Tên Phòng" placeholder="Nhập Tên Phòng" type="text" currentValue={dataState.name} setValue={setDataState} field="name" />
          <BasicInput nameInput="Địa Chỉ Phòng" placeholder="Nhập Địa Chỉ Phòng" type="text" currentValue={dataState.branch_id} setValue={setDataState} field="branch_id" />
          <BasicInput nameInput="Diện Tích Phòng (m2)" placeholder="Nhập Diện Tích Phòng" type="number" currentValue={dataState.acreage} setValue={setDataState} field="acreage" />
          <BasicInput nameInput="Sức Chứa Của Phòng (người)" placeholder="Nhập sức chứa của phòng (người)" type="number" currentValue={dataState.max_adults} setValue={setDataState} field="max_adults" />
          <BasicInput nameInput="Giá Tiền ( 1 ngày )" placeholder="Nhap số tiền" type="number" currentValue={dataState.price_per_day} setValue={setDataState} field="price_per_day" />
          <BasicInput nameInput="Giá Tiền ( 1 tháng )" placeholder="Nhập số tiền" type="number" currentValue={dataState.price_per_month} setValue={setDataState} field="price_per_month" />
          <BasicInput nameInput="Số lượng người tối đa" placeholder="Nhập số lượng người tối đa" type="number" currentValue={dataState.person_per_room} setValue={setDataState} field="person_per_room" />
          <BasicInput nameInput="Số lượng người lớn tối đa" placeholder="Nhập số lượng người lớn tối đa" type="number" currentValue={dataState.max_adults} setValue={setDataState} field="max_adults" />
          <BasicInput nameInput="Số lượng trẻ em tối đa" placeholder="Nhập số lượng trẻ em tối đa" type="number" currentValue={dataState.max_children} setValue={setDataState} field="max_children" />
          <BasicInput nameInput="Số lượng em bé tối đa" placeholder="Nhập số lượng em bé tối đa" type="number" currentValue={dataState.max_babies} setValue={setDataState} field="max_babies" />
          <TextAreaInput nameInput="Mo Ta Phong" placeholder="Nhap mo ta" setValue={setDataState} field="description" currentValue={dataState.description} />

          <div className="mt-3 flex items-center justify-evenly flex-wrap">
           {dataCheckBox.map((item : {field : string, name : string}, id : number) => (
             <CheckBoxInput key={id} field={item.field as keyof RoomComport} name={item.name} setRoomComport={setRoomComport} currentState={roomComport} />
           ))}
          </div>

          <div className="w-[70%]">
              <label className="text-2xl font-[600] block mb-2 text-stone-900">Chọn Ảnh</label>
              {/* <MutilpleFileInput files={images} setFiles={setImagesFile} /> */}
          </div>

          <button className="mt-5 rounded-lg w-max mx-auto bg-green-600 px-5 py-2 text-white font-bold cursor-pointer hover:opacity-50" onClick={(e) => handleSubmitGlobalData(e)}>Submit</button>
      </div>
  )
}

export default EditForm