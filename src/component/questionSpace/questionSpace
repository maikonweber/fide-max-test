// components/SatisfactionSurvey.js
import React from 'react';

const SatisfactionSurvey = ({ itens, answerValue, typeQuestion }) => {
  const renderQuestion = (item, index) => {
    switch (typeQuestion) {
      case 1:
        return (
          <div key={index} className="flex items-center">
            {[...Array(item).keys()].map((star) => (
              <svg
                key={star}
                className={`w-6 h-6 fill-current ${star < answerValue ? 'text-yellow-500' : 'text-gray-400'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2c.2 0 .4 0 .6.1.3.2.5.4.7.6l4.6 4.6 1.4-1.4L13.4 2.6c-.2-.2-.4-.3-.6-.3s-.4.1-.6.3L7.3 8.3 8.7 9.7l4.6-4.6c.2-.2.4-.4.6-.6.2-.2.4-.2.6-.2zM12 15.7L6.3 10l-1.4 1.4L12 18.5l7.1-7.1-1.4-1.4L12 15.7z" />
              </svg>
            ))}
          </div>
        );
      case 2:
        return (
          <div key={index} className="flex items-center">
            {[...Array(10).keys()].map((value) => (
              <label key={value} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-600"
                  value={value + 1}
                  checked={answerValue === value + 1}
                  readOnly
                />
                <span className="ml-2">{value + 1}</span>
              </label>
            ))}
          </div>
        );
      case 3:
        return (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{item}</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={answerValue}
              readOnly
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {itens.map((item, index) => (
        <div key={index} className="mb-8">
          {renderQuestion(item, index)}
        </div>
      ))}
    </div>
  );
};

export default SatisfactionSurvey;
