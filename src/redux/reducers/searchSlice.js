import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category:1,
  data:[],
  preData:[],
  hasMorePost:true,
  picType:'jpg',
  page:1,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changePicType:(state,action) =>{
      state.picType=action.payload
      state.data=[]
      state.preData=[]
    },
    searchResult:(state,action) =>{
      state.data=state.data.concat(action.payload)
      ++state.page
    },
    addPreData:(state,action) =>{
      state.preData=action.payload
      state.hasMorePost=true
      ++state.page
    },
    ConcatPreData:(state,action) =>{
      state.data=state.data.concat(state.preData)
      state.preData=[]
      state.hasMorePost=false
    },
    ResetSearch:(state,action) =>{
      state.category=1
      state.data=[]
      state.preData=[]
      state.hasMorePost=true
      state.picType='jpg'
      state.page=1
    },
  },
})

export const {changePicType,searchResult,addPreData,ConcatPreData,ResetSearch} = searchSlice.actions

export default searchSlice.reducer