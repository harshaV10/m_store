import React, { useEffect } from 'react';
import { MdClose } from "react-icons/md";
import { Menu } from '../constants/NavMenu';
import { useNavigate } from 'react-router-dom';

export const Sublinks = ({menu, onclose, navType}) => {


    const navigate = useNavigate();

    const handleClose = () => {
        onclose()
    }

    const handleNavigate = () => {
        navigate("/Product");
        onclose();
    }
    

  return (
    <>
        <div className={`flex flex-col items-center z-20 ${navType === "Big" ? "w-[40rem]" : "w-80"} h-screen bg-tertiary`}>
            <section className='flex justify-between items-center w-[90%] mt-6  text-secondary'>
                <h2 
                    className='text-lg font-semibold'
                >
                    {menu}
                </h2>
                <MdClose className='scale-150 cursor-pointer' onClick={handleClose}/>
            </section>
            <section className='w-[90%] h-5/6 mt-8 overflow-y-auto'>
                <div className={`${navType === "Big" ? "grid grid-cols-2 gap-6" : "flex flex-col" }`}>
                    {Menu?.map((data, index) => (
                        (data?.menu === menu) ?
                            Array.isArray(data.links) && (
                                data?.links.map((submenu) => (
                                    <div className='w-[90%] mt-4'>
                                     <h5 
                                        className='font-bold text-secondary/80'
                                     >
                                        {submenu.title}
                                    </h5>
                                      {submenu?.sublinks?.map((links, index) => (
                                        <p 
                                            onClick={handleNavigate}
                                            className='text-black cursor-pointer hover:text-secondary mt-4 transition duration-300'
                                        >{links}</p>
                                      ))}  
                                    </div>
                            ))
                            )
                            :
                            null
                    ))}
                </div>
            </section>
        </div>
    </>
  )
}
