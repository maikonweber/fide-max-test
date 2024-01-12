
import React from 'react';
import StarQuestion from '../StarQuestion';
import FixedRadios from '../FixedRadios';
import TextAreaQuestion from '../TextAreaQuestion';

const RenderQuestion = ({ typeQuestion, answerValue, mandatory, content, itens }) => {
 
  switch (typeQuestion) {
    case 1:
      return ( <StarQuestion 
        answerValue={answerValue} 
        mandatory={mandatory} 
        content={content}
    
        />
      );
    case 2:
      return ( <FixedRadios 
        answerValue={answerValue} 
        mandatory={mandatory} 
        content={content}
       
      />)
    //     <div>
    //       <p>{content}</p>
    //       {/* Implemente a lógica para renderizar perguntas com rádios de 1 a 10 aqui */}
    //     </div>
  
    case 3:
       return (
        <TextAreaQuestion>

        </TextAreaQuestion>
        );
    // case 4:
    //   return (
    //     <div>
    //       <p>{content}</p>
    //       {/* Implemente a lógica para renderizar perguntas de seleção única tipo select aqui */}
    //     </div>
    //   );
    // case 5:
    //   return (
    //     <div>
    //       <p>{content}</p>
    //       {/* Implemente a lógica para renderizar perguntas de seleção única tipo radio aqui */}
    //     </div>
    //   );
    // case 6:
    //   return (
    //     <div>
    //       <p>{content}</p>
    //       {/* Implemente a lógica para renderizar perguntas de seleção múltipla aqui */}
    //     </div>
    //   );
    default:
      return null;
  }
};

export default RenderQuestion;
