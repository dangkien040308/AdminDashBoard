"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Route = "booking" | "users" | "room";

export default function Sidebar({ className }: { className: string | null }) {
  const pathname = usePathname();
  const currentRoute = pathname.split("/")[2];

  return (
    <div
      className={
        "h-screen fixed top-0 left-0 z-30 w-[20%] bg-[#FFF] p-3 border-r-[1px] border-r-slate-200 " +
        (className ? className : "")
      }
    >
      <span className="p-2 flex flex-col ">
        <span className="text-3xl font-[600] block mb-4 text-neutral-900">
          Hotel Mvillage
        </span>
        <Link
          href="/admin/room-create"
          className={
            "text-neutral-600 hover:text-neutral-950 rounded-md hover:bg-[#F3F4F6] p-2 cursor-pointer mb-2 " +
            (currentRoute === "room-create"
              ? "bg-[#F3F4F6] font-[600] text-neutral-900"
              : "")
          }
        >
          Tạo Phòng
        </Link>
        <Link
          href="/admin/room-management"
          className={
            "text-neutral-600 hover:text-neutral-950 rounded-md hover:bg-[#F3F4F6] p-2 cursor-pointer mb-2 " +
            (currentRoute === "room-management"
              ? "bg-[#F3F4F6] font-[600] text-neutral-900"
              : "")
          }
        >
          Quản Lí Phòng
        </Link>
        <Link
          href="/admin/branch-create"
          className={
            "text-neutral-600 hover:text-neutral-950 rounded-md hover:bg-[#F3F4F6] p-2 cursor-pointer mb-2 " +
            (currentRoute === "branch-create"
              ? "bg-[#F3F4F6] font-[600] text-neutral-900"
              : "")
          }
        >
          Tạo Chi Nhánh
        </Link>
        <Link
          href="/admin/branch-management"
          className={
            "text-neutral-600 hover:text-neutral-950 rounded-md hover:bg-[#F3F4F6] p-2 cursor-pointer mb-2 " +
            (currentRoute === "branch-management"
              ? "bg-[#F3F4F6] font-[600] text-neutral-900"
              : "")
          }
        >
          Quản Lí Chi Nhánh
        </Link>
      </span>
    </div>
  );
}
