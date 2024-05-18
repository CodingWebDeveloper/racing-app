import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApiSlice } from "./slices/api/baseApiSlice";
import { rankingApiSlice } from "./slices/api/rankingApiSlice";
import users from "./slices/usersSlice";
import { usersApiSlice } from "./slices/api/usersApiSlice";
import { tracksApiSlice } from "./slices/api/tracksApiSlice";

const rootReducer = combineReducers({
  users,
  [baseApiSlice.reducerPath]: baseApiSlice.reducer,
  [rankingApiSlice.reducerPath]: rankingApiSlice.reducer,
  [tracksApiSlice.reducerPath]: tracksApiSlice,
  [usersApiSlice.reducerPath]: usersApiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApiSlice.middleware)
      .concat(rankingApiSlice.middleware)
      .concat(tracksApiSlice.middleware)
      .concat(usersApiSlice.middleware),
});

export default store;
