import { useState } from "react";

function TechincalTestsListPage() {


    const [ techTests, setTechTests] = useState([]);

    const getTechTestList = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/technicaltests`);

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.json();
            console.log(data);

        } catch (err) {

        }
    }

    return (
        <div>

        </div>
    )
}

export default TechincalTestsListPage