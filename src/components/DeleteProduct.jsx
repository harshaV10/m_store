import React from 'react'

export const DeleteProduct = ({item, onDelete}) => {

  const handleDelete = () => {
    onDelete();
  }


  return (
    <div className='absolute flex justify-center items-center bg-slate-300/50 text-black w-screen h-screen rounded-sm shadow-xl'>
        <div className='flex flex-col justify-center items-center w-[40rem] h-72 bg-primary rounded-lg shadow-xl'>
          <p>Are you sure you want to delete this {item}</p>
          <div className='flex justify-around mt-8 w-[70%]'>
            <button 
            className='px-8 py-2 bg-tertiary text-white tracking-wider rounded-sm'
            onClick={handleDelete}
            >
              No
            </button>
            <button
            className='px-8 py-2 bg-secondary text-white tracking-wider rounded-sm'
            onClick={handleDelete}
            >
              Yes
            </button>
          </div>
        </div>
    </div>
  )
}
