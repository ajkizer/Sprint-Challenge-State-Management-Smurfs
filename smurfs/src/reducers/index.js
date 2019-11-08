import {
  FETCHING_CHARS_START,
  FETCHING_CHARS_SUCCESS,
  FETCHING_CHARS_FAILURE,
  ADD_CHAR_START,
  ADD_CHAR_FAILURE,
  ADD_CHAR_SUCCESS,
  DELETE_CHAR_FAILURE,
  DELETE_CHAR_START,
  DELETE_CHAR_SUCCESS
} from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  isPosting: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_CHARS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false
      };
    case FETCHING_CHARS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ADD_CHAR_START:
      return {
        ...state,
        isPosting: true,
        error: ""
      };
    case ADD_CHAR_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isPosting: false
      };
    case ADD_CHAR_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };
  }
};
