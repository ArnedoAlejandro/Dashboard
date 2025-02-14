
import { Metadata } from "next"
import CartCounter from "@/shopinCart/components/CartCounter"

export const metadata: Metadata = {
  title: "Shoping Cart",
  description: "Contador de clicks",
}


const CounterPage = () => {


  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center ">
      <span className="text-4xl">CounterPage</span>
   
      <CartCounter value={10}/>
    </div>
  )
}

export default CounterPage