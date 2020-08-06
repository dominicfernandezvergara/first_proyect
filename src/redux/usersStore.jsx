const ADD_NEW_USER = "ADD_NEW_USER";
const CURRENT_USER = "CURRENT_USER";

const initialData = {
  users: [
    {
      name: "Dominic",
      email: "domi@domi.cl",
      password: "domi123",
    },
    {
      name: "Javier",
      email: "javi@javi.cl",
      password: "javi123",
    },
  ],
  currentUser: {},
};

export default function LoginReducer(state = initialData, action) {
  switch (action.type) {
    case ADD_NEW_USER: {
      console.log("action.payload", action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    case CURRENT_USER: {
      console.log("action.payload", action.payload);
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    default:
      return state;
  }
}

export const addNewUser = (userData) => async (dispatch) => {
  console.log("userData", userData);
  dispatch({
    type: ADD_NEW_USER,
    payload: userData,
  });
};

export const currentUser = (currentUserData) => async (dispatch) => {
  console.log("userData", currentUserData);
  dispatch({
    type: CURRENT_USER,
    payload: currentUserData,
  });
};
