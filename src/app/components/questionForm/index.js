import RenderQuestion from "../questionSpace/questionSpace";

const FormComponent = ({ data }) => {
    return (
        <div className="flex flex-col items-center justify-start h-screen">
            <h2 className="text-2xl font-bold mb-4">Pesquisa de Satisfação</h2>
            <div className="bg-white p-8 shadow-md rounded-md"> 
                <form>
                    {data.itens.forEach((el, index) => {
                        return <RenderQuestion 
                        key={index}
                        typeQuestion={el.typeQuestion} 
                        answerValue={el.answerValue} 
                        mandatory={el.mandatory} 
                        content={el.content} 
                        itens={el.itens}
                        />
                    })}
                    <button type="submit" className="bg-blue-500 text-white m-2 p-2 rounded-md hover:bg-blue-600">Enviar Fake Post</button>
                    <button type="submit" className="bg-blue-500 text-white m-2 p-2 rounded-md hover:bg-blue-600">Enviar Erro </button>
                    <button type="submit" className="bg-blue-500 text-white  m-2 p-2 rounded-md hover:bg-blue-600">Enviar Sucesso</button>
                </form>
            </div>
        </div>
    );
};


export default FormComponent;