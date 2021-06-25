import { csrfFetch } from "./csrf";
// Define Action Types as Constants
const GET_ROUNDS = "rounds/GET_ROUNDS";
const GRAB_ROUND = "rounds/GRAB_ROUND";
const CREATE_ROUND = "rounds/CREATE_ROUND";
const DELETE_ROUND = "rounds/DELETE_ROUND";

// Define Action Creators
const getRounds = (rounds) => ({
  type: GET_ROUNDS,
  rounds,
});

const getOneRound = (round) => ({
  type: GRAB_ROUND,
  round,
});

const addRound = (round) => ({
  type: CREATE_ROUND,
  round,
});

const deleteSelectedRound = (roundId) => ({
  type: DELETE_ROUND,
  roundId,
});

// Define Thunk creators
export const createRound = (payload) => async (dispatch) => {
  const { courseId, groupId, ruleset, startTime, holes } = payload;
  const response = await csrfFetch("/api/rounds", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      courseId,
      groupId,
      ruleset,
      startTime,
      holes,
    }),
  });

  if (response.ok) {
    const createdRound = await response.json();
    dispatch(addRound(createdRound));
    return createdRound;
  }
};

export const getRounds = () => async (dispatch) => {
  const res = await csrfFetch("/api/rounds");
  const rounds = await res.json();
  dispatch(getRounds(rounds));
};

export const grabRound = (roundId) => async (dispatch) => {
  const res = await csrfFetch(`/api/rounds/${roundId}`);
  const round = await res.json();
  dispatch(getOneRound(round));
};

export const updateRound = (payload) => async (dispatch) => {
  const id = payload.id;
  const response = await csrfFetch(`/api/rounds/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const updatedRound = await response.json();
    dispatch(addRound(updatedRound));
    return updatedRound;
  }
};

export const deleteRound = (payload) => async (dispatch) => {
  const { id } = payload;
  const response = await csrfFetch(`/api/rounds/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteSelectedRound(id));
  }
};

// Define an initial state
const initialState = {};

// Define a reducer
const roundsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROUNDS:
      const allRounds = {};
      action.rounds.forEach((round) => {
        allRounds[round.id] = round;
      });
      return {
        ...state,
        ...allRounds,
      };
    case GRAB_ROUND:
      return {
        ...state,
        [action.round.id]: action.round,
      };
    case DELETE_ROUND:
      const newState = { ...state };
      delete newState[action.roundId];
      return newState;
    case CREATE_ROUND:
      if (!state[action.round.id]) {
        const newState = {
          ...state,
          [action.round.id]: action.round,
        };
        return newState;
      }
      break;
    default:
      return state;
  }
};
// Export the reducer
export default roundsReducer;
