import React from 'react'
import Heading from './_components/header'
import Heroes from './_components/heroes'

const MarketingPage = () => {
  return (
    <div className='min-h-full flex flex-col'>
        <div className='flex flex-col items-center justify-center md:justify-start
        text-center gap-y-8 px-6 pb-10 flex-1'>
            <Heading />
            <Heroes/>
        </div>
    </div>
  )
}

export default MarketingPage