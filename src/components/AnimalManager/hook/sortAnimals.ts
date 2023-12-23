import { useDispatch } from "react-redux";
import { setSortMode, sortAnimals } from "../../../app/animalSlice";

export const SortAnimals = () => {
  const dispatch = useDispatch();
   
  const handleSort = () => {
    dispatch(setSortMode());
    dispatch(sortAnimals());
  }

  return handleSort;
};

