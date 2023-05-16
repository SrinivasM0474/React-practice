import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios'
//import { Dispatch } from "react";

export const uniqueTableSlice = createSlice({
name: "uniqueTable",
initialState:{
tableData: [],
},
reducers:{
setTableData: (state,action)=>{
state.tableData= action.payload

}
},
extraReducers: {

}

})
export const {setTableData} = uniqueTableSlice.actions

 export const getAllUniquedata =()=> dispatch =>{
    const URL = process.env.REACT_APP_API_URL;
axios.get(URL)
.then((response) =>{
    console.log(response.data)
    dispatch(setTableData(response.data)) 
    
})


// setTableData(tableData)
// console.log(setTableData(tableData),"dfdfd")
}
export default uniqueTableSlice.reducer;
