import React from 'react'

export const Demo = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-primary'>
        <div className='flex flex-col justify-center items-center w-[30rem] h-72 bg-tertiary rounded-md shadow-lg'>
            <li className='text-start mb-4 w-[70%] font-semibold'>
                This is a Demo page and all the link in the Nav bar is redirected to Product page
            </li>
            <li className='text-start mb-4 w-[70%] font-semibold'>
                In Product pageyou can view list of Products, add them, delete them and edit
            </li>
            <li className='text-start mb-4 w-[70%] font-semibold'>
                The Mobile View is not yet made for this page, so enjoy the web view
            </li>
        </div>   
    </div>
  )
}
