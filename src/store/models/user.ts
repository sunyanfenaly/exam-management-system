import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userInfoApi, menuListApi } from '../../services'

export const getUserInfo = createAsyncThunk('getUserInfo', async () => {
  const res =  await Promise.all([userInfoApi(), menuListApi()])
  return {
    userInfo: res[0].data,
    menuList: res[1].data,
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    userInfo: null,
    menuList: []
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserInfo.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.loading = false
        state.userInfo = action.payload.userInfo.data
        state.menuList = action.payload.menuList.data.list
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.loading = false
      })
  }
})

export const {  } = userSlice.actions

export default userSlice.reducer