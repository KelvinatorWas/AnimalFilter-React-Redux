import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { AnimalData } from "../types/Animal";

const checkData = (dataLocation:string) => {
  const data = localStorage.getItem(dataLocation);

  if (!data) return [];

  return JSON.parse(data);
};

export interface AnimalState {
  animals: AnimalData[];
  newAnimal: AnimalData;
  editAnimal: AnimalData;
  animalInEdit:string;
  sortMode: 1 | 0;
}

export type updateAnimalType = {id:number, data:AnimalData}

const initState:AnimalState = {
  animals: checkData("animals"),
  newAnimal: {name:"", image:"", id:""},
  editAnimal: {name:"", image:"", id:""},
  animalInEdit: "",
  sortMode: 0,
};

export const AniamlSlice = createSlice({
  name:"animals",
  initialState:initState,
  reducers: {
    addAnimal: (state) => {
      state.animals.push({...state.newAnimal, id:nanoid()});
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

    sortAnimals: (state) => {
      const great = () => {
        if (state.sortMode === 1) return (a:AnimalData, b:AnimalData) => (a.name.toLowerCase()[0] < b.name.toLowerCase()[0]) ? 1 : 0;
        if (state.sortMode === 0) return (a:AnimalData, b:AnimalData) => (a.name.toLowerCase()[0] > b.name.toLowerCase()[0]) ? 1 : 0;
      };
      state.animals.sort(great())
    },

    setSortMode: (state) => {
      state.sortMode = !state.sortMode ? 1 : 0;
    },

    // Edit Reducer Functions
    
    setEditMode: (state, action: PayloadAction<{id:string, index:number}>) => {
      if (state.animalInEdit === "") {
        state.animalInEdit = action.payload.id;
        state.editAnimal = state.animals[action.payload.index];
      }
    },

    setEditName: (state, { payload:name }: PayloadAction<string>) => {
      state.editAnimal.name = name;
    },
    
    setEditImage: (state, { payload:image }: PayloadAction<string>) => {
      state.editAnimal.image = image;
    },

    saveEditAnimal: (state, index:PayloadAction<number>) => {
      console.log("edit")
      state.animals[index.payload] = {...state.editAnimal};
      state.animalInEdit = "";
      localStorage.setItem("animals", JSON.stringify([...state.animals]));
    },

    cancleEditAnimal: (state) => {
      state.animalInEdit = "";
    },

  }
});

export const {
  deleteAnimal,
  getAnimals,
  addAnimal,
  updateAnimal,
  setAnimals,
  sortAnimals,
  setName,
  setImage,
  setSortMode,
  // edit reducer func
  setEditMode,
  setEditName,
  setEditImage,
  saveEditAnimal,
  cancleEditAnimal,
} = AniamlSlice.actions;

export default AniamlSlice.reducer;