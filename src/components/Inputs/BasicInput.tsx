import { ChangeEventHandler, memo } from "react";

type Props = {
  nameInput: string;
  placeholder: string;
  type: string;
  minValue?: number;
  currentValue?: string;
  setValue: ChangeEventHandler<HTMLInputElement>;
  className? : string
};

const BasicInput: React.FC<Props> = ({
  nameInput,
  placeholder,
  type,
  minValue = 1,
  currentValue,
  setValue,
  className
}) => {
  return (
    <div className={`w-[45%] p-2 ${className}`}>
      <label className="mb-1 block text-body-sm font-[600] text-gray-900">
        {nameInput}
      </label>
      <input
        required
        value={currentValue && currentValue}
        onChange={setValue}
        placeholder={placeholder}
        type={type}
        min={minValue}
        minLength={1}
        className={`w-full p-2 bg-transparent outline-none border-2 border-zinc-400 focus:border-indigo-500 active:border-indigo-500 rounded-[7px] placeholder:text-neutral-600 text-neutral-900 `}
      />
    </div>
  );
};

export default memo(BasicInput);
