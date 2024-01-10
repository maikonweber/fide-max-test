const FormComponent = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">Formulário</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Enviar</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default FormComponent;