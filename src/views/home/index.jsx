import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./children-components/home-banner";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content"></div>
    </HomeWrapper>
  );
});

export default Home;
