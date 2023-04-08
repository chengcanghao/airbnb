import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { HomeSectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData, itemWidth } = props;
  const tabNames = infoData.dest_address.map((item) => item.name);
  const tabChangeHandler = useCallback((item) => {
    setCity(item);
  }, []);
  const [city, setCity] = useState(tabNames[0]);
  return (
    <HomeSectionV2Wrapper>
      <div className="discount">
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
        <SectionTabs tabNames={tabNames} tabChange={tabChangeHandler} />
        <SectionRooms
          roomList={infoData.dest_list[city]}
          itemWidth={itemWidth}
        />
        <SectionFooter name={city} />
      </div>
    </HomeSectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
