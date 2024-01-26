import { combineReducers, configureStore } from "@reduxjs/toolkit";
import setProfileReducer from "../reducers/ProfilePage";

import setAllProfilesReducer from "../reducers/MyNavbar";

const bigReducer = combineReducers({
  profile: setProfileReducer,
  totalProfiles: setAllProfilesReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
