import React, { memo } from "react";
import { CenterWrapper } from "./style";
import SearchLogo from "@/assets/svg/search_logo";

const HeadCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="textarea">
          <span>Anywhere</span>
          <span>Any Week</span>
          <span>Add guests</span>
        </div>
        <div className="searchBtn">
          <div className="logo">
            <SearchLogo />
          </div>
        </div>
      </div>
    </CenterWrapper>
  );
});

export default HeadCenter;
