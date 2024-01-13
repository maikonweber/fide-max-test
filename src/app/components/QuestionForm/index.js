'use client'
import RenderQuestion from "../QuestionSpace";
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react';
import Modal from "../Modal";

const FormComponent = ({ data }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [apiData, setApiData] = useState('');

    const handleButtonClick = async (endpoint, method = 'GET') => {
        try {
            let response;
            if (method === 'POST') {
                response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data), // Envie os dados do formulário aqui
                });
            } else {
                response = await fetch(endpoint);
            }

            const result = await response.json();

            // Lógica específica para cada botão
            if (endpoint.includes('survey-post-error')) {
                setApiData(result.error);
            } else if (endpoint.includes('survey-post-success')) {
                setApiData('Dados recebidos com sucesso!');
            } else {
                console.log(result)
                setApiData(`${Object.keys(result)}, Post realizado com Sucesso`);
            }

            setModalVisible(true);
        } catch (error) {
            console.error('Erro na chamada à API:', error);
            setApiData('Erro na chamada à API');
            setModalVisible(true);
        }
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    useEffect(() => {

    }, [apiData])

    return (
        <div className="flex flex-col items-center justify-start h-screen relative bottom-32 ">
            <Modal isOpen={modalVisible} onClose={handleCloseModal}>
                {/* Conteúdo da modal */}
                <p>{apiData}</p>
            </Modal>
            <h2 className="text-white text-3xl font-bold mb-4 md:mr-52">Pesquisa de Satisfação</h2>
            <div className="bg-white w-screen md:w-auto p-8 shadow-md rounded-md">
                <div>
                    {data?.itens.map((el, index) => (
                        <RenderQuestion
                            key={uuidv4()}
                            typeQuestion={el.typeQuestion}
                            answerValue={el.answerValue}
                            mandatory={el.mandatory}
                            content={el.content}
                            itens={el.itens}
                        />
                    ))}
                    <button onClick={() => handleButtonClick('https://jsonplaceholder.typicode.com/posts/', 'POST')} className="bg-blue-500 text-white m-2 p-2 rounded-md hover:bg-blue-600">Enviar Fake Post</button>
                    <button onClick={() => handleButtonClick('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json')} className="bg-blue-500 text-white m-2 p-2 rounded-md hover:bg-blue-600">Enviar Erro </button>
                    <button onClick={() => handleButtonClick('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json')} className="bg-blue-500 text-white m-2 p-2 rounded-md hover:bg-blue-600">Enviar Sucesso</button>
                </div>
            </div>
        </div>
    );
};

export default FormComponent;