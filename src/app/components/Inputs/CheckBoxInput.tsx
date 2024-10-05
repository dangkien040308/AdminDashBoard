import { RoomComport } from "@/app/typings/room"
import { Dispatch, SetStateAction, useState } from "react"

export default function CheckBoxInput({name, field, setRoomComport, currentState} : {name : string, field : keyof RoomComport, setRoomComport : Dispatch<SetStateAction<RoomComport>>, currentState : RoomComport}) {
  const handleCheckBoxChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setRoomComport({...currentState, [field] : e.target.checked})
  }
  return (
    <div className="w-[33%] flex items-center justify-start p-2">
        <input checked={currentState[field]} placeholder="True or False" type="checkbox" className="bg-indigo-200 inline-block" onChange={handleCheckBoxChange}/>
        <span className="ml-2 block text-neutral-900 font-[600]">{name}</span>
    </div>

  )
}