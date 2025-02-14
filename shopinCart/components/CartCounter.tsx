"use client"
import { useState } from "react"

interface Props {
  value:number
}
const CartCounter = ({value = 0 }:Props) => {

  const [count, setCount ] = useState(value)

  const suma = ()=>{
    setCount((statePrev)=>{return statePrev + 1})
  }
  const resta = ()=>{
    if(count === 0) return
    setCount((statePrev)=>{return statePrev -1 })
  }


  return (
    <>   
      <span className="text-5xl">{count}</span>
      <div className="flex gap-5 ">
        <button 
          className="p-2 bg-black/50 rounded-lg w-16 text-white font-semibold shadow-black/40 shadow-md transition-all duration-200 hover:bg-black/60  hover:shadow-none"
          onClick={resta}
        >
        -1
      </button>
      <button 
        className="p-2 bg-black/50 !rounded-lg !w-16 text-white !font-semibold !shadow-md transition-all duration-200 hover:bg-black/60 hover:shadow-none"
        onClick={suma}
      >
        +1
      </button>
      </div>
    </>
  )
}

export default CartCounter