"use client"
import { useAppDispatch, useAppSelector } from "@/store"
import { addOne, extractOne, validCountState } from "@/store/counter/counterSlice"
import { useEffect } from "react"


interface Props {
  value:number
}
const CartCounter = ({value = 0 }:Props) => {

  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(validCountState(value))
  }, [dispatch, value])



  return (
    <>   
      <span className="text-5xl">{count}</span>
      <div className="flex gap-5 ">
        <button 
          className="p-2 bg-black/50 rounded-lg w-16 text-white font-semibold shadow-black/40 shadow-md transition-all duration-200 hover:bg-black/60  hover:shadow-none"
          onClick={ () => dispatch(extractOne())}
        >
        -1
        </button>
        <button 
          className="p-2 bg-black/50 !rounded-lg !w-16 text-white !font-semibold !shadow-md transition-all duration-200 hover:bg-black/60 hover:shadow-none"
          onClick={ () => dispatch(addOne())}
        >
          +1
        </button>
      </div>

    </>
  )
}

export default CartCounter