import { getStocksData } from "../server";
import _ from "lodash";

export const splitStocksPerUnit = (list, unit = 10) => {
  const newList = [];
  for (let i = 1; i <= Math.ceil(list.length/unit); i+=1) {
    newList[i-1] = list.slice((i-1)*unit, i*unit);
  }
  return newList;
}

export const getStockDataPerUnit = async (symbols) => {
  try {
    const delay = 500;
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = getStocksData(symbols);
        resolve(data);
      }, delay);
    })
  } catch(err) {
    throw err;
  }
}

export const getPageStocks = async (currentPageIndex, symbols) => {
  let newSymbols = symbols;
  
  const r = async (stocks, lostSymbols) => {
    if (stocks.length === 10) return stocks;

    if (lostSymbols.length > 0) {
      newSymbols = _.difference(newSymbols, lostSymbols);
    } 

    const list = splitStocksPerUnit(newSymbols, 10);
    const symbolsToGet = list[currentPageIndex-1]?.join();
    const stocksData = await getStockDataPerUnit(symbolsToGet);

    const losted = _.difference(list[currentPageIndex-1], stocksData.map((s) => s?.symbol))
    return r(stocksData, losted);
  }

  const result = await r([], []);

  return [result, newSymbols];
}
