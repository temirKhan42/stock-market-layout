import { getStocksData } from "../server";

export const splitStocksPerUnit = (list, unit = 10) => {
  const newList = [];
  for (let i = 1; i <= Math.ceil(list.length/unit); i+=1) {
    newList[i-1] = list.slice((i-1)*unit, i*unit);
  }
  return newList;
}

export const getStockDataPerUnit = async (symbols, index) => {
  try {
    const delay = (index+1)*1200;
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
