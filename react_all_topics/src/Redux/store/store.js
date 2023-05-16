import { configureStore } from '@reduxjs/toolkit';
import uniqueTableSliceReducer from '../uniqueTableSlice';

const reducer ={
    uniqueTable: uniqueTableSliceReducer,
}
const store = configureStore({
reducer: reducer,
 devTools: true,
})
export default store;