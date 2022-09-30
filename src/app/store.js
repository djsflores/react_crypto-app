import { configureStore } from '@reduxjs/toolkit';
import coinSlice from './coinProviderRedux';

const store = configureStore({
  reducer: {
    coin: coinSlice,
  },
  devTools: true,
});
export default store;
