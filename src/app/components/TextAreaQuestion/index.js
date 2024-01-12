'use client'
import React, { useState } from 'react'

const TextAreaQuestion = ({answerValue, mandatory, content }) => {
    const [answer, setAnswer] = useState()
    const handleTextChange = (event) => {
        setAnswer(event.target.value);
      };
    
      return (
        <div>
          <p>{content}</p>
          <input
            type="text"
            value={answer}
            onChange={handleTextChange}
            placeholder="Digite sua resposta aqui"
          />
        </div>
      );
}

export default TextAreaQuestion