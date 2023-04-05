import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import LangLogo from "@/assets/svg/lang_logo";
import MenuLogo from "@/assets/svg/menu_logo";
import AvatarLogo from "@/assets/svg/avatar_logo";
const HeaderRight = memo(() => {
  const [switcher, SetSwitcher] = useState(false);
  useEffect(() => {
    function windowHandler() {
      
        SetSwitcher(false);

    }
    
     window.addEventListener("click", windowHandler);
    return () => {
      window.removeEventListener("click", windowHandler);
    };
  }, []);

  function switcherHandler(e) {
    e.stopPropagation();
    SetSwitcher(!switcher);
  
    
  }
  return (
    <RightWrapper>
      <div className="btn">
        <span>login</span>
        <span>register</span>
        <span>
          <LangLogo />
        </span>
      </div>
      <div className="profile">
        <div className="user" onClick={(e)=>switcherHandler(e)}>
          <span className="menu">
            <MenuLogo />
          </span>
          <span className="avatar">
            <AvatarLogo />
          </span>
        </div>

        {switcher && (
          <div className="panel">
            <div className="top">
              <b className="item">Sign Up</b>
              <span className="item">Log in</span>
            </div>
            <div className="bottom">
              <span className="item">Airbnb your home</span>
              <span className="item">Host an experience</span>
              <span className="item">Help</span>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
