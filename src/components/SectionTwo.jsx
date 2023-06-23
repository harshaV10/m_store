import React, {useState} from 'react';
import { Button } from './Button';

export const SectionTwo = ({sectionTwoData, handleSubmit}) => {


  const [sectionTwo, setSectionTwo] = useState({
        url:"",
        title: "",
        keyword:"",
        description: ""
    });
  const [validationError, setValidationError] = useState(null);


  const handleInuptChange = (e) => {
        const { name, value } = e?.target;
        setSectionTwo((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const submitForm = (e) => {
        e.preventDefault();
        const isFieldEmpty = Object.values(sectionTwo).some((value) => value === "");
        if (isFieldEmpty) {
          setValidationError("Please fill in all the fields");
        } else {
          console.log("Validation 2 successful", sectionTwo);
          setValidationError(null);
          handleSubmit()
        }
    }


  return (
    <form 
      onSubmit={submitForm}
      className='w-[90%] mt-8 flex flex-col items-center'>
          {sectionTwoData?.map((data) => (
              <div className='relative flex justify-between w-[75%] h-10 items-center mb-8'>
                  <label 
                      htmlFor=""
                      className='w-40 text-left text-lg'
                  >
                      {data?.title}
                  </label>
                  <input 
                  type="text"
                  name={data?.value}
                  placeholder={data?.placehoder}
                  id={data?.value}
                  onChange={handleInuptChange}
                  className={`w-52 h-10 px-4 rounded-md focus:outline-none ${data?.value === "productCode"  ? "border-2 border-red-300" : ""}`} 
                  />
              </div>
              ))}
              {validationError ? 
              <p className='text-red-500 mb-2 -mt-2 text-center'>{validationError}</p> 
              : null}
              <Button title={"Next"}/>
    </form>
  )
}
