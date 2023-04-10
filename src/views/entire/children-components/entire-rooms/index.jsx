import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomsWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { LinearProgress } from "@mui/material";

const Rooms = memo((props) => {
  const {roomList,currentPage,totalCount,loadingState} = useSelector((state)=>{
   return {
    roomList:state.entire.roomList,
    currentPage:state.entire.currentPage,
    totalCount:state.entire.totalCount,
    loadingState:state.entire.loadingState
   }
  },shallowEqual)
  return <RoomsWrapper>
    <h2>共{totalCount}处住所</h2>
    <div className="list">{
      roomList.map((item,index)=>{

        return (
        <RoomItem key={item._id} itemData = {item} itemWidth = {100/6}/>

       
        )
      })
    }</div>
   {loadingState&&
    <div className="mask">
      <div className="progress"><LinearProgress/></div>
      
    </div>
   } 
    
  </RoomsWrapper>;
});

Rooms.propTypes = {};

export default Rooms;
