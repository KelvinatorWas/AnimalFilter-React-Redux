import { AnimalData } from "../../types/Animal";
import css from './Animal.module.css'
import AImage from "../Image/Image";

type AnimalProp = {
  data: AnimalData;
  index:number
  deleteAnimal: (e:React.MouseEvent, id:number) => void;
};


export const Animal = ({data, index, deleteAnimal}: AnimalProp) => {

  return (
    <div key={index} className={css.animal_container}>
      <div className={css.animal_data}>
        <div className={css.animal_name}>{data.name}</div> 
        <AImage imgName={data.image} imgClass={css.img}/>
        
        <div className={css.edit_delete}>
          <button onClick={(e) => {deleteAnimal(e, index)}}>Delete</button>

          <button onClick={(e) => { e.preventDefault()}}>Edit</button>
        </div>

      </div>
    </div>
  );
}