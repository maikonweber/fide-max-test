'use client'
import React, { useState } from 'react'

const Star = ({ selected, onSelect }) => {
    return (
        <span
            className={`cursor-pointer text-2xl ${selected ? 'text-yellow-500' : 'text-gray-300'
                }`}
            onClick={onSelect}
        >
            
        </span>
    );
};

const StarQuestion = ({ answerValue, mandatory, content, rating, setRating }) => {
    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarClick = (starIndex) => {
        setSelectedStars(starIndex + 1);
        setRating(starIndex + 1); // Atualize a pontuação no componente pai, se necessário
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

    return <>
        <div className="max-w-lg mx-auto flex flex-col item-center justifiy-center ">
            <p>{content}</p>
            <div className="ml-4">{renderStars()}</div>
        </div>
    </>
}

export default StarQuestion