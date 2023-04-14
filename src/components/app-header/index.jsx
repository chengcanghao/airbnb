import React, { memo } from "react";
import { HeaderWrapper } from "./style.jsx";
import HeaderLeft from "./children-components/header-left/index.jsx";
import HeadCenter from "./children-components/header-center/index.jsx";
import HeaderRight from "./children-components/header-right/index.jsx";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

const AppHeader = memo(() => {
  const {headerConfig} =useSelector((state)=>{
    return {
      headerConfig:state.main.headerConfig
    }
  },shallowEqual)
  return (
    <HeaderWrapper className={classNames({fixed:headerConfig.isFixed})}>
      <HeaderLeft />
      <HeadCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default AppHeader;
