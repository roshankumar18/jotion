'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { useScrollTop } from '../../../hooks/use-scroll-top'
import Logo from './logo'
import { ModeToggle } from '../../../components/ui/mode-toggle'
import { useConvexAuth } from 'convex/react'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import Link from 'next/link'
const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const scrolled = useScrollTop()
  return (
    <div className={cn('z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex w-full p-6 items-center',
      scrolled && 'border-b shadow-sm')}>
      <Logo />
      <div className=" md:justify-end justify-between w-full flex items-center gap-x-2">
      {isLoading && (
          <Spinner />
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode='modal'>
              <Button variant={'ghost'}  size='sm'>
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button size='sm'>
                Get Jotion Free
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">
                Enter Jotion
              </Link>
            </Button>
            <UserButton
              afterSignOutUrl="/"
            />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar