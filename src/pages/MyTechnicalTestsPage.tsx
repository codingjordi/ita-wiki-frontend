import TechnicalTestFilter from "../components/technical-test/TechnicalTestFilter";
import TechnicalTestList from "../components/technical-test/TechnicalTestList";
import useTechnicalTests from "../hooks/useTechnicalTests";

function MyTechnicalTestsPage() {
  const { technicalTests, isLoading, error } = useTechnicalTests();

  if (isLoading) {
    return <p className="m-4">Cargando pruebas técnicas...</p>;
  }

  if (error) {
    return <p className="m-4 text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="flex gap-4 bg-white rounded-lg p-4 m-4 shadow-xl justify-between">
      <TechnicalTestFilter />
      <TechnicalTestList technicalTests={technicalTests} />
    </div>
  );
}

export default MyTechnicalTestsPage;
