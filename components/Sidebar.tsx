import Image from "next/image";
import { IoAddCircleSharp, IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";
import SidebarMenuItems from "./SidebarMenuItems";

const menuItems= [{
  path: "/dashboard/main",
  icon: <IoBrowsersOutline  size={40}/>,
  title: "Dashboard",
  subtitle: "Data Overview",
}, {
  path: "/dashboard/counter",
  icon: <IoCalculator size={40}/>,
  title: "Counter",
  subtitle: "Contador client Side",
},{
  path: "/dashboard/pokemon",
  icon: <IoAddCircleSharp size={40}/>,
  title: "Pokemon",
  subtitle: "Api pokemon",
}]

const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          <span className="flex gap-2 items-center text-blue-500">
            <IoLogoReact /> Dash{" "}
          </span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src={
                "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              }
              width={40}
              height={40}
              alt="Imagen de dashboard"
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Arnedo Alejandro
          </span>
        </a>
      </div>
      {
        menuItems.map((item)=>(
          <SidebarMenuItems key={item.path} path={item.path} icon={item.icon} title={item.title} subtitle={item.subtitle}/>
        ))
      }
    </div>
  );
};

export default Sidebar;
