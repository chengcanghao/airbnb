import {
  getHomeDiscountData,
  getHomeHighCPData,
  getHomeHighScoreData,
  getHomeRecommendData,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeData",
  (payload, { dispatch }) => {
    getHomeHighCPData().then((res) => {
      dispatch(changeHighCPAction(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreAction(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountAction(res));
    });
    getHomeRecommendData().then((res) => {
      dispatch(changeRecommendAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    highCPInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
  },
  reducers: {
    changeHighCPAction(state, { payload }) {
      state.highCPInfo = payload;
    },
    changeHighScoreAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendAction(state, { payload }) {
      state.recommendInfo = payload;
    },
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.highCP = payload;
  //   },
  // }
});
const {
  changeHighCPAction,
  changeHighScoreAction,
  changeDiscountAction,
  changeRecommendAction,
} = homeSlice.actions;
export default homeSlice.reducer;
