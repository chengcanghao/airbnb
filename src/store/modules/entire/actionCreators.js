import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constants";

export function changeCurrentPageAction(currentPages) {
  return { type: actionTypes.CHANGE_CURRENT_PAGE, currentPages }
}
export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT, totalCount
});
export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST, roomList
});

export const fetchRoomListData = () => {
  return (dispatch,getState) => {
    getEntireRoomList(getState().entire.currentPages*20).then((res) => {
      const roomList = res.list
      const totalCount = res.totalCount
      dispatch(changeTotalCountAction(totalCount))
      dispatch(changeRoomListAction(roomList))
    });
  };
};
