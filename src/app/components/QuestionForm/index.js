
import RenderQuestion from "../QuestionSpace";
import { v4 as uuidv4 } from 'uuid';

const FormComponent = ({ data }) => {
    
    return (
        <div className="flex flex-col items-center justify-start h-screen relative bottom-32 ">
            <h2 className="text-white text-3xl font-bold mb-4 mr-52">Pesquisa de Satisfação</h2>
            <div className="bg-white p-8 shadow-md rounded-md"> 
                <div>
                    <>
                    {data?.itens.map((el, index) => {
                       return (<RenderQuestion 
                        key={uuidv4()}
                        typeQuestion={el.typeQuestion} 
                        answerValue={el.answerValue} 
                        mandatory={el.mandatory} 
                        content={el.content} 
                        itens={el.itens}
                        />)
                    })}
                    </>
                    <button type="submit" className="bg-blue-500 text-white m-2 p-2 rounded-md hover:bg-blue-600">Enviar Fake Post</button>
                    <button type="submit" className="bg-blue-500 text-white m-2 p-2 rounded-md hover:bg-blue-600">Enviar Erro </button>
                    <button type="submit" className="bg-blue-500 text-white  m-2 p-2 rounded-md hover:bg-blue-600">Enviar Sucesso</button>
                </div>
            </div>
        </div>
    );
};


export default FormComponent;