const FormComponent = ({ answers }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-4">Pesquisa de Satisfação</h2>
                <form>
                    <div className="mb-4">
                      {/* Answers */}  
                    </div>
                    <button type="submit" className="bg-blue-500 text-white m-2 p-2 rounded-md hover:bg-blue-600">Enviar Fake Post</button>
                    <button type="submit" className="bg-blue-500 text-white m-2 p-2 rounded-md hover:bg-blue-600">Enviar Erro </button>
                    <button type="submit" className="bg-blue-500 text-white  m-2 p-2 rounded-md hover:bg-blue-600">Enviar Sucesso</button>
                </form>
            </div>
        </div>
    );
};

export async function getServerSideProps() {
    const response = await fetch('');
    const answers = await response.json();

    return {
        props: {
            answers
        }
    }
}

export default FormComponent;