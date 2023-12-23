import { useState } from "react";
import { AnimalForm } from "../AnimalForm/AnimalForm";
import css from './AnimalManager.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { deleteAnimal, sortAnimals } from "../../app/animalSlice";
import { Animal } from "../Animal/Animal";

enum sort {'↑', '↓'}

export const AnimalManager = () => {
  const { animals } = useSelector((state:RootState) => state.animals)
  const dispatch = useDispatch();

  const [sortMode, setSortMode] = useState< 1 | 0>(0)
  //console.log("Ani: ",animals)

  const deleteAnimalButton = (e:React.MouseEvent, id:number) => {
    e.preventDefault();
    dispatch(deleteAnimal(id));
  }


  return (
    <>
      <AnimalForm />
      <section className={css.animal_section}>
        <div
          className={`${css.data_container} ${css.unselectable}`}
          onClick={() => {
            setSortMode(!sortMode ? 1 : 0);
            dispatch(sortAnimals(sortMode))
          }}  
        >Name {sort[sortMode]}</div>
      </section>
      { !animals.length ? <h3>No Animals</h3> : "" }
      <section className={css.animal_wrapper}>
      {

        animals.map((animal, index) => 
          <Animal
            key={index}
            data={animal}
            index={index}
            deleteAnimal={deleteAnimalButton}
          />
        )
      }
      </section>

    </>
  );
};
