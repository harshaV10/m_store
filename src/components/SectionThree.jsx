import React, { useState } from 'react'
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export const SectionThree = () => {
  

  const [file, setFile] = useState([]);
  
  const navigate = useNavigate();


  const handleFile = (e) => {
    const files = e.target.files;
    console.log(files);
    const selectedImages = [];

    for(let i=0; i < files.length; i++){
      selectedImages.push(files[i])
    }

    setFile(selectedImages);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if(file.length > 0) {
      const formData = new FormData();
      for(let i =0; i < file.length; i++){
        formData.append("images", file[i])
      }
    }
    navigate('/Product')
  }
  console.log(file, "dajhb");

  return (
    <form
      onSubmit={handleSubmit}
      className='w-[90%] mt-8 flex flex-col items-center'
    >
      <div>
        <label>
          <p className='px-4 py-2 text-center bg-secondary rounded-sm mb-8 text-white cursor-pointer'>
            Upload Image
          </p>
          <input 
          type="file" 
          multiple
          accept='image/*'
          className='hidden' 
          onChange={handleFile} 
          />
          </label>
      </div>
      {file?.length > 0 && (
        <div className='relative w-[60%] h-60 mb-4'>
            {file?.map((image, index) => (
              <img
               src={URL.createObjectURL(image)} 
               alt=""
               className={`w-full h-[80%] rounded-md shadow-md absolute ${index === file.length -1 ? "ml-8 mt-6" : ""}`}
              />
            ))}
        </div>
        )}

      <Button title={"Submit"} />
    </form>
  )
}
