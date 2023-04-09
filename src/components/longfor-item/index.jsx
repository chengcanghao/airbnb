import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";

const LongForItem = memo((props) => {
  const { infoData, itemWidth } = props;
  return (
    <ItemWrapper itemWidth={itemWidth}>
      <img className="cover" src={infoData.picture_url} alt="" />
      <div className="bg-cover"></div>
      <div className="detail">
        <div className="city">{infoData.city}</div>
        <div className="price">均价 {infoData.price}</div>
      </div>
    </ItemWrapper>
  );
});

LongForItem.propTypes = {};

export default LongForItem;
