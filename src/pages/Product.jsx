import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteProduct } from '../components/DeleteProduct';
import { Table } from '../components/Table';


export const Product = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [isDelete, setIsDelete] = useState(false);
    const [itemToDelete, setItemToDelete] = useState("");



    const tableData = [
        {name: "Lap", productCode: "LSA-123", price: "200$"},
        {name: "Phone", productCode: "LSA-339", price: "20$"},
        {name: "TV", productCode: "LSA-385", price: "150$"},
        {name: "Mic", productCode: "LSA-3", price: "21$"},
        {name: "Computer", productCode: "LSA-13", price: "280$"},
        {name: "Microscope", productCode: "LSA-133", price: "499$"},
        {name: "Lap", productCode: "LSA-128", price: "200$"},
        {name: "Lap", productCode: "LSA-128", price: "200$"},
        {name: "Lap", productCode: "LSA-128", price: "200$"},
        {name: "phone", productCode: "LSA-128", price: "200$"},
        {name: "Lap", productCode: "LSA-128", price: "200$"},
        {name: "Lap", productCode: "LSA-128", price: "200$"},
        {name: "Microscope", productCode: "LSA-133", price: "499$"},
    ]

    const indexofLast = currentPage * 10;
    const indexOfFirst = indexofLast - 10;
    const totalPages = Math.ceil(tableData.length / 10);
    const currentItems = tableData?.slice(indexOfFirst, indexofLast)

    const navigate = useNavigate();

    const handleDeleteClose = () => {
        setIsDelete(false)
    }

    const handleDeleteOpen = (e) => {
        setIsDelete(true)
        setItemToDelete(e)
    }


  return (
        <div className='relative flex flex-col justify-start items-center h-screen bg-add-product-bg bg-cover bg-no-repeat bg-center'>
            <div className='flex justify-end mb-4 w-[90%] h-10 mt-10'>
                <button 
                    className='px-4 py-1 bg-secondary text-white rounded-sm hover:bg-secondary/70 transition duration-200'
                    onClick={() => navigate('/Add-new-product')}
                >
                    Add Product
                </button>
            </div>
            <Table tableData={tableData} onDelete={handleDeleteOpen} />
            {isDelete && 
            <DeleteProduct item={itemToDelete} onDelete={handleDeleteClose}/>
            }
        </div>
  )
};
