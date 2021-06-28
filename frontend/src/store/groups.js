import { csrfFetch } from "./csrf";
// Define Action Types as Constants
const SET_GROUPS = "groups/SET_GROUPS";
const GRAB_GROUP = "groups/GRAB_GROUP";
const CREATE_GROUP = "groups/CREATE_GROUP";
const DELETE_GROUP = "groups/DELETE_GROUP";
const GET_ROUNDS = "groups/GET_ROUNDS";

// Define Action Creators
const setGroups = (groups) => ({
  type: SET_GROUPS,
  groups,
});

const setOneGroup = (group) => ({
  type: GRAB_GROUP,
  group,
});

const addGroup = (group) => ({
  type: CREATE_GROUP,
  group,
});

const deleteSelectedGroup = (groupId) => ({
  type: DELETE_GROUP,
  groupId,
});

const getAllRounds = (rounds) => ({
  type: GET_ROUNDS,
  rounds
})

// Define Thunk creators
export const createGroup = (payload) => async (dispatch) => {
  const { hostUserId, playStyle, description, groupName, imageUrl } = payload;
  const response = await csrfFetch("/api/groups", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      hostUserId,
      playStyle,
      description,
      groupName,
      imageUrl,
    }),
  });

  if (response.ok) {
    const createdGroup = await response.json();
    dispatch(addGroup(createdGroup));
    return createdGroup;
  }
};

export const getGroups = () => async (dispatch) => {
  const res = await csrfFetch("/api/groups");
  const groups = await res.json();
  dispatch(setGroups(groups));
};

export const getRounds = (groupId) => async (dispatch) => {
  const res = await csrfFetch(`/api/groups/${groupId}/rounds`);
  
  if (res.ok)
  {const rounds = await res.json();
  dispatch(getAllRounds(rounds));
  return rounds}
}

export const grabGroup = (groupId) => async (dispatch) => {
  const res = await csrfFetch(`/api/groups/${groupId}`);
  const group = await res.json();
  dispatch(setOneGroup(group));
};

export const updateGroup = (payload) => async (dispatch) => {
  const id = payload.id;
  const response = await csrfFetch(`/api/groups/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const updatedGroup = await response.json();
    dispatch(addGroup(updatedGroup));
    return updatedGroup;
  }
};

export const deleteGroup = (payload) => async (dispatch) => {
  const { id } = payload;
  const response = await csrfFetch(`/api/groups/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteSelectedGroup(id));
  }
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
    case GRAB_GROUP:
      return {
        ...state,
        [action.group.id]: action.group,
      };
    case DELETE_GROUP:
      const newState = { ...state };
      delete newState[action.groupId];
      return newState;
    case CREATE_GROUP:
      if (!state[action.group.id]) {
        const newState = {
          ...state,
          [action.group.id]: action.group,
        };
        return newState;
      }
      break;
      case GET_ROUNDS:
        return {
          ...state,
          rounds : action.rounds
        };
        default:
          return state;
  }
};
// Export the reducer
export default groupsReducer;
