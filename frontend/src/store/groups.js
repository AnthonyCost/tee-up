import { csrfFetch } from "./csrf";
// Define Action Types as Constants
const SET_GROUPS = "groups/SET_GROUPS";

// Define Action Creators
const setGroups = (groups) => ({
  type: SET_GROUPS,
  groups,
});

// Define Thunk creators
export const getGroups = () => async (dispatch) => {
  const res = await csrfFetch("/api/groups");
  const groups = await res.json();
  dispatch(setGroups(groups));
};

// Define an initial state
const initialState = {};

// Define a reducer
const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUPS:
      const allGroups = {};
      action.groups.forEach((group) => {
        allGroups[group.id] = group;
      });
      return {
        ...state,
        ...allGroups,
      };
    default:
      return state;
  }
};
// Export the reducer
export default groupsReducer;
