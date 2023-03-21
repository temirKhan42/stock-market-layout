import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getStockList, getStockDataPerUnit, splitStocksPerUnit } from '../../modules/table'; 


const initialState = {
  stocks: [],
};

export const fetchStocks = createAsyncThunk(
  'stock/fetchStatus',
  async (thunkAPI) => {
    try {
      const list = await getStockList();
      const stocksPerUnit = splitStocksPerUnit(list, 10);
      const symbolsPerUnit = stocksPerUnit
        .filter((s, i) => i < 10)
        .map((stocks) => {
          const symbols = stocks.map((s) => s?.symbol).join();
          return symbols;
        });

      const stocks = symbolsPerUnit.map(async (symbols, i) => {
        try {
          const result = await getStockDataPerUnit(symbols, i);
          return result;
        } catch (err) {
          console.log(err);
          if (err.response.status === 429) {
            return await getStockDataPerUnit(symbols, i+5);
          }
        } 
      });
      return await Promise.all(stocks);
    } catch(err) {
      throw err;
    }
  },
);

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchStocks.fulfilled, (state, action) => {
      const stocks = action.payload.reduce((acc, list) => {
        return Array.isArray(list) ? [...acc, ...list] : acc;
      }, []);
      const stocksPerTen = splitStocksPerUnit(stocks);
      console.log(stocksPerTen)
      return { stocks: stocksPerTen };
    });
  },
});

export const { addToStocks } = stockSlice.actions;

export default stockSlice.reducer;
