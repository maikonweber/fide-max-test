'use client';
import React, { useState } from 'react';

const UniqueSelect = ({ startAnswer, mandatory, content, options }) => {
    const [answerValue, setAnswerValue] = useState('');

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setAnswerValue(selectedValue);
    };

    return (
        <div>
            <select  
            className="mt-4 mb-4 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            alue={answerValue} 
            onChange={handleSelectChange}>
                <option className='mt-4 mb-4' value="" disabled hidden>
                    {content}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.description}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default UniqueSelect;