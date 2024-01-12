'use client'
import React, { useState } from 'react';

const RadiosSelect = ({ answerValue, content, mandatory, options }) => {
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div>
      <p>{content}</p>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleRadioChange}
          />
          {option.description}
        </label>
      ))}
      {mandatory && !selectedOption && <p style={{ color: 'red' }}>Esta questão é obrigatória.</p>}
    </div>
  );
};

export default RadiosSelect;
