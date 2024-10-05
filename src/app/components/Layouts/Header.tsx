import Image from "next/image";

export default function Header({className} : {className : string | null}) {
  return (
    <div className={"text-zinc-900 sticky top-0 left-0 z-30 py-4 px-5 flex items-center justify-between bg-[#FFFF] border-b-[1px] shadow-lg border-b-slate-200 " + (className ? className : "")}>
      <span className="text-4xl font-[650]">Dashboard</span>
      <div className="flex items-center justify-center">
        <Image width={50} height={50} alt="wait..." src={'/11.jpg'} className="mr-2 w-[40px] h-[40px] rounded-full object-cover"/>
        <span>KenD</span>
      </div>
    </div>
  )
}