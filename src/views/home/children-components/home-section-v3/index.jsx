import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeSectionV3Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LongForItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeSectionV3 = memo((props) => {
  const { infoData, itemWidth } = props;
  return (
    <HomeSectionV3Wrapper>
      <div className="longFor">
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
        <ScrollView>
          <div className="items">
            {infoData.list.map((item) => {
              return (
                <div key={item.picture_url}>
                  <LongForItem infoData={item} itemWidth={itemWidth} />
                </div>
              );
            })}
          </div>
        </ScrollView>
      </div>
    </HomeSectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
