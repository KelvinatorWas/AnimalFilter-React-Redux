import { AnimalForm } from "../AnimalForm/AnimalForm";

type AnimalData = {
  name:string;
  image:string;
};

localStorage.setItem("animals", JSON.stringify([]))

const checkData = (dataLocation:string) => {
  const data = localStorage.getItem(dataLocation);

  if (!data) return [];

  return JSON.parse(data);
};

export const AnimalManager = () => {
  const allAnimals: AnimalData[] = checkData("animals");  

  return (
    <>
    <AnimalForm />
    {!allAnimals.length ? <h3>No Animals</h3> :
     <h3>Animals :)</h3>
    }
    </>
  );
};
