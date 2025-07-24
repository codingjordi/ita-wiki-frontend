import { TechnicalTest } from "../../types/TechnicalTest";
import TechnicalTestCard from "./TechnicalTestCard";

interface TechnicalTestListProps {
  technicalTests: TechnicalTest[];
}

const TechnicalTestList = ({ technicalTests }: TechnicalTestListProps) => {
  return (
    <div className="w-2/3 flex flex-col m-4">
      <h2 className="text-2xl font-bold mb-8">Pruebas técnicas</h2>
      <ul className="flex flex-col gap-4">
        {technicalTests.map((test) => (
          <TechnicalTestCard key={test.id} test={test} />
        ))}
      </ul>
    </div>
  );
};

export default TechnicalTestList;
