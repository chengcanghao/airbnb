import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./children-components/home-banner";
import { HomeWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import { Button } from "@mui/material";
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
          <ul className="room-list">
            {HighCP.list?.map((item) => {
              return <RoomItem itemData={item} key={item.id} />;
            })}
          </ul>
        </div>
      </div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </HomeWrapper>
  );
});

export default Home;
