import { SimpleWidget } from '@/components/dashboard/SimpleWidget'
import WidgetGrid from '@/components/dashboard/WidgetGrid';
import { GrLinkDown } from 'react-icons/gr';


export const metadata = {
  title: 'Dashboard administrador',
  description: 'Dashboard administrador',
};
const MainPage = () => {
  return (
    <div className="p-2">
      <p className='text-2xl font-bold'>Dashoboard</p> 
      <span>Informacion Pokemon</span>
        <WidgetGrid/>
    </div>
  )
}

export default MainPage