import { SET_PROFILE } from "../actions/ProfilePage";

const initialState = {
  actualProfile: {},
};

const setProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        actualProfile: action.payload,
      };

    default:
      return state;
  }
};

export default setProfileReducer;
