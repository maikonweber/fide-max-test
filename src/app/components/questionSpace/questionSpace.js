// components/SatisfactionSurvey.js
import React from 'react';

const RenderQuestion = ({ typeQuestion, answerValue, mandatory, content, itens }) => {
  console.log(typeQuestion)
  return (
    <div>
      {typeQuestion}
      {answerValue}
      {mandatory}
      {content}
      {itens}
    </div>
  )
  };

export default RenderQuestion;
