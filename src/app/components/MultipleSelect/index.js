'use client'
import React, { useState } from 'react';

const MultipleSelect = ({ value, mandatory, content, options }) => {
  const [answerValue, setAnswerValue] = useState([]);

  const handleCheckboxChange = (option) => {
    const updatedValues = answerValue.includes(option)
      ? answerValue.filter((value) => value !== option)
      : [...answerValue, option];
    setAnswerValue(updatedValues);
  };

  return (
    <div>
      <p className='mb-4 mt-4 font-bold'>{content}</p>
      {options.map((option) => (
        <label
         key={option.description}
         className={`flex-col md:flex-row border rounded-3xl mr-0.5 p-0.5 md:p-2 md:mr-2 md:mb-8 cursor-pointer ${
          answerValue.includes(option.description) ? 'bg-blue-500 text-white' : ''
        }`}
         >
          <input
            type="checkbox"
            value={option.description}
            checked={answerValue.includes(option.description)}
            onChange={() => handleCheckboxChange(option.description)}
            className="hidden"
          />
          {option.description}
        </label>
      ))}
    </div>
  );
};

export default MultipleSelect;