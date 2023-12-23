import { useSelector } from 'react-redux';
import css from './AnimalForm.module.css'
import { RootState } from '../../app/store';
import { HookAnimalForm } from './hooks/animalHook';
import React from 'react';

const clearData = (dataLocation:string) => {
  localStorage.setItem(dataLocation, "[]");
};

export const AnimalForm = () => {
  const {name, image} = useSelector((state:RootState) => state.animals.newAnimal)
  const { changeInputImage, changeInputName, onSubmitAnimalForm } = HookAnimalForm(); // destructuring hooks

  const clearLocalStorage = (e:React.MouseEvent) => {
    e.preventDefault();
    clearData("animals");
  };

  const addAnimal = (e:React.MouseEvent) => {
    if (!name || !image) return;
    onSubmitAnimalForm(e);
  }

  return (
    <form id="addAnimal"className={css.form_wrapper}>
      <div className={css.input_container}>
        <label>Name:</label>
        <input form='addAnimal' type="text" onChange={changeInputName} value={name} required/>
      </div>

      <div className={css.input_container}>
        <label>Image:</label>
        <input type="text" form='addAnimal' onChange={changeInputImage} value={image} required/>
      </div>

      <button form="addAnimal" type='submit' onClick={addAnimal}>Submit</button>
      <button onClick={clearLocalStorage}>Clear Local Storage</button>
    </form>
  );
}