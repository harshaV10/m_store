import React from 'react';
import {MdArrowBack} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
 

    const navigate= useNavigate();

    const handleGoBack =() => {
        navigate(-1)
    }
 
 
    return (
    <div
        className='p-2 rounded-full border-2 border-secondary'
        onClick={handleGoBack}
    >
        <MdArrowBack className='text-secondary scale-125 cursor-pointer' />
    </div>
  )
}
