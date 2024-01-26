export const SET_ALL_PROFILES = "SET_ALL_PROFILES";

export const setAllProfilesAction = (data) => {
  return {
    type: SET_ALL_PROFILES,
    payload: data,
  };
};

export default setAllProfilesAction;
