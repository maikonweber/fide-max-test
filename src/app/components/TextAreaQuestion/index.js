'use client'
import React, { useState } from 'react'

const TextAreaQuestion = ({answerValue, mandatory, content }) => {
    const [answer, setAnswer] = useState()
    const handleTextChange = (event) => {
        setAnswer(event.target.value);
      };
    
      return (
        <div>
          <p className='font-bold mb-4'>{content}</p>
          <textarea className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
            type="text"
            value={answer}
            onChange={handleTextChange}
            placeholder="Digite sua resposta aqui"
          />
        </div>
      );
}

export default TextAreaQuestion