"use client"
import React, { JSX } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle:string
}

const SidebarMenuItems = ({path, icon, title, subtitle}: Props) => {

  const pathName = usePathname();
 

  return (
    <> 
      <div id="nav" className="w-full px-6">
        <Link
          href={path}
          className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3   hover:bg-white/20 ${pathName === path  && 'bg-blue-600  transition ease-linear duration-150 focus:bg-blue-600' }`}
        >
          <div>
            {icon}
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-5 text-white">
              {title}
            </span>
            <span className="text-sm text-white/50 hidden md:block">
              {subtitle}
            </span>
          </div>
        </Link>

      </div>
    </>
  )
}

export default SidebarMenuItems