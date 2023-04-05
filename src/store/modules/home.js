import { getHomeHighCP } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchHomeData", async () => {
  const res = await getHomeHighCP();

  return res;
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    highCP: {},
  },
  reducers: {
    // changeHighCPAction(state, { payload }) {
    //   state.highCP = payload;
    // },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.highCP = payload;
    },
  }
});
// const { changeHighCPAction } = homeSlice.actions;
export default homeSlice.reducer;
