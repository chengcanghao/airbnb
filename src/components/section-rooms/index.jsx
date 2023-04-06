import React, { memo } from "react";
import RoomItem from "../room-item";
import PropTypes from "prop-types";
import { SectionRoomWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [] } = props;
  return (
    <SectionRoomWrapper>
      {roomList.map((item) => {
        return <RoomItem itemData={item} key={item.id} />;
      })}
    </SectionRoomWrapper>
  );
});
SectionRooms.propTypes = {
  roomList: PropTypes.array,
};
export default SectionRooms;
