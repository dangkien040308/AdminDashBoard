import RoomInforItem from "@/app/components/Room-Management/RoomInfor"
import Room from "../room-create/page"
export default function RoomManagement() {
  
  const data = [
    {
      roomId : "1",
      branch : "TP HCM",
      branch_id : "23 Ly Thuong Kiet, Quan 1, TP HCM",
      price_per_day : '450000',
      price_per_month : '23000000',
      name : "TP HCM 1",
      description : "Phong dep ...",
      comport : ["HCM_center", "balcony", "desk_working", "gym", "comfortable_room"],
      status : "availabe",
      acreage : '25',
      available_from : new Date(),
      available_to : new Date(),
      person_per_room : '4',
      max_adults : '4',
      max_children : '3',
      max_babies : '2',
      images : ["/hotel1.png", "/hotel2.png", "/hotel3.png", "/hotel4.png"]
    },
    {
      roomId : "2",
      branch : "TP HN",
      branch_id : "49 Quang Trung, Tay Ho, TP Ha Noi",
      price_per_day : '300000',
      price_per_month : '15000000',
      name : "HN 1",
      description : "Phong dep ...",
      comport : ["HN_center", "balcony", "city_view", "pool", "television", "breakfast_buffet"],
      status : "availabe",
      acreage : '32',
      available_from : new Date(),
      available_to : new Date(),
      person_per_room : '6',
      max_adults : '6',
      max_children : '4',
      max_babies :'3',
      images : ["/hotel1.png", "/hotel2.png", "/hotel3.png", "/hotel4.png"]
    }
  ]
  return (
    <div>
      <span className="text-3xl text-blue-600 font-[600]">Room Management</span>
      {data.map((item,id) => (
        <RoomInforItem 
          key={id}
          images={item.images}
          branch_id={item.branch_id}
          roomId = {item.roomId}
          branch = {item.branch}
          price_per_day = {item.price_per_day}
          price_per_month = {item.price_per_month}
          name = {item.name}
          description = {item.description}
          comport = {item.comport}
          status = {item.status}
          acreage = {item.acreage}
          available_from = {item.available_from}
          available_to = {item.available_to}
          max_adults = {item.max_adults}
          max_children = {item.max_children}
          max_babies = {item.max_babies}
          person_per_room = {item.person_per_room}
        />
      ))}

    </div>
  )
}