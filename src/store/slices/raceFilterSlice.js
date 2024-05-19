import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  track: null,
  kart: null,
};

const raceFilterSlice = createSlice({
  name: "races-filter",
  initialState: INITIAL_STATE,
  reducers: {
    setTrack: (state, action) => {
      const newTrack = action.payload;
      state.track = newTrack;
    },
    setKart: (state, action) => {
      const newKart = action.payload;
      state.kart = newKart;
    },
    clearFilter: () => INITIAL_STATE,
  },
});

export default raceFilterSlice.reducer;
export const { setTrack, setKart, clearFilter } = raceFilterSlice.actions;
export const selectTrack = (state) => state.raceFilter.track;
export const selectKart = (state) => state.raceFilter.kart;
