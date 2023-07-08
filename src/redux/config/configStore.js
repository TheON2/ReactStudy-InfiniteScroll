import {combineReducers, configureStore} from "@reduxjs/toolkit";
import search from "../reducers/searchSlice";

const rootReducer = combineReducers({
  search
});

// 2. create store
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// 3. export
export default store;