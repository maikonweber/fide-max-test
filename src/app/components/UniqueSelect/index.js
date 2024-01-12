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
            <p>{content}</p>
            <select value={answerValue} onChange={handleSelectChange}>
                <option value="" disabled hidden>
                    Selecione uma opção
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