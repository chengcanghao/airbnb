import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import classNames from "classnames";
import { FiltersWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
const Filters = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandler(item) {
    let newItems = [...selectItems];
    // if (newItems.includes(item)) {
    //   newItems = newItems.filter((element) => {
    //     return element !== item;
    //   });
    // } else {
    //   newItems.push(item);
    // }

    if (newItems.includes(item)) {
      const index = newItems.indexOf(item);
      newItems.splice(index, 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }
  return (
    <FiltersWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandler(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FiltersWrapper>
  );
});

Filters.propTypes = {};

export default Filters;
