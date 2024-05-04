"use client"


import React from 'react'
import Image from 'next/image';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

function Header() {
  const {user}=useKindeBrowserClient();
  return (
    <div className='p-4 shadow-sm border flex justify-between'>
        <div>

        </div>
        <div className='bg-red-500 p-3 rounded-lg text-white hover:bg-red-600'>
        <LogoutLink>Log out</LogoutLink>
        </div>
    </div>
  )
}

export default Header