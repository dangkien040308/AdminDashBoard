import BranchInfor from "@/app/components/Branch-Management/BranchInfor";

const BranchData = [
  {
    name: 'Tao Dan Park',
    description: ['Gan trung tam, view dep, nhieu tien ich', 'Co xe dua don'],
    trademark: {
      name : 'Manor Villas',
      id : 'manor_villas'
    },
    url: '/taodanpark',
    province: 'Ho Chi Minh',
    ward: 'Quan 1',
    best_comforts: ['HCM_center', 'HN_center', 'pool', 'television', 'breakfast_buffet'],
    location: '23 Quang Trung, Quan 1, TP HCM',
    surrounding_area: [''],
    images : ["/hotel1.png", "/hotel2.png", "/hotel3.png", "/hotel4.png"]
  }
  
]

export default function BranchManagement() {
  return (
    <div>
      <span className="text-3xl text-blue-600 font-[600]">Quản Lí Chi Nhánh</span>
      {BranchData?.map((item,id) => (
         <BranchInfor 
           key={id}
           name={item.name}
           description={item.description}
           trademark={item.trademark}
           url={item.url}
           province={item.province}
           ward={item.ward}
           best_comforts={item.best_comforts}
           location={item.location}
           surrounding_area={item.surrounding_area}
           images={item.images}
           />
      ))}
    </div>
  )
}