import PropTypes from "prop-types";
import React, { memo } from "react";
import { SearchTabsWrapper } from "./style";

const SearchTabs = memo((props) => {
  const { titles, tabClick } = props;
  function tabClickHandler(index) {
    if (tabClick) {
      tabClick(index);
    }
  }
  return (
    <SearchTabsWrapper>
      {titles.map((item, index) => {
        return (
          <div className="item" key={index} onClick={e=>tabClickHandler(index)}>
            <span className="text">{item}</span>
            <span className="bottom"></span>
          </div>
        );
      })}
    </SearchTabsWrapper>
  );
});

SearchTabs.propTypes = {};

export default SearchTabs;
