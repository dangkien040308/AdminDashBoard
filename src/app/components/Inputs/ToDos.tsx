'use client'
import { useState, useRef, ChangeEvent } from "react"
import Heading2 from "../Heading/heading2"

export default function ToDos() {
  const [comportArray, setComportArray] = useState<string[]>([])
  const [currentComport, setCurrentComport] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    setCurrentComport(e.target.value)
  }
  const handleClick = () => {
    setComportArray((prevState) => [...prevState, currentComport])
    if (inputRef.current !== null) {
      inputRef.current.value = ''
      inputRef.current.focus()
    } 
  }
  const handleFocus = () => {
    console.log('Input được focus');
  };

  const handleKeyDown = (event : React.KeyboardEvent<HTMLInputElement>) => {
    // Kiểm tra xem input có đang focus và phím được nhấn có phải là Enter không
    if (inputRef.current === document.activeElement && event.key === 'Enter') {
      console.log('Phím Enter được nhấn, giá trị hiện tại của input:', currentComport);
      // Thực hiện các hành động khác nếu cần
      handleClick()
    }
  };
  return (
    <div>

        <div className="flex items-start justify-start space-x-10 mb-7">
          <input 
            type="text"
            placeholder="Nhap Tien Ich"
            ref={inputRef}
            onChange={handleChange}
            onFocus={handleFocus} // Xử lý sự kiện focus
            onKeyDown={handleKeyDown} // Xử lý sự kiện nhấn phím
            className={`w-[40%] p-2 bg-transparent outline-none border-2 border-zinc-400 focus:border-indigo-500 active:border-indigo-500 rounded-[7px] placeholder:text-neutral-600 text-neutral-900 `}
          />
          <button 
              onClick={handleClick}
              className="w-max block px-7 py-2 rounded-lg bg-green-500 text-neutral-100 font-[600] hover:opacity-60">
                Submit
          </button>
        </div>
        
        <ul className="flex items-start justify-start flex-wrap">
           {comportArray?.map((currentItem,id) => (
             <li className="no-list-style px-3 mr-3 py-1 rounded-sm bg-rose-500 text-white my-1" key={id}>
               <span className="inline-block w-max mr-2">{currentItem}</span>
               <span 
                   className="hover:opacity-50 cursor-pointer rounded"
                   onClick={
                      () => {
                          setComportArray(prevState => prevState.filter(item => item != currentItem)) 
                      }
               }>
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block -mt-[3px]" width="15px" height="15px" viewBox="0 0 16 16">
                  <path fill="#fff" fillRule="evenodd" d="M8,16 C12.4183,16 16,12.4183 16,8 C16,3.58172 12.4183,0 8,0 C3.58172,0 0,3.58172 0,8 C0,12.4183 3.58172,16 8,16 Z M4.29289,4.29289 C4.68342,3.90237 5.31658,3.90237 5.70711,4.29289 L8,6.58579 L10.2929,4.29289 C10.6834,3.90237 11.3166,3.90237 11.7071,4.29289 C12.0976,4.68342 12.0976,5.31658 11.7071,5.70711 L9.41421,8 L11.7071,10.2929 C12.0976,10.6834 12.0976,11.3166 11.7071,11.7071 C11.3166,12.0976 10.6834,12.0976 10.2929,11.7071 L8,9.41421 L5.70711,11.7071 C5.31658,12.0976 4.68342,12.0976 4.29289,11.7071 C3.90237,11.3166 3.90237,10.6834 4.29289,10.2929 L6.58579,8 L4.29289,5.70711 C3.90237,5.31658 3.90237,4.68342 4.29289,4.29289 Z"/>
                </svg>

               </span>
             </li>
           ))}
        </ul>

    </div>
  )
}
