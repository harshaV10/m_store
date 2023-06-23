import React, {useState} from 'react';
import { Button } from './Button';



export const SectionOne = ({sectionOneData, handleSubmit}) => {


    
    const [sectionOne, setSectionOne] = useState({
        name:"",
        productCode: "",
        price:"",
        description: ""
    });
    const [validationError, setValidationError] = useState(null);
    const [codeError, setCodeError] = useState(null);



    
    const handleInuptChange = (e) => {
        const { name, value } = e?.target;
        setSectionOne((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const submitForm = (e) => {
        e.preventDefault();
        const codeValidate = /^(?=.*[A-Z])(?=.*[0-9])(?=.*-).{8,}$/;
        const isFieldEmpty = Object.values(sectionOne).some((value) => value === "");
        if (isFieldEmpty) {
          setValidationError("Please fill in all the fields");
        } else if (!codeValidate.test(sectionOne.productCode)) {
          setCodeError("Product Code should contain at least 8 characters with a capital letter, a hyphen, and numbers.");
        } else {
          console.log("Validation successful");
          setValidationError(null);
          setCodeError(null);
          handleSubmit()
        }
    }


  return (
    <form 
      onSubmit={submitForm}
      className='w-[90%] mt-8 flex flex-col items-center'>
          {sectionOneData?.map((data) => (
              <div className='relative flex justify-between w-[75%]  h-10 items-center mb-8'>
                  <label 
                      htmlFor=""
                      className='w-40 text-left text-sm sm:text-md md:text-lg'
                  >
                      {data?.title}
                  </label>
                  <input 
                  type="text"
                  name={data?.value}
                  placeholder={data?.placehoder}
                  id={data?.value}
                  onChange={handleInuptChange}
                  className={`
                  text-sm sm:text-md md:text-lg
                  w-52 h-10 px-4 rounded-md focus:outline-none ${data?.value === "productCode" && codeError ? "border-2 border-red-300" : ""}`} 
                  />
              </div>
              ))}
              {codeError ?
              <p className='text-red-500 mb-2 -mt-2 text-center'>{codeError}</p> :
              validationError ? 
              <p className='text-red-500 mb-2 -mt-2 text-center'>{validationError}</p> 
              : null
              }
              <Button title={"Next"}/>
    </form>
  )
}
