import { createSlice } from '@reduxjs/toolkit';

const coinSlice = createSlice({
  name: 'coin',
  initialState: {},
  reducers: {
    setCoin(state, action) {
      console.log('action: ', action);
      state.results = action.payload;
    },
  },
});
export const { setCoin } = coinSlice.actions;
export default coinSlice.reducer;
