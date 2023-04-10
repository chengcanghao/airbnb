import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import Filters from "./children-components/entire-filters";
import Rooms from "./children-components/entire-rooms";
import EntirePagination from "./children-components/entire-pagination";
import { useDispatch } from "react-redux";
import { fetchRoomListData } from "@/store/modules/entire/actionCreators";

const Entire = memo((props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListData());
  }, [dispatch]);
  return (
    <EntireWrapper>
      <Filters />
      <Rooms />
      <div className="pagination"><EntirePagination /></div>
    </EntireWrapper>
  );
});

Entire.propTypes = {};

export default Entire;
