import { csrfFetch } from "./csrf";
// Define Action Types as Constants
const SET_GROUPS = "groups/SET_GROUPS";
const GRAB_GROUP = "groups/GRAB_GROUP";

// Define Action Creators
const setGroups = (groups) => ({
  type: SET_GROUPS,
  groups,
});

const setOneGroup = (group) => ({
  type: GRAB_GROUP,
  group,
});

// Define Thunk creators
export const getGroups = () => async (dispatch) => {
  const res = await csrfFetch("/api/groups");
  const groups = await res.json();
  dispatch(setGroups(groups));
};

export const grabGroup = (groupId) => async (dispatch) => {
  const res = await csrfFetch(`/api/groups/${groupId}`);
  const group = await res.json();
  dispatch(setOneGroup(group));
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
    // case UPDATE_GROUP:
    case GRAB_GROUP:
      return {
        ...state,
        [action.group.id]: action.group,
      };
    default:
      return state;
  }
};
// Export the reducer
export default groupsReducer;
