"use client";

import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";


const Header = () => {

   // Add User Session
   const { user } = useKindeBrowserClient();


  return (
    <div className="flex justify-between items-center border-b border-slate-200 p-4 shadow">
      <div></div>
      <div>
        <Image 
        className="rounded-full"
        src={user?.picture || "/user_default.svg"} 
        alt="logo" 
        width={35} 
        height={35} />
      </div>
    </div>
  )
}

export default Header