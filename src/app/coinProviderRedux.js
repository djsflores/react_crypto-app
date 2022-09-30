import { createSlice } from '@reduxjs/toolkit';

const coinSlice = createSlice({
  name: 'coin',
  initialState: {},
  reducers: {
    setCoin(state, action) {
      // console.log('action: ', action);
      state.results = action.payload;
    },
  },
});
// para el dispatch
export const { setCoin } = coinSlice.actions;
// para el configure
export default coinSlice.reducer;
