import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getStockList } from '../../modules/table'; 


const initialState = {
  symbols: [],
  stocks: [],
};

export const fetchStocks = createAsyncThunk(
  'stock/fetchStatus',
  async (thunkAPI) => {
    try {
      const list = await getStockList();
      return list;
    } catch(err) {
      throw err;
    }
  },
);

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    updateSymbols: (state, action) => {
      state.symbols = action.payload;
    },
    updateStocks: (state, action) => {
      state.stocks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStocks.fulfilled, (state, action) => {
      const list = action.payload.map((i) => i.symbol);
      return { ...state, symbols: list };
    });
  },
});

export const { updateSymbols, updateStocks } = stockSlice.actions;

export default stockSlice.reducer;
