import { AnimalData } from "../../types/Animal";
import css from './Animal.module.css'
import AImage from "../Image/Image";
import { AnimalHook, EditAnimalHook } from "./hook/AnimalHook";


type AnimalProp = {
  data: AnimalData;
  index:number
  editMode?: string;
};


export const Animal = ({data, index, editMode = ""}: AnimalProp) => {
  const { name, image, id } = {...data};
  const { handleDeleteAnimal, handleSetEditMode } = AnimalHook();

  const animalData = () => {
    const { onChangeEditImage, onChangeEditName, handleSaveEdit, handleCancelEdit, editAnimal } = EditAnimalHook(index);
    const {name:eName, image:eImage} = editAnimal;
    if (editMode === id) {
      return (
        <>
          <input 
            type="text"
            name="ename"
            value={eName}
            onChange={onChangeEditName}
          />

          <input
            type="text"
            name="eimage"
            value={eImage}
            onChange={onChangeEditImage}
          />
          
          <div>
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancle</button>
          </div>
        </>
      );
    }

    return (
      <>
        <div className={css.animal_name}>{name}</div> 
        <AImage imgName={image} imgClass={css.img}/>
        
        <div className={css.edit_delete}>
          <button onClick={(e) => {handleDeleteAnimal(e, index)}}>Delete</button>

          <button onClick={(e) => { 
              e.preventDefault()
              handleSetEditMode(id,index);
            }
          }>Edit</button>
        </div>
      </>
    );
  };

  return (
    <div key={index} className={css.animal_container}>
      <div className={css.animal_data}>
        {animalData()}
      </div>
    </div>
  );
}