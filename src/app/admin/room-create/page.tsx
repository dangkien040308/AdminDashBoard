'use client'
import BasicInput from "@/app/components/Inputs/BasicInput";
import CheckBoxInput from "@/app/components/Inputs/CheckBoxInput";
import MutilpleFileInput from "@/app/components/Inputs/MutipleFileInput";
import SelectGroup from "@/app/components/Inputs/SetStatusRoom";
import TextAreaInput from "@/app/components/Inputs/TextAreaInput";
import { useState, useCallback, useEffect, Dispatch, SetStateAction, MouseEventHandler } from "react";
import { RoomInfor, RoomStatus, RoomComport } from "@/app/typings/room";

import BranchSelect from "@/app/components/Inputs/BranchSelect";
import RoomSelect from "@/app/components/Inputs/RoomSelect";

import DatePicker from "@/app/components/Inputs/DatePicker"
import { addDays } from "date-fns"
import { DateRange } from "react-day-picker"
import Heading2 from "@/app/components/Heading/heading2";
import ToDos from "@/app/components/Inputs/ToDos";

export default function Room() {
  //Date
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
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
  // Branch Location State => BranchSelect
  const BranchLocaitonObject = [
    {
      name : 'tp_hcm',
      location : 'TP Ho Chi Minh',
      room : ['tphcm1', 'tphcm2', 'tphcm3','tphcm4','tphcm5','tphcm6']
    },
     {
      name : 'dn',
      location : 'Da Nang',
      room : ['dn1', 'dn2', 'dn3','dn4','dn5','dn6']
    },
    {
      name : 'hn',
      location : 'Ha Noi',
      room : ['hn1', 'hn2', 'hn3','hn4','hn5','hn6']
    },
  ]
  // Branch Location State => BranchSelect
  const [branchLocaiton, setBranchLocation] = useState<string>('')
  // Room Branch State => RoomSelect
  const [roomBranch, setRoomBranch] = useState<string>('')
  // Room Info State => BasicInput & TextAreaInput
  // Room Info State => SelectGroupInput
  const [roomStatus, setRoomStatus] = useState<RoomStatus | string>("")
  // Room Comport State => CheckBoxInput
  const [roomComport, setRoomComport] = useState<RoomComport>({
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
  })
  // Room Files State => MutilpleFileInput
  const [files, setFiles] = useState<File[]>([])
  const [roomInforData, setRoomInforData] = useState<RoomInfor>({
    branch : "",
    name : "",
    branch_id : "",
    acreage : "",
    person_per_room : "",
    price_per_day : "",
    price_per_month : "",
    description : "",
    available_from : new Date(),
    available_to : addDays(new Date(), 20),
    max_adults : '',
    max_children : '',
    max_babies : '',
    images : []
  })
  // Submit Handler
  const handleSubmitGlobalData =  useCallback( () => {

    const roomInfor = {
      name : roomInforData.name ,
      branch_id : roomInforData.branch_id,
      acreage : roomInforData.acreage,
      personPerRoom : roomInforData.person_per_room,
      pricePerDay : roomInforData.price_per_day,
      pricePerMonth : roomInforData.price_per_month ,
      description : roomInforData.description,
      maxAdults : roomInforData.max_adults,
      maxChildren : roomInforData.max_children,
      maxBabies : roomInforData.max_babies
     }
     const data = {
      roomInfor,
      roomStatus,
      roomComport,
      files
    }
    console.log(data)

  }, [roomStatus, roomComport, files])

  return (
    <div>
      <span className="text-3xl text-blue-600 font-[600]">Tao Phong</span>

      

      <div className="flex items-start justify-between mt-10 flex-wrap">
         {/* Room Info => BasicInput & TextAreaInput */}
         <div className="flex items-start justify-start space-x-10 flex-wrap w-[100%] p-2 mb-[120px]">
           <BranchSelect lable="Chon Chi Nhanh" BranchLocaiton={BranchLocaitonObject.map(item => item.location)} setBranchLocation={setBranchLocation} currentBranchLocation={branchLocaiton} />
           <RoomSelect lable="Chon Phong" roomsBranch={BranchLocaitonObject.find(item => item.location === branchLocaiton)?.room} setRoomBranch={setRoomBranch} currentRoomBranch={roomBranch} />
         </div>
         <BasicInput currentValue={roomInforData.branch} field="branch" setValue={setRoomInforData}  nameInput="Tinh/Thanh Pho" placeholder="Nhập Tên Tinh/Thanh Pho" type="text"/>
         <BasicInput currentValue={roomInforData.name} field="name" setValue={setRoomInforData}  nameInput="Tên Phòng" placeholder="Nhập Tên Phòng" type="text"/>
         <BasicInput currentValue={roomInforData.branch_id} field="branch_id" setValue={setRoomInforData} nameInput="Địa Chỉ Phòng" placeholder="Nhập Địa Chỉ Phòng" type="text" />
         <BasicInput currentValue={roomInforData.acreage} field="acreage" setValue={setRoomInforData} minValue={10} nameInput="Diện Tích Phòng (m2)" placeholder="Nhập Diện Tích Phòng" type="number"/>
         <BasicInput currentValue={roomInforData.person_per_room} field="person_per_room" setValue={setRoomInforData} nameInput="Sức Chứa Của Phòng (người)" placeholder="Nhập sức chứa của phòng (người)" type="number"/>
         <BasicInput currentValue={roomInforData.price_per_day} field="price_per_day" setValue={setRoomInforData} nameInput="Giá Tiền (1 ngày)" placeholder="Nhap số tiền" type="number" />
         <BasicInput currentValue={roomInforData.price_per_month} field="price_per_month" setValue={setRoomInforData} nameInput="Giá Tiền (1 tháng)" placeholder="Nhập số tiền" type="number" />
         <BasicInput currentValue={roomInforData.max_adults} field="max_adults" setValue={setRoomInforData} nameInput="Số lượng người lớn tối đa / 1 phòng" placeholder="Nhập số lượng người" type="number" />
         <BasicInput currentValue={roomInforData.max_babies} field="max_babies" setValue={setRoomInforData} nameInput="Số lượng em bé tối đa / 1 phòng" placeholder="Nhập số lượng người" type="number" />
         <BasicInput currentValue={roomInforData.max_children} field="max_children" setValue={setRoomInforData} nameInput="Số lượng trẻ em tối đa / 1 phòng" placeholder="Nhập số lượng người" type="number" />
         <TextAreaInput currentValue={roomInforData.description} field="description" setValue={setRoomInforData} nameInput="Mô tả phòng" placeholder="Nhập mô tả" />

         {/* Room Status => SelectGroupInput */}
        <div className="my-20 w-[100%]">
           <Heading2>Thời Gian Trống Của Phòng</Heading2>
           <div className="w-[100%] flex items-center justify-center mt-4">
              <DatePicker date={date} setDate={setDate} />
           </div>
        </div>

         <div>
            <Heading2>Trạng Thái Phòng</Heading2>
            <SelectGroup roomStatus={roomStatus} setRoomStatus={setRoomStatus} />
         </div>
         

         {/* Room Comport => CheckBoxInput */}
         <div className="w-[100%] my-10">
            <Heading2>Tien Ich</Heading2>
            <ToDos />
         </div>

         {/* Room Files => MutilpleFileInput */}
         <div className="w-full ">
            <Heading2>Chọn Ảnh</Heading2>
            <MutilpleFileInput files={files} setFiles={setFiles} />
          </div>
      </div>

      <button 
        onClick={handleSubmitGlobalData}
        className="w-max mx-auto block mt-3 px-8 py-2 rounded-lg bg-green-500 text-neutral-100 font-[600] hover:opacity-60">
          Submit
      </button>

    </div>
  )
}