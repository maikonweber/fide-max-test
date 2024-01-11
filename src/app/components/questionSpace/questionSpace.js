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
      </div>
    </div>
  );
};

export default RenderQuestion;
