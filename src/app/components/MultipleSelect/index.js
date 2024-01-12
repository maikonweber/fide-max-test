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
      <p>{content}</p>
      {options.map((option) => (
        <label key={option.description}>
          <input
            type="checkbox"
            value={option.description}
            checked={answerValue.includes(option.description)}
            onChange={() => handleCheckboxChange(option.description)}
          />
          {option.description}
        </label>
      ))}
    </div>
  );
};

export default MultipleSelect;