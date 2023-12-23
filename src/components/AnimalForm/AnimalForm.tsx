import { useSelector } from 'react-redux';
import css from './AnimalForm.module.css'
import { RootState } from '../../app/store';
import { HookAnimalForm } from './hook/animalHook';
import React from 'react';


export const AnimalForm = () => {
  const {name, image} = useSelector((state:RootState) => state.animals.newAnimal)
  const { changeInputImage, changeInputName, onSubmitAnimalForm, clearLocalStorage } = HookAnimalForm(); // destructuring hooks

  const addAnimal = (e:React.MouseEvent) => {
    if (!name || !image) return;
    onSubmitAnimalForm(e);
  }

  return (
    <form id="addAnimal"className={css.form_wrapper}>
      <div className={css.input_container}>
        <label>Name:</label>
        <input
          className={css.input}
          form='addAnimal'
          type="text"
          onChange={changeInputName}
          value={name}
          required
          />
      </div>

      <div className={css.input_container}>
        <label>Image:</label>
        <input
          className={css.input}
          type="text"
          form='addAnimal'
          onChange={changeInputImage}
          value={image}
          required
        />
      </div>

      <button className={`${css.button} ${css.edit} ${css.save}`} form="addAnimal" type='submit' onClick={addAnimal}>Submit</button>
      <button className={`${css.button} ${css.edit} ${css.delete}`} onClick={clearLocalStorage}>Clear Local Storage</button>
    </form>
  );
}
