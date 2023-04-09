import {
  getHomeDiscountData,
  getHomeHighCPData,
  getHomeHighScoreData,
  getHomeLongForData,
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
    getHomeLongForData().then((res)=>{
      dispatch(changeLongForAction(res))

    })
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    highCPInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longForInfo:{}
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
    changeLongForAction(state,{payload}){
      state.longForInfo = payload
    }
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
  changeLongForAction
} = homeSlice.actions;
export default homeSlice.reducer;
