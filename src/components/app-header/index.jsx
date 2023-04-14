import React, {memo, useState} from "react";
import {HeaderWrapper, SearchAreaWrapper} from "./style.jsx";
import HeaderLeft from "./children-components/header-left/index.jsx";
import HeadCenter from "./children-components/header-center/index.jsx";
import HeaderRight from "./children-components/header-right/index.jsx";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

const AppHeader = memo(() => {
  const [isSearch,setIsSearch] = useState(false)
  const { headerConfig } = useSelector((state) => {

    return {
      headerConfig: state.main.headerConfig,
    };
  }, shallowEqual);
  return (
    <HeaderWrapper className={classNames({ fixed: headerConfig.isFixed })}>
      <div className="content">
        <div className="top">
          {" "}
          <HeaderLeft />
          <HeadCenter isSearch={isSearch} searchBarClick={e=>setIsSearch(true)}/>
          <HeaderRight />
        </div>
        <SearchAreaWrapper isSearch={isSearch}/>
        </div>
      {isSearch&&<div className="mask" onClick={e=>setIsSearch(false)}></div>}
    </HeaderWrapper>
  );
});

export default AppHeader;
