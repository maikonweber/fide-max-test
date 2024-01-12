'use client'
import React, { useState } from 'react';

const FixedRadios = ({answerValue, mandatory, content}) => {
    const [fixedRadios, setFixedRadios] = useState(0)
    const handleRadioChange = (event) => {
        const selectedValue = parseInt(event.target.value, 10);
        setFixedRadios(selectedValue);
      };
    
      return (
        <div className="max-w-lg mx-auto flex flex-col items-start justify-center mb-4"> 
          <h2 className='font-bold text-2xl mb-4'> Titulo da pegunta fica  aqui  </h2>
          <p className='mb-4'>{content}</p>
          <div className="flex flex-row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
           
           <label key={value} className='mr-10 flex flex-col'>
              <input
                type="radio"
                value={value}
                checked={fixedRadios === value}
                onChange={handleRadioChange}
              />
              {value}
            </label>
          
          ))}
          </div>
        </div>
      );
}

export default FixedRadios