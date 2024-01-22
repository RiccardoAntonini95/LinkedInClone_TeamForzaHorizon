import { combineReducers, configureStore } from "@reduxjs/toolkit";
import setProfileReducer from "../reducers/ProfilePage";

const bigReducer = combineReducers({
  profile: setProfileReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
