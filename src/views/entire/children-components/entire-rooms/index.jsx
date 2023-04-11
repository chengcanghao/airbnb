import React, { memo, useCallback } from "react";
import { RoomsWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";

const Rooms = memo((props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { roomList, totalCount, loadingState } = useSelector(
    (state) => {
      return {
        roomList: state.entire.roomList,
        currentPage: state.entire.currentPage,
        totalCount: state.entire.totalCount,
        loadingState: state.entire.loadingState,
      };
    },
    shallowEqual
  );

  const itemClickHandler = useCallback((item)=>{
    dispatch(changeDetailInfoAction(item))
    console.log(item);
    navigate('/detail')
  },[navigate])
  return (
    <RoomsWrapper>
      <h2>共{totalCount}处住所</h2>
      <div className="list">
        {roomList.map((item, index) => {
          return (
            <RoomItem key={item._id} itemData={item} itemWidth={100 / 6} itemClick ={e=>itemClickHandler(item)} />
          );
        })}
      </div>
      {loadingState && (
        <div className="mask">
          <div className="progress">
            <LinearProgress />
          </div>
        </div>
      )}
    </RoomsWrapper>
  );
});

Rooms.propTypes = {};

export default Rooms;
