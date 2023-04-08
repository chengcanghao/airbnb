import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./children-components/home-banner";
import { HomeWrapper } from "./style";
import HomeSectionV1 from "./children-components/home-section-v1";
import HomeSectionV2 from "./children-components/home-section-v2";
import { objectEmptyOrNot } from "@/utilities";
const Home = memo(() => {
  const { highCPInfo, highScoreInfo, discountInfo, recommendInfo } =
    useSelector((state) => {
      return {
        highCPInfo: state.home.highCPInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
      };
    }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {objectEmptyOrNot(discountInfo) && (
          <HomeSectionV2 infoData={discountInfo} itemWidth={100 / 6} />
        )}{" "}
          {objectEmptyOrNot(recommendInfo) && (
          <HomeSectionV2 infoData={recommendInfo} itemWidth={100 / 6} />
        )}{" "}
        {objectEmptyOrNot(discountInfo) && (
          <HomeSectionV1 infoData={highCPInfo} itemWidth={20} />
        )}
        {objectEmptyOrNot(discountInfo) && (
          <HomeSectionV1 infoData={highScoreInfo} itemWidth={20} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
