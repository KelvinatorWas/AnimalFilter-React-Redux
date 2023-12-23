import { AnimalForm } from "../AnimalForm/AnimalForm";
import css from './AnimalManager.module.css'
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Animal } from "../Animal/Animal";
import { SortAnimals } from "./hook/sortAnimals";

enum sort {'↑', '↓'};

export const AnimalManager = () => {
  const { animals, animalInEdit, sortMode} = useSelector((state:RootState) => state.animals);
  const handleSort = SortAnimals();

  return (
    <>
      <AnimalForm />
      <section className={css.animal_section}>
        <div
          className={`${css.data_container} ${css.unselectable}`}
          onClick={handleSort}
          >Name {sort[sortMode]}
        </div>
      </section>

      { !animals.length ? <h3>No Animals</h3> : "" }

      <section className={css.animal_wrapper}>
      {
        animals.map((animal, index) => 
          <Animal
            key={index}
            data={animal}
            index={index}
            editMode={animalInEdit}
          />
        )
      }
      </section>
    </>
  );
};
