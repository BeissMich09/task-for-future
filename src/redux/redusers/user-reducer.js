export const GET_USERS = "GET_USERS";
export const GET_FILTER_USERS = "GET_FILTER_USERS";
export const CHANGE_SEARCH_INPUT_VALUE = "CHANGE_SEARCH_INPUT_VALUE";
export const CHANGE_SORT_ARRAY_STATE = "CHANGE_SORT_ARRAY_STATE";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const CHANGE_MODAL_WINDOW_STATE = "CHANGE_MODAL_WINDOW_STATE";
export const CHANGE_VALUE_INPUT_IN_MW = "CHANGE_VALUE_INPUT_IN_MW";
export const CHANGE_PERSONAL_INFO_STATE = "CHANGE_PERSONAL_INFO_STATE";
export const IS_FETCHING = "IS_FETCHING";

let initialState = {
  users: [],
  filterUsers: [],
  searchInputValue: "",
  sortArrayState: false,
  inputValueId: "",
  inputValueFirstName: "",
  inputValueLastName: "",
  inputValueEmail: "",
  inputValuePhone: "",
  modalWindowState: false,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users.map((item) => {
          return {
            ...item,
            personalInfo: false,
          };
        }),
      };
    case GET_FILTER_USERS:
      return {
        ...state,
        filterUsers: action.users,
      };
    case CHANGE_SEARCH_INPUT_VALUE:
      if (action.value === "") {
        return {
          ...state,
          filterUsers: [],
          searchInputValue: action.value,
        };
      } else {
        return {
          ...state,
          searchInputValue: action.value,
        };
      }
    case CHANGE_SORT_ARRAY_STATE:
      return {
        ...state,
        users: action.users,
        sortArrayState: !state.sortArrayState,
      };
    case ADD_NEW_USER:
      let newArr = state.users.slice();
      newArr.splice(0, 0, action.user);
      return {
        ...state,
        users: newArr,
        inputValueId: "",
        inputValueFirstName: "",
        inputValueLastName: "",
        inputValueEmail: "",
        inputValuePhone: "",
      };
    case CHANGE_MODAL_WINDOW_STATE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_VALUE_INPUT_IN_MW:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_PERSONAL_INFO_STATE:
      let copyUsers = action.array.slice();
      let findUser = copyUsers.find((item) => item.id === action.id);
      if (findUser !== undefined) {
        findUser.personalInfo = action.value;
      }
      return {
        ...state,
        users: copyUsers,
      };
    case IS_FETCHING:
      // if(state.users.length!==0)
      return {
        ...state,
        isFetching: action.value,
      };
    default:
      return state;
  }
};

export const getFilterUsers = (users) => {
  return {
    type: GET_FILTER_USERS,
    users,
  };
};

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const changeSearchInputValue = (value) => {
  return {
    type: CHANGE_SEARCH_INPUT_VALUE,
    value,
  };
};

export const changeSortArrayState = (users) => {
  return {
    type: CHANGE_SORT_ARRAY_STATE,
    users,
  };
};

export const addNewUser = (user) => {
  return {
    type: ADD_NEW_USER,
    user,
  };
};

export const changeModalWindowState = (name, value) => {
  return { type: CHANGE_MODAL_WINDOW_STATE, name, value };
};

export const changeValueInputInMW = (name, value) => {
  return {
    type: CHANGE_VALUE_INPUT_IN_MW,
    name,
    value,
  };
};

export const personalInfoStateChange = (array, value, id) => {
  return {
    type: CHANGE_PERSONAL_INFO_STATE,
    array,
    value,
    id,
  };
};

export const changeIsFetching = (value) => {
  return {
    type: IS_FETCHING,
    value,
  };
};

export default usersReducer;
