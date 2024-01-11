// components/SatisfactionSurvey.js
import React from 'react';

const RenderQuestion = ({ typeQuestion, answerValue, mandatory, content, itens }) => {
  console.log("render the method")
  return (
    <div>
      <p>Type Question: {typeQuestion}</p>
      <p>Answer Value: {answerValue}</p>
      <p>Mandatory: {mandatory.toString()}</p>
      <p>Content: {content}</p>
      <div>
        <p>Itens:</p>
        {Array.isArray(itens) ? (
          <ul>
            {itens.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{itens}</p>
        )}
      </div>
    </div>
  );
};

export default RenderQuestion;
