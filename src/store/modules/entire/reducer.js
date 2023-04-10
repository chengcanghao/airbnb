import * as actionTypes from "./constants";
const initialState = {
  currentPages: 3,
  roomList: [],
  totalCount: 0,
  loadingState: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPages: action.currentPages };
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList };
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case actionTypes.CHANGE_LOADING_STATE:
      return { ...state, loadingState: action.loadingState };
    default:
      return state;
  }
}

export default reducer;
