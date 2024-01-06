import Image from 'next/image'
import React from 'react'

const Heroes = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
        <div className='flex items-center'>
            <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]
            md:h-[400px] md:w-[400px]'>
                <Image src='/documents.png' alt='documents' fill  className='object-contain dark:hidden'/>
                <Image src='/documents-dark.png' alt='documents' fill  className='object-contain hidden dark:block'/>
            </div>
            <div className='relative hidden md:block h-[400px] w-[400px]'>
                <Image src={'/reading.png'} alt='reading' fill className='object-contain'/>
                <Image src='/reading-dark.png' alt='documents' fill  className='object-contain hidden dark:block'/>
            </div>
        </div>
    </div>
  )
}

export default Heroes