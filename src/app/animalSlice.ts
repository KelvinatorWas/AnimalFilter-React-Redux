import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AnimalData } from "../types/Animal";

const checkData = (dataLocation:string) => {
  const data = localStorage.getItem(dataLocation);

  if (!data) return [];

  return JSON.parse(data);
};

export interface AnimalState {
  animals: AnimalData[]
  newAnimal: {name:string, image:string}
}

export type updateAnimalType = {id:number, data:AnimalData}

const initState:AnimalState = {
  animals: checkData("animals"),
  newAnimal: {name:"", image:""},
};

export const AniamlSlice = createSlice({
  name:"animals",
  initialState:initState,
  reducers: {
    addAnimal: (state) => {
      state.animals.push({...state.newAnimal});
      state.newAnimal.name = "";
      state.newAnimal.image = "";
      localStorage.setItem("animals", JSON.stringify([...state.animals]));
    },

    getAnimals: (state) => {
      return state;
    },

    setName: (state, action:PayloadAction<string>) => {
      state.newAnimal.name = action.payload;
    },

    setImage: (state, action:PayloadAction<string>) => {
      state.newAnimal.image = action.payload;
    },

    deleteAnimal: (state, id:PayloadAction<number>) => {
      state.animals.splice(id.payload, 1);
      localStorage.setItem("animals", JSON.stringify(state.animals));
    },

    updateAnimal: (state, data:PayloadAction<updateAnimalType>) => {
      state.animals[data.payload.id] = data.payload.data;
    },

    setAnimals: (state, action:PayloadAction<AnimalData[]>) => {
      state.animals = action.payload;
    },

    sortAnimals: (state, action:PayloadAction<0|1>) => {
      const great = () => {
        if (action.payload == 1) return (a:AnimalData, b:AnimalData) => (a.name.toLowerCase()[0] > b.name.toLowerCase()[0]) ? 1 : 0;
        if (action.payload == 0) return (a:AnimalData, b:AnimalData) => (a.name.toLowerCase()[0] < b.name.toLowerCase()[0]) ? 1 : 0;
      };
      state.animals.sort(great())
    }
  }
});

export const { deleteAnimal, getAnimals, addAnimal, updateAnimal, setAnimals, sortAnimals, setName, setImage} = AniamlSlice.actions

export default AniamlSlice.reducer