import PropTypes from "prop-types";
import React, { memo, useRef,useState } from "react";
import { RoomWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import Indicator from '@/base-ui/indicator';
import IconLeftArrow from "@/assets/svg/icon-left-arrow";
import IconRightArrow from "@/assets/svg/icon-right-arrow";
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemData, itemWidth, itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0)
  const carouselRef = useRef();
  function arrowClickHandler(type) {
    if (type) {
      carouselRef.current.next();
    } else {
      carouselRef.current.prev();
    }
    let newIndex = type ? selectIndex + 1: selectIndex - 1
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }

  function itemClickHandler(){
    if (itemClick) {
      itemClick()
    }
  }
  return (
    <RoomWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandler}
    >
      <div className="inner">{
        itemData.picture_urls? <div className="slider">
          <div className="control">
            <div className="left" onClick={(e) => arrowClickHandler(false)}>
              <IconLeftArrow width={18} height={18} />
            </div>

            <div className="right" onClick={(e) => arrowClickHandler(true)}>
              <IconRightArrow width={18} height={18} />
            </div>
          </div>
          <div className='indicator'>
            <Indicator selectIndex={selectIndex}>
              {
                itemData.picture_urls.map((item, index) => {
                  return (
                    <div className='item' key={item}>
                      <span className={classNames("dot", {active: selectIndex === index})}></span>
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
          <Carousel dots={false} ref={carouselRef}>
            {itemData?.picture_urls?.map((item) => {
              return (
                <div className="cover" key={item}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>: <div className="cover" >
                  <img src={itemData.picture_url} alt="" />
                </div>
      }
        
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
