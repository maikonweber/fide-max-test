'use client'
import React, { useState } from 'react'
const Star = ({ selected, onSelect }) => {
    return (
        <span
            className={`cursor-pointer text-5xl ml-3 ${selected ? 'text-yellow-500' : 'text-gray-300'
                }`}
            onClick={onSelect}
        >
            ★
        </span>
    );
};

const StarQuestion = ({ answerValue, mandatory, content, rating, setRating }) => {
    const [selectedStars, setSelectedStars] = useState(5);
    console.log(answerValue, mandatory, content)
    const handleStarClick = (starIndex) => {
        setSelectedStars(starIndex + 1);
        // setRating(starIndex + 1); // Atualize a pontuação no componente pai, se necessário
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star
                    key={i}
                    selected={i < selectedStars}
                    onSelect={() => handleStarClick(i)}
                />
            );
        }
        return stars;
    };

    return (
        <div className="max-w-lg mx-auto flex flex-col items-start justify-center mb-4">
            <h2 className='mb-4 font-bold text-2xl'> Titulo da pegunta fica  aqui  </h2>
            <p className="mb-2">{content}</p>
            <div className="">{renderStars()}</div>
        </div>
    );
}

export default StarQuestion;