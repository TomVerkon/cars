import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: []
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    // action.payload must be a car object {name: 'asd', cost: 123}
    addCar(state, action) {
      console.log(action.payload);
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    // action.payload is the id of the car we want to remove
    removeCar(state, action) {
      const updatedCars = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updatedCars;
    }
  }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;