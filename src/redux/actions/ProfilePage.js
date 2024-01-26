export const SET_PROFILE = "SET_PROFILE";

export const setProfileAction = (data) => {
  return {
    type: SET_PROFILE,
    payload: data,
  };
};
