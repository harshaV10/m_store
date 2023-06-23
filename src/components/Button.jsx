import React from 'react'

export const Button = ({title, onClick}) => {
  
    const handleButton = () => {
        onClick()
    }

  
    return (
        <button 
        className='w-28 h-10 bg-secondary text-white text-lg tracking-wider rounded-sm'
        type='submit'
        >
            {title}
        </button>
  )
}
