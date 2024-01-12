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
          <p>{content}</p>
          {/* Mapear os valores fixos de 1 a 10 para criar os rádios */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <label key={value}>
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
      );
}

export default FixedRadios