import useTechnicalTests from "../hooks/useTechnicalTests";
import { useNavigate } from "react-router";

function MyTechnicalTestsPage() {
  const { technicalTests, isLoading, error } = useTechnicalTests();
  const navigate = useNavigate();

  return (
    <div>
      {isLoading ? (
        <p className="m-4">Cargando pruebas técnicas...</p>
      ) : error ? (
        <p className="m-4 text-red-500">Error: {error.message}</p>
      ) : (
        <div className="flex flex-col m-4 p-4 w-fit bg-gray-50 rounded shadow-xl">
          <ul>
            {technicalTests.map((test) => (
              <li key={test.id}>- {test.title}</li>
            ))}
          </ul>
        </div>
      )}
  
      <div className="bg-white w-fit p-2 m-4 rounded hover:border-2 hover:border-black">
        <button onClick={() => navigate("/resources/technical-test/create")}>
          Crear prueba
        </button>
      </div>
    </div>
  );
}

export default MyTechnicalTestsPage;
