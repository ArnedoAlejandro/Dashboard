"use client"
import { useAppSelector } from '@/store';
import { SimpleWidget } from './SimpleWidget'


export const metadata = {
 title: 'Dasboard grid',
 description: 'Dasboard grid',
};


const WidgetGrid = () => {

  const isCart = useAppSelector(state => state.counter.count)

  return (
    <div className='flex flex-wrap gap-4 justify-center p-2 items-center m-5'>
      <SimpleWidget title={isCart.toString()} subtitle="Subtitulo" label={"label"}/>
    </div>  
  )
}

export default WidgetGrid