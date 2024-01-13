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
         className={`flex-row border rounded-3xl p-2 mr-2 mb-8 cursor-pointer ${
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