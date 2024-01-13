import React, { useState } from 'react';

const RadiosSelect = ({ answerValue, content, mandatory, options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div>
      <p className='font-bold'>{content}</p>
      {options.map((option) => (
        <label className="flex-row mr-4" key={option.description}>
          <input
            type="radio"
            value={option.description}
            checked={selectedOption === option.description}
            onChange={handleRadioChange}
            className="mr-2 mb-4"
          />
          {option.description}
        </label>
      ))}
      {mandatory && !selectedOption && <p style={{ color: 'red' }}>Esta questão é obrigatória.</p>}
    </div>
  );
};

export default RadiosSelect;

