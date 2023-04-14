import React, { memo, useState } from "react";
import { CenterWrapper } from "./style";
import SearchLogo from "@/assets/svg/search_logo";
import searchTitles from "@/assets/data/search_titles";
import SearchTabs from "./children-components/search-tabs";

const HeadCenter = memo(() => {
  const [tabIndex, setTabIndex] = useState(0);
  const titles = searchTitles.map((item) => item.title);

  return (
    <CenterWrapper>
      {/* <div className="search-bar">
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
    </div> */}
      <div className="search-detail">
        <SearchTabs titles={titles} tabClick={(index)=>setTabIndex(index)} />
      </div>
    </CenterWrapper>
  );
});

export default HeadCenter;
