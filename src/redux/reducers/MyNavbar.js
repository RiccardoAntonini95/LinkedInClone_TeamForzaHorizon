import { SET_ALL_PROFILES } from "../actions/MyNavbar";

const initialState = {
  allProfiles: [],
};

const setAllProfilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_PROFILES:
      return {
        ...state,
        allProfiles: action.payload,
      };

    default:
      return state;
  }
};

export default setAllProfilesReducer;
