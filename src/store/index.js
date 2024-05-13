import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { baseApiSlice } from "./slices/api/baseApiSlice";
import { rankingApiSlice } from "./slices/api/rankingApiSlice";

const rootReducer = combineReducers({
  [rankingApiSlice.reducerPath]: rankingApiSlice.reducer,
  [baseApiSlice.reducerPath]: baseApiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApiSlice.middleware)
      .concat(rankingApiSlice.middleware),
});

export default store;
