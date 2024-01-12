import React, { useState } from 'react';

const MultipleSelect = ({ value, mandatory, content, options }) => {
  // Função para lidar com a mudança de valor das caixas de seleção
  const [answerValue, setAnswerValue] = useState([])
  
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
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={answerValue}
            onChange={() => handleCheckboxChange(option)}
          />
          {option.description}
        </label>
      ))}
    </div>
  );
};

export default MultipleSelect;
