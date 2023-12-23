import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setImage, setName, addAnimal } from "../../../app/animalSlice";


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

  return {
    changeInputImage,
    changeInputName,
    onSubmitAnimalForm,
  };
};