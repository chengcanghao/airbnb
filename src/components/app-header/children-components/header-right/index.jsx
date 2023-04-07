import React, { memo } from "react";
import { RightWrapper } from "./style";
import LangLogo from "@/assets/svg/lang_logo";
import MenuListComposition from "../header-menu";
const HeaderRight = memo(() => {
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
        <MenuListComposition />
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
