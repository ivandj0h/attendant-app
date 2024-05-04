"use client";

import Image from "next/image";
import { sideMenu } from "@/data/side-menu";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const SideNav = () => {
  // Add User Session
  const { user } = useKindeBrowserClient();

  return (
    <div className="border shadow-md h-screen p-5">
      <Image src={'/logo.svg'} 
        width={180} 
        height={50} 
        alt='logo' />

      <hr className="my-5" />
      {sideMenu.map((menu, i) => (
        <h3
          key={i}
          className="flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-primary hover:text-white cursor-pointer rounded-lg my-2"
        >
          <menu.icon />
          {menu.name}
        </h3>
      ))}

      <div className="flex gap-2 items-center bottom-5 fixed p-4">
        <Image
          src={user?.picture || "/user_default.svg"}
          alt="user"
          className="rounded-full"
          width={35}
          height={35}
        />
        <div>
          <h2 className="text-sm font-semibold">
            {user?.given_name} {user?.family_name}
          </h2>
          <h2 className="text-xs text-slate-400">{user?.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
