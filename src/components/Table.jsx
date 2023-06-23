import React, { useState } from 'react';
import {FiEdit} from "react-icons/fi";
import {MdDelete} from "react-icons/md";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import { useNavigate } from 'react-router-dom';



export const Table = ({tableData, onDelete}) => {


    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();

    const indexofLast = currentPage * 10;
    const indexOfFirst = indexofLast - 10;
    const totalPages = Math.ceil(tableData.length / 10);
    const currentItems = tableData?.slice(indexOfFirst, indexofLast)



    const handleNextPage = () => {
        setCurrentPage(currentPage+1)
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const remainingRows = 10 - currentItems.length;
    const emptyRows = Array.from({ length: remainingRows }, (index) => (
      <tr key={`empty-${index}`}>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    ));

    const handleDelete = (e) => {
        onDelete(e);
        console.log(e, 'hhvh');
    }

    const handleEdit = (data) => {
        navigate(`/edit-product/${data.productCode}`, {state: data})
    }


  return (
    <div className='w-[90%] h-[75%] shadow-2xl bg-white'>
        <table className='w-full h-[100%] text-sm xs:text-md md:text-lg'>
            <thead>
                <tr className='h-10 bg-secondary text-white'>
                    <th className='w-[25%] px-4'>Name</th>
                    <th className='w-[25%] px-4 border-l-white border-l-2'>Product Code</th>
                    <th className='w-[20%] px-4 border-l-white border-l-2'>Price</th>
                    <th className='w-[15%] px-4 border-l-white border-l-2'>Edit</th>
                    <th className='w-[15%] px-4 border-l-white border-l-2'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {currentItems?.map((data, index) =>
                    {
                        return (
                            <tr className={`${index % 2 === 0 ? "bg-white" : "bg-primary"}`}>
                                <td className='h-10 px-4 text-center'>{data?.name}</td>
                                <td className='h-10 px-4 text-center'>{data?.productCode}</td>
                                <td className='h-10 px-4 text-center'>{data?.price}</td>
                                <td className='h-10 px-4'>
                                    <FiEdit 
                                        className='w-full cursor-pointer'
                                        onClick={() => handleEdit(data)}
                                    />
                                </td>
                                <td className='h-10 px-4'>
                                    <MdDelete 
                                        className='w-full cursor-pointer'
                                        onClick={() =>handleDelete(data?.name)}
                                    />
                                </td>
                            </tr>
                )})
            }
            {emptyRows}
            </tbody>
        </table>
        {/* Pagination */}
        <div className='flex justify-end w-[100%] h-14 bg-white'>
            <div className='flex justify-between items-center w-40 mr-8'>
                <button
                    disabled={currentPage === 1}
                    onClick={handlePrevPage}
                    className={`${currentPage === 1 ? "cursor-not-allowed" : "hover:bg-secondary"} bg-secondary/40 p-2 rounded-full `}
                    >
                    <GrFormPrevious />
                </button>
                <div>{currentPage}</div>
                <button 
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                    className={`${currentPage === totalPages ? "cursor-not-allowed" : "hover:bg-secondary"} bg-secondary/40 p-2 rounded-full`}
                >
                    <GrFormNext />
                </button>
            </div>
        </div>
    </div>
  )
}
