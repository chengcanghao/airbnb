import React, { memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ViewWrapper } from "@/base-ui/scroll-view/style";
import IconRightArrow from "@/assets/svg/icon-right-arrow";
import IconLeftArrow from "@/assets/svg/icon-left-arrow";

const ScrollView = memo((props) => {
  const [showRightStatus, setShowRightStatus] = useState(false);

  const [showLeftStatus, setShowLeftStatus] = useState(false);

  const [positionIndex, setPositionIndex] = useState(0);

  const scrollContentRef = useRef();

  const validDistanceRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;

    const clientWidth = scrollContentRef.current.clientWidth;

    const validDistance = scrollWidth - clientWidth;

    validDistanceRef.current = validDistance;

    setShowRightStatus(validDistanceRef.current > 0);
  }, [props.children]);

  function clickHandler(isRight) {
    const newPositionIndex = isRight ? positionIndex + 1 : positionIndex - 1;
    const newOffset =
      scrollContentRef.current.children[newPositionIndex].offsetLeft;

    scrollContentRef.current.style.transform = `translate(${-newOffset}px)`;

    setPositionIndex(newPositionIndex);

    setShowRightStatus(validDistanceRef.current > newOffset);

    setShowLeftStatus(newOffset > 0);
  }

  return (
    <ViewWrapper>
      {showLeftStatus && (
        <div className="left" onClick={(e) => clickHandler(false)}>
          <div className="iconLeft">
            <IconLeftArrow />
          </div>
        </div>
      )}
      {showRightStatus && (
        <div className="right" onClick={(e) => clickHandler(true)}>
          <div className="iconRight">
            {" "}
            <IconRightArrow />
          </div>
        </div>
      )}
      <div className="scroll">
        {" "}
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
