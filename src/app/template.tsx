import Sidebar from "./components/Layouts/Sidebar";
import Header
 from "./components/Layouts/Header";
export default function RootTemplate({children} : {children : React.ReactNode}) {
  
  return (
     <div className="flex h-screen overflow-hidden">
      <div className="w-[20%] h-screen">
        <Sidebar className="" /> 
      </div>
             

       <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header className="" />
        
            <main className="bg-[#F3F4F6]">
              <div className="mx-auto max-w-screen-2xl p-5 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>

       </div>

     </div>
  )
}