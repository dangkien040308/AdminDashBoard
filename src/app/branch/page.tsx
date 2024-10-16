"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import BranchInfor from "@/components/Branch-Management/BranchInfor";
import getImage from "../../lib/getImage"


export default function BranchListPage() {
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        
        axios
            .get("http://localhost:6002/branch/all")
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.error(err);
            });


        // then catch = try catch use effect k sài try catch đc em ơi với lại sài then rồi thì axios k return đâu code v là chuẩn rồi
    }, []);
    

    return (
        <div>
            <span className="text-3xl text-blue-600 font-[600]">Chi Nhánh</span>
            <div>
                {data.length > 0
                    ? data.map((item : any, id : number) => (
                          <BranchInfor
                              key={id}
                              name={item.name}
                              description={item.description ? item.description : [" "]}
                              trademark={item.trademark ? item.trademark : ""}
                              url={item.url ? item.url : "/"}
                              province={item.province ? item.province : ""}
                              ward={item.ward ? item.ward : ""}
                              best_comforts={item.best_comforts ? item.best_comforts : []}
                              location={item.location ? item.location : ""}
                              surrounding_area={item.surrounding_area ? item.surrounding_area : []}
                              images={item.images ? item.images?.map((imageUrl : any) => getImage(imageUrl)) : []}
                              branch_id={item.branch_id}
                          />
                      ))
                    : "Is Loading"}
            </div>
        </div>
    );
}
