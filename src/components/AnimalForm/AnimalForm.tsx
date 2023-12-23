import { useDispatch, useSelector } from 'react-redux';
import css from './AnimalForm.module.css'
import { addAnimal, setImage, setName } from '../../app/animalSlice';
import { RootState } from '../../app/store';

const clearData = (dataLocation:string) => {
  localStorage.setItem(dataLocation, "[]");
};

export const AnimalForm = () => {
  const dispatch = useDispatch();
  const { newAnimal } = useSelector((state:RootState) => state.animals)
  
  const changeInputImage = (e: React.ChangeEvent<HTMLInputElement>) => {    
    dispatch(setImage(e.target.value))
  };

  const changeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {    
    dispatch(setName(e.target.value))
  };
  
  return (
    <form id="addAnimal"className={css.form_wrapper}>
      <div className={css.input_container}>
      <label>Name:</label>
      <input type="text" onChange={changeInputName} value={newAnimal.name}required/>
      </div>

      <div className={css.input_container}>
      <label>Image:</label>
      <input type="text" onChange={changeInputImage} value={newAnimal.image} required/>
      </div>

      <button form="addAnimal" type='submit' onClick={(e) => {
        e.preventDefault();
        dispatch(addAnimal());
      }}>Submit</button>

      <button
      onClick={(e) => {
        e.preventDefault()
        clearData("animals");
      }}
      >
        Clear Local Storage
      </button>
    </form>
  );
}