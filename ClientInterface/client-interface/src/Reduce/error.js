import { OBTAIN_ERRORS } from "../actions/authenticationActions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case OBTAIN_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
