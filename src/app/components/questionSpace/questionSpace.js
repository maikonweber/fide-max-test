// components/SatisfactionSurvey.js
import React from 'react';

const RenderQuestion = ({ typeQuestion, answerValue, mandatory, content, itens }) => {
  console.log("render the method")
  switch (typeQuestion) {
    case 1:
      return (
        <div>
          <p>{content}</p>
          {/* Implemente a lógica para renderizar perguntas de estrela aqui */}
        </div>
      );
    case 2:
      return (
        <div>
          <p>{content}</p>
          {/* Implemente a lógica para renderizar perguntas com rádios de 1 a 10 aqui */}
        </div>
      );
    case 3:
      return (
        <div>
          <p>{content}</p>
          {/* Implemente a lógica para renderizar perguntas de texto aqui */}
        </div>
      );
    case 4:
      return (
        <div>
          <p>{content}</p>
          {/* Implemente a lógica para renderizar perguntas de seleção única tipo select aqui */}
        </div>
      );
    case 5:
      return (
        <div>
          <p>{content}</p>
          {/* Implemente a lógica para renderizar perguntas de seleção única tipo radio aqui */}
        </div>
      );
    case 6:
      return (
        <div>
          <p>{content}</p>
          {/* Implemente a lógica para renderizar perguntas de seleção múltipla aqui */}
        </div>
      );
    default:
      return null;
  }
};

export default RenderQuestion;
