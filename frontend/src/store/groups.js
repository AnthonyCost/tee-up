import { csrfFetch } from "./csrf";
// Define Action Types as Constants
const SET_GROUPS = "groups/SET_GROUPS";
const GRAB_GROUP = "groups/GRAB_GROUP";
const CREATE_GROUP = "groups/CREATE_GROUP";

// Define Action Creators
const setGroups = (groups) => ({
  type: SET_GROUPS,
  groups,
});

const setOneGroup = (group) => ({
  type: GRAB_GROUP,
  group,
});

const createGroup = (group) => ({
  type: CREATE_GROUP,
  group,
});

// Define Thunk creators
export const createGroup = (payload) => async (dispatch) => {
  const response = await fetch("/api/pokemon", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const createdGroup = await response.json();
    dispatch(createGroup(createdGroup));
    return createdGroup;
  }
};

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
const initialState = {
  groupsList: [],
};

const sortGroups = (groups) => {
  return groups
    .sort((groupA, groupB) => {
      return groupA.id - groupB.id;
    })
    .map((group) => group.id);
};

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
    case CREATE_GROUP: {
      if (!state[action.group.id]) {
        const newState = {
          ...state,
          [action.group.id]: action.group,
        };
        const groupsList = newState.groups.map((id) => newState[id]);
        groupsList.push(action.group);
        newState.groups = sortGroups(groupsList);
        return newState;
      }
    }
    default:
      return state;
  }
};
// Export the reducer
export default groupsReducer;
