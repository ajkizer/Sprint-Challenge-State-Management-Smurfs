import axios from "axios";

export const FETCHING_CHARS_START = "FETCHING_CHARS_START";
export const FETCHING_CHARS_SUCCESS = "FETCHING_CHARS_SUCCESS";
export const FETCHING_CHARS_FAILURE = "FETCHING_CHARS_FAILURE";

export const ADD_CHAR_START = "ADD_CHAR_START";
export const ADD_CHAR_SUCCESS = "ADD_CHAR_SUCCESS";
export const ADD_CHAR_FAILURE = "ADD_CHAR_FAILURE";

export const DELETE_CHAR_START = "DELETE_CHAR_START";
export const DELETE_CHAR_SUCCESS = "DELETE_CHAR_SUCCESS";
export const DELETE_CHAR_FAILURE = "DELETE_CHAR_FAILURE";

export const getChars = () => dispatch => {
  dispatch({ type: FETCHING_CHARS_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: FETCHING_CHARS_SUCCESS, payload: res.data });
    })
    .catch((res, err) => {
      dispatch({ type: FETCHING_CHARS_FAILURE, payload: res.data });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_CHAR_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: ADD_CHAR_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_CHAR_FAILURE, payload: err });
    });
};
