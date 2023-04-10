import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constants";

export function changeCurrentPageAction(currentPages) {
  return { type: actionTypes.CHANGE_CURRENT_PAGE, currentPages };
}
export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});
export const changeRoomListAction = (roomList) => {
  return { type: actionTypes.CHANGE_ROOM_LIST, roomList };
};

export const changeLoadingStateAction = (loadingState) => {
  return {
    type: actionTypes.CHANGE_LOADING_STATE,
    loadingState,
  };
};
export const fetchRoomListData = () => {
  return async (dispatch, getState) => {    
    dispatch(changeLoadingStateAction(true));
    const res = await getEntireRoomList(getState().entire.currentPages * 20);
    dispatch(changeLoadingStateAction(false));
    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeTotalCountAction(totalCount));
    dispatch(changeRoomListAction(roomList));
  };
};
