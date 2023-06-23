import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { Button } from '../components/Button';

export const EditProduct = () => {

    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: data?.name || '',
        productCode: data?.productCode || '',
        price: data?.price || '',
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFieldEmpty = Object.values(formData).some((value) => value === "");
        if( isFieldEmpty ){
            setError("Please fill all the fields")
        } else {
            console.log('submitting form', formData);
            // navigate(-1)
        }
    }






  return (
    <div className='relative flex flex-col justify-center items-center h-screen bg-add-product-bg bg-cover bg-no-repeat bg-center'>
        <div className='absolute flex items-center pl-10 top-[1rem] w-full h-20'>
            <BackButton />
        </div>
        <div className='flex flex-col items-center absolute md:w-[40rem] w-[90%] h-[65%] bg-primary rounded-lg shadow-lg'>
            <h1 className='text-lg font-bold text-secondary mt-4'>Edit Product</h1>
                <form 
                onSubmit={handleSubmit}
                className='w-[90%] mt-8 flex flex-col items-center'>
                    <div className='relative flex justify-between w-[75%] h-10 items-center mb-8'>
                      <label 
                          htmlFor=""
                          className='w-40 text-left text-lg'
                      >
                          Name
                      </label>
                      <input 
                      type="text"
                      name="name"
                      placeholder="Name"
                      id="name"
                      defaultValue={data?.name}
                      onChange={handleChange}
                      className={`w-52 h-10 px-4 rounded-md focus:outline-none`} 
                      />
                    </div>
                    <div className='relative flex justify-between w-[75%] h-10 items-center mb-8'>
                        <label 
                            htmlFor=""
                            className='w-40 text-left text-lg'
                        >
                            Product Code
                        </label>
                        <input 
                        type="text"
                        name="productCode"
                        placeholder="Product Code"
                        id="productCode"
                        defaultValue={data?.productCode}
                        onChange={handleChange}
                        className={`w-52 h-10 px-4 rounded-md focus:outline-none`} 
                        />
                    </div>
                    <div className='relative flex justify-between w-[75%] h-10 items-center mb-20'>
                        <label 
                            htmlFor=""
                            className='w-40 text-left text-lg'
                        >
                            Price
                        </label>
                        <input 
                        type="text"
                        name="price"
                        placeholder="Price"
                        id="pirce"
                        defaultValue={data?.price}
                        onChange={handleChange}
                        className={`w-52 h-10 px-4 rounded-md focus:outline-none`} 
                        />
                    </div>
                    {error ?
                        <p className='text-red-500 mb-2 -mt-2 text-center'>{error}</p>
                    : null}
              <Button title={"Next"}/>
            </form>
        </div>
    </div>
  )
}
