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
    case 3:
      return (
        <TextAreaQuestion
          answerValue={answerValue}
          content={content}
        />
      );
    case 4:
      console.log(typeQuestion, answerValue, mandatory, content, itens)
      return (<UniqueSelect
        answerValue={answerValue}
        mandatory={mandatory}
        content={content}
        options={itens}
      />)
    case 5:
      console.log(typeQuestion, answerValue, mandatory, content, itens)
      return (<RadiosSelect
        answerValue={answerValue}
        content={content}
        mandatory={mandatory}
        options={itens}
      />)
    case 6:
      console.log(typeQuestion, answerValue, mandatory, content, itens)
      return <MultipleSelect
        answerValue={answerValue}
        mandatory={mandatory}
        content={content}
        options={itens}
      />
    default:
      return null;
  }
};

export default RenderQuestion;
