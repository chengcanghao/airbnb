import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import { RoomWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import IconLeftArrow from "@/assets/svg/icon-left-arrow";
import IconRightArrow from "@/assets/svg/icon-right-arrow";
const RoomItem = memo((props) => {
  const { itemData, itemWidth } = props;
  const carouselRef = useRef()
  function arrowClickHandler(type) {
  if (type==='left') {
    carouselRef.current.prev()
  }else{
    carouselRef.current.next()
  }
  }
  return (
    <RoomWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        <div className="carousel" >
          <Carousel dots={false} ref={carouselRef}>
            {itemData?.picture_urls?.map((item) => {
              return (
                <div className="cover" key={item}>
                  <div className="control">
                    <div
                      className="left"
                      onClick={(e) => arrowClickHandler("left")}
                    >
                      <IconLeftArrow width={18} height={18} />
                    </div>

                    <div
                      className="right"
                      onClick={(e) => arrowClickHandler("right")}
                    >
                      <IconRightArrow width={18} height={18} />
                    </div>
                  </div>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="description">
          {itemData.verify_info.messages.join("·")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price} 晚</div>
        <div className="bottom">
          <Rating
            name="size-small"
            value={itemData.star_rating ?? 5}
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
