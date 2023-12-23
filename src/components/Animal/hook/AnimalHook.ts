import { useDispatch, useSelector } from "react-redux";
import { cancleEditAnimal, deleteAnimal, saveEditAnimal, setEditImage, setEditMode, setEditName } from "../../../app/animalSlice";
import { RootState } from "../../../app/store";

export const AnimalHook = () => {
  const dispatch = useDispatch();
    
  const handleDeleteAnimal = (e:React.MouseEvent, id:number) => {
    e.preventDefault();
    dispatch(deleteAnimal(id));
  };

  const handleSetEditMode = (id:string, index:number) => {
    dispatch(setEditMode({id, index}));
  };
  
  return {
    handleDeleteAnimal,
    handleSetEditMode
  };
};

export const EditAnimalHook = (index:number) => {
  const dispatch = useDispatch();
  const { editAnimal } = useSelector((state: RootState)=> state.animals);
    
  const onChangeEditName = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEditName(e.target.value));
  };

  const onChangeEditImage = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEditImage(e.target.value));
  };

  const handleSaveEdit = () => {
    dispatch(saveEditAnimal(index));
  };

  const handleCancelEdit = () => {
    dispatch(cancleEditAnimal());
  };
  
  return {
    onChangeEditName,
    onChangeEditImage,
    handleSaveEdit,
    handleCancelEdit,
    editAnimal
  };
};
