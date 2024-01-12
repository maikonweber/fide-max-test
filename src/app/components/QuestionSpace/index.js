'use client'

import React, { useState } from 'react';
import StarQuestion from '../StarQuestion';
import FixedRadios from '../FixedRadios';
import TextAreaQuestion from '../TextAreaQuestion';
import UniqueSelect from '../UniqueSelect';
import MultipleSelect from '../MultipleSelect';
import RadiosSelect from '../RadiosSelect';
const RenderQuestion = ({ typeQuestion, answerValue, mandatory, content, itens }) => {
  const [rating, setRating] = useState(0);

  switch (typeQuestion) {
    case 1:
      return (<StarQuestion
        answerValue={answerValue}
        mandatory={mandatory}
        content={content}
        rating={rating}

      />
      );
    case 2:
      return (<FixedRadios
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
        <TextAreaQuestion
          answerValue={answerValue}
        >

        </TextAreaQuestion>
      );
    case 4:
      return (<UniqueSelect>

      </UniqueSelect>)
    case 5:
      return (<RadiosSelect>

      </RadiosSelect>)
    case 6:
      return <MultipleSelect>
        
      </MultipleSelect>
    // <div>
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
