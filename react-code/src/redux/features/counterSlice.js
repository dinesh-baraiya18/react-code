import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("getPost", async (base_url) => {
  try {
    const res = await fetch(base_url);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    num: 10,
    data: [],
    pending: false,
    error: null,
  },
  reducers: {
    increment: (state, action) => {
      state.num += Number(action.payload);
    },
  },
  // extraReducers: {
  //   [getPost.pending]: (state) => {
  //     state.pending = true;
  //   },
  //   [getPost.fulfilled]: (state, action) => {
  //     state.pending = false;
  //     state.data = action.payload;
  //   },
  //   [getPost.rejected]: (state, action) => {
  //     state.pending = false;
  //     state.error = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.pending = false;
      state.data = action.payload;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.pending = false;
      state.error = action.payload;
    });
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
