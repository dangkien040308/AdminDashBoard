'use client'

import BasicInput from "@/components/Inputs/BasicInput";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

const userData = [
  {
    name: "INV001",
    password: "Paid",
    email: "$250.00",
    roles: ["Credit Card"],
  },
  {
    name: "INV002",
    password: "Pending",
    email: "$150.00",
    roles: ["PayPal"],
  },
  {
    name: "INV003",
    password: "Unpaid",
    email: "$350.00",
    roles: ["Bank Transfer"],
  },
  {
    name: "INV004",
    password: "Paid",
    email: "$450.00",
    roles: ["Credit Card"],
  },
  {
    name: "INV005",
    password: "Paid",
    email: "$550.00",
    roles: ["PayPal"],
  },
  {
    name: "INV006",
    password: "Pending",
    email: "$200.00",
    roles: ["Bank Transfer"],
  },
  {
    name: "INV007",
    password: "Unpaid",
    email: "$300.00",
    roles: ["Credit Card"],
  },
];

export default function TableDemo() {
  const [edit, setEdit] = useState<boolean>(false);
  const [data, setData] = useState<{
    name: string;
    password: string;
    email: string;
    roles: string[];
  }>({
    name: "",
    password: "",
    email: "",
    roles: [""],
  });

  return (
    <div className="flex items-center justify-center relative">
      <Table className="p-3 rounded-lg border-2 border-slate-200/80">
        <TableHeader>
          <TableRow className="text-neutral-950 font-bold">
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Password</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((invoice) => (
            <TableRow
              key={invoice.name}
              className="hover:bg-slate-500/40 cursor-pointer"
              onClick={() => {
                setEdit(true)
                setData({
                  name: invoice.name,
                  password: invoice.password,
                  email: invoice.email,
                  roles: invoice.roles,
                });
              }}
            >
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell>{invoice.password}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell className="text-right">{invoice.roles[0]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {edit && (
        <> 
         <div
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50"
            onClick={() => {
              setEdit(false);
            }}
         ></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-[40%] -translate-y-[43%]  w-[800px] h-screen-15 bg-white rounded-lg p-5 shadow-lg overflow-y-scroll z-10">
          <button
              type="button"
              title="Set State to Edit (false)"
              className="hover:bg-[rgba(0,0,0,0.4)] bg-[rgba(0,0,0,0.6)] rounded-md px-2 py-1 absolute top-1 right-1"
              onClick={() => setEdit(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                width="20px"
                height="20px"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M8,16 C12.4183,16 16,12.4183 16,8 C16,3.58172 12.4183,0 8,0 C3.58172,0 0,3.58172 0,8 C0,12.4183 3.58172,16 8,16 Z M4.29289,4.29289 C4.68342,3.90237 5.31658,3.90237 5.70711,4.29289 L8,6.58579 L10.2929,4.29289 C10.6834,3.90237 11.3166,3.90237 11.7071,4.29289 C12.0976,4.68342 12.0976,5.31658 11.7071,5.70711 L9.41421,8 L11.7071,10.2929 C12.0976,10.6834 12.0976,11.3166 11.7071,11.7071 C11.3166,12.0976 10.6834,12.0976 10.2929,11.7071 L8,9.41421 L5.70711,11.7071 C5.31658,12.0976 4.68342,12.0976 4.29289,11.7071 C3.90237,11.3166 3.90237,10.6834 4.29289,10.2929 L6.58579,8 L4.29289,5.70711 C3.90237,5.31658 3.90237,4.68342 4.29289,4.29289 Z"
                />
              </svg>
          </button>
          <div className="">
                <BasicInput
                  nameInput="Name"
                  placeholder="Enter name"
                  type="text"
                  setValue={(e) => setData({ ...data, name: e.target.value })}
                  currentValue={data.name}
                  className="w-[80%] block mx-auto"
                />
                <BasicInput
                  nameInput="Password"
                  placeholder="Enter password"
                  type="password"
                  setValue={(e) => setData({ ...data, password: e.target.value })}
                  currentValue={data.password}
                  className="w-[80%] block mx-auto"
                />
                <BasicInput
                  nameInput="Email"
                  placeholder="Enter email"
                  type="email"
                  setValue={(e) => setData({ ...data, email: e.target.value })}
                  currentValue={data.email}
                  className="w-[80%] block mx-auto"
                />
                <BasicInput
                  nameInput="Role"
                  placeholder="Enter role"
                  type="text"
                  setValue={(e) => setData({ ...data, roles: [e.target.value] })}
                  currentValue={data.roles[0]}
                  className="w-[80%] block mx-auto"
                />
          </div>
          <button
            className="w-max mx-auto block mt-3 px-8 py-2 rounded-lg bg-green-500 text-neutral-100 font-[600] hover:opacity-60"
          >
          Sửa Chi Nhánh
        </button>
        </div>
        
        </>
      )}
    </div>
  );
}
