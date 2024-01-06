'use client'
import React from 'react'
import {cn} from '@/lib/utils'
import { useScrollTop } from '../../../hooks/use-scroll-top'
import Logo from './logo'
import { ModeToggle } from '../../../components/ui/mode-toggle'
const Navbar = () => {
    const scrolled = useScrollTop()
  return (
    <div className={cn('z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex w-full p-6 items-center',
    scrolled && 'border-b shadow-sm')}>
        <Logo/>
        <div className=" md:justify-end justify-between w-full flex items-center gap-x-2">
            <ModeToggle/>
        </div>
    </div>
  )
}

export default Navbar