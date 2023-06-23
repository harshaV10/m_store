import React, {useState} from 'react'
import { BackButton } from '../components/BackButton'
import { SectionOne } from '../components/SectionOne';
import { SectionTwo } from '../components/SectionTwo';
import { SectionThree } from '../components/SectionThree';


export const AddProduct = () => {


    const sectionOneData= [
        {title: "Product Name", value: "name", placehoder: "Product Name"},
        {title: "Product Code", value: "productCode", placehoder: "Product Code"},
        {title: "Price", value: "price", placehoder: "Price"},
        {title: "Description", value: "description", placehoder: "Description"},
    ];

    const sectionTwoData= [
        {title: "Url", value: "url", placehoder: "Url"},
        {title: "Title", value: "title", placehoder: "Title"},
        {title: "Keyword", value: "keyword", placehoder: "Keyword"},
        {title: "Description", value: "description", placehoder: "Description"},
    ];


    const [section, setSection] = useState(1);


    const submitFormOne = () => {
        setSection(section + 1);
    }

    const submitFormTwo = () => {
        setSection(section + 2)
        console.log("sad", section);
    }

  return (
    <div className='relative flex flex-col justify-center items-center h-screen bg-add-product-bg bg-cover bg-no-repeat bg-center'>
        <div className='absolute flex items-center pl-10 top-[1rem] w-full h-20'>
            <BackButton />
        </div>
        <div className='flex flex-col items-center absolute md:w-[40rem] w-[90%] h-[75%] bg-primary rounded-lg shadow-lg'>
            <h1 className='text-lg font-bold text-secondary mt-4'>Add a New Product</h1>
                <div className='flex w-[90%] h-10 items-center justify-between mt-4'>
                    <div className='w-[32%] h-2 rounded-md bg-secondary'></div>
                    <div className={`w-[32%] h-2 rounded-md  ${section >= 2 ? "bg-secondary" : "bg-slate-300"}`}></div>
                    <div className={`w-[32%] h-2 rounded-md ${section >=3 ? "bg-secondary" : "bg-slate-300"}`}></div>
                </div>
                {section === 1 ?
                    <SectionOne
                    sectionOneData={sectionOneData}
                    handleSubmit={submitFormOne}
                    />  :
                section === 2 ?
                    <SectionTwo
                    sectionTwoData={sectionTwoData} 
                    handleSubmit={submitFormTwo}
                    /> : 
                section > 3 ?
                    <SectionThree />
                : null
                }
        </div>
    </div>
  )
}
