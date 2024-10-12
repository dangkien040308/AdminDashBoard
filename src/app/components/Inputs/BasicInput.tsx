import { RoomInfor } from "@/app/typings/room";
import { memo } from "react";

type Props = {
  nameInput: string;
  placeholder: string;
  type: string;
  minValue?: number;
  currentValue?: string;
  field: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
};

const BasicInput: React.FC<Props> = ({
  nameInput,
  placeholder,
  type,
  minValue = 1,
  currentValue,
  setValue,
  field,
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevState : any) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };
  return (
    <div className="w-[45%] p-2">
      <label className="mb-3 block text-body-sm font-[600] text-gray-900">
        {nameInput}
      </label>
      <input
        required
        value={currentValue && currentValue}
        onChange={(e) => {
          handleOnChange(e);
        }}
        placeholder={placeholder}
        type={type}
        min={minValue}
        minLength={1}
        className={`w-full p-3 bg-transparent outline-none border-2 border-zinc-400 focus:border-indigo-500 active:border-indigo-500 rounded-[7px] placeholder:text-neutral-600 text-neutral-900 `}
      />
    </div>
  );
};

export default memo(BasicInput);
