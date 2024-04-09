import { navLinks } from '@/lib/constants'
import React from 'react'

const LestSideBar = () => {
  return (
    <div className='h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-blue-2 shadow-xl max-lg:hidden'>
        <img src="/logo.png" alt='logo' width={150} height={70} />

        <div className='flex flex-col gap-12'>
            {navLinks.map((link) => (
                <Link href={link.url} key={link.label}></Link>
            ))}

        </div>
    </div>
  )
}

export default LestSideBar