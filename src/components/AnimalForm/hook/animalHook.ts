import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setImage, setName, addAnimal, setAnimals } from "../../../app/animalSlice";

const clearData = (dataLocation:string) => {
  localStorage.setItem(dataLocation, "[]");
};

export const HookAnimalForm = () => {
  const dispatch = useDispatch();

  const changeInputImage = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setImage(e.target.value));
  };

  const changeInputName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const onSubmitAnimalForm = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addAnimal());
  };

  const clearLocalStorage = (e:React.MouseEvent) => {
    e.preventDefault();
    clearData("animals");
    dispatch(setAnimals([]));
  };  

  return {
    changeInputImage,
    changeInputName,
    onSubmitAnimalForm,
    clearLocalStorage
  };
};
