import PropTypes from "prop-types";
import React, { memo, useState, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { PictureBrowserWrapper } from "./style";
import CloseLogo from "@/assets/svg/close_logo";
import Indicator from "../indicator";
import IconLeftArrow from "@/assets/svg/icon-left-arrow";
import IconRightArrow from "@/assets/svg/icon-right-arrow";

const PictureBrowser = memo((props) => {
  const { onShowStateChange, detailInfo } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const [isRight,setIsRight] = useState()
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  /** 事件处理的逻辑 */
  function closeBtnClickHandler() {
    document.body.style.overflow = "auto";
    onShowStateChange();
  }
  function pictureChangeHandler(type) {
    let newIndex = type ? selectIndex + 1 : selectIndex - 1;
    if (newIndex > detailInfo.picture_urls.length - 1) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = detailInfo.picture_urls.length - 1;
    }
    setIsRight(type)
    setSelectIndex(newIndex);
  }
  return (
    <PictureBrowserWrapper isRight={isRight}>
      <div className="top">
        <div className="close" onClick={closeBtnClickHandler}>
          <CloseLogo />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="left" onClick={(e) => pictureChangeHandler(false)}>
            <IconLeftArrow width={30} height={30} />
          </div>
          <div className="right" onClick={(e) => pictureChangeHandler(true)}>
            <IconRightArrow width={30} height={30} />
          </div>
        </div>
        <div className="item">
          <SwitchTransition mode="in-out">
            <CSSTransition key={detailInfo.picture_urls[selectIndex] } classNames="pic" timeout={200}>
              <img src={detailInfo.picture_urls[selectIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>{" "}
        </div>
      </div>
      <div className="indicator">
        <Indicator>
          {detailInfo.picture_urls.map((item, index) => {
            return (
              <div>
                <img src={item} alt="img" key={index} />
              </div>
            );
          })}
        </Indicator>
      </div>
    </PictureBrowserWrapper>
  );
});

PictureBrowser.propTypes = {};

export default PictureBrowser;
