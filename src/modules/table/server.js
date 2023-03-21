import axios from 'axios';

const token = 'pk_aa21db120dbe4da3aea551aa35faf0f0';

export async function getStockList() {
  try {
    console.log('server getStockList');
    const res = await axios.get(`https://cloud.iexapis.com/stable/ref-data/symbols?token=${token}`);
    return res?.data;
  } catch(error) {
    console.log(error);
  };
}

export async function getStocksData(symbols) {
  try {
    const res = await axios.get(`https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote&token=${token}`);
    return Object.values(res?.data).map((stock) => ({...stock?.quote}));
  } catch(error) {
    throw error;
  };
}
