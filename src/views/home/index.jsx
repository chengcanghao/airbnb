import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./children-components/home-banner";
import { HomeWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
const Home = memo(() => {
  const { HighCP } = useSelector((state) => {
    return { HighCP: state.home.highCP };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="highCP">
          <SectionHeader title={HighCP.title} />
          <SectionRooms roomList = {HighCP.list} />
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
