import { memo } from "react";
import { RoomInfor } from "@/app/typings/room";

type Props = {
    nameInput: string, 
    placeholder: string,
    currentValue? : string,
    setValue : React.Dispatch<React.SetStateAction<RoomInfor>>,
    field : string
}

const TextAreaInput: React.FC<Props> = ({ nameInput, placeholder, currentValue, setValue, field }) => {
  
  const handleOnChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => { 
    setValue(prevState => ({
      ...prevState, 
      [field] : e.target.value
    })
    )
  }

  return (
    <div className="w-[70%] p-2">
       <label className="mb-3 block text-body-sm font-medium text-neutral-900">
            {nameInput}
        </label>
       <textarea
        required
        rows={6}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e)}
        value={currentValue && currentValue}
        className={`w-full rounded-[7px] border-2 bg-transparent px-5 py-3 outline-none transition focus:border-indigo-500 active:border-indigo-500 placeholder:text-neutral-600 text-neutral-900 border-zinc-400`}
       />
    </div>
     
  )
}

export default memo(TextAreaInput)