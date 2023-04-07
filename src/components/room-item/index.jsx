import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomWrapper } from "./style";
import { Rating } from "@mui/material";
const RoomItem = memo((props) => {
  const { itemData,itemWidth } = props;
  return (
    <RoomWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}
    itemWidth={itemWidth}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="description">
          {itemData.verify_info.messages.join("·")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price} 晚</div>
        <div className="bottom">
          <Rating
            name="size-small"
            value={itemData.star_rating??5}
            precision={0.5}
            sx={{ fontSize: "14px", color: "#ff385c" }}
          />
        </div>
      </div>
    </RoomWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
