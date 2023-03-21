import React, { useEffect, useState } from "react"
import style from './table.module.css';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export function Table() {
  const [stockList, setStockList] = useState([]);
  const location = useLocation();
  const stocks = useSelector((state) => state.stockSlice.stocks)

  useEffect(() => {
    const currentStockUnit = parseInt(location.pathname.split('/').reverse()[0]);
    console.log(stocks);
    setStockList(stocks[currentStockUnit-1]);
  },[stockList]);

  const pretifyNum = (num) => {
    const n = `${num}`;
    if (n.length < 4) return n;
    if (n.length < 7) return `${num/1000}K`;
    if (n.length < 10) return `${num/1000_000}M`;
    if (n.length < 13) return `${num/1000_000_000}B`;
    if (n.length < 16) return `${num/1000_000_000_000}T`;
    if (n.length < 19) return `${num/1000_000_000_000_000}Q`;
  }

  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead className={style['table-head']}>
          <tr>
            <th scope="col" className={style['cell-front']}>Ticker</th>
            <th scope="col">Price</th>
            <th scope="col">Time</th>
            <th scope="col">Low Price</th>
            <th scope="col">Time</th>
            <th scope="col">Hight Price</th>
            <th scope="col">Time</th>
            <th scope="col">Change % 1D</th>
            <th scope="col">Change D</th>
            <th scope="col">YTD Change</th>
            <th scope="col">Volume 1D</th>
            <th scope="col">Volume * Price 1D</th>
            <th scope="col">Market cap</th>
            <th scope="col">52-Week Low</th>
            <th scope="col">52-Week High</th>
          </tr>
        </thead>
        {/* <tbody className={style['table-body']}>
          {stockList.length > 0 ?
            stockList.map((stock) => {
              const currency = stock?.currency;
              const avgTotalVolume = pretifyNum(parseInt(stock?.avgTotalVolume));
              const volTimesPrice = pretifyNum(parseInt(stock?.avgTotalVolume) * parseInt(stock?.latestPrice));
              const marketCap = pretifyNum(parseInt(stock?.marketCap));
              return (
                <tr key={stock?.symbol}>
                  <th scope="row" className={style['cell-front']}>
                    <Link href={"#"} className={style.link}>{stock?.symbol}</Link>
                    <span>{stock?.companyName}</span>
                  </th>
                  <td>
                    <span>{stock?.latestPrice}</span> <span className={style.currency}>{currency}</span>
                  </td>
                  <td>
                    <span>{stock?.latestTime}</span>
                  </td>
                  <td>
                    <span>{stock?.low}</span> <span className={style.currency}>{currency}</span>
                  </td>
                  <td>
                    <span>{stock?.lowTime}</span>
                  </td>
                  <td>
                    <span>{stock?.high}</span> <span className={style.currency}>{currency}</span>
                  </td>
                  <td>
                    <span>{stock?.highTime}</span>
                  </td>
                  <td>
                    <span>{stock?.changePercent}%</span>
                  </td>
                  <td>
                    <span>{stock?.change}</span> <span className={style.currency}>{currency}</span>
                  </td>
                  <td>
                    <span>{stock?.ytdChange}</span> <span className={style.currency}>{currency}</span>
                  </td>
                  <td>
                    <span>{avgTotalVolume}</span>
                  </td>
                  <td>
                    <span>{volTimesPrice}</span>
                  </td>
                  <td>
                    <span>{marketCap}</span> <span className={style.currency}>{currency}</span>
                  </td>
                  <td>
                    <span>{stock?.week52High}</span>
                  </td>
                  <td>
                    <span>{stock?.week52Low}</span>
                  </td>
                </tr>
              )
            }) : null
          }
        </tbody> */}
        {stocks ? console.log(stocks) : null}
      </table>
    </div>
  )
}