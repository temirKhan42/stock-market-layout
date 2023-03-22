import React, { useEffect } from "react"
import style from './table.module.css';
import { useLocation, Link  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPageStocks } from "./utils";
import { updateSymbols, updateStocks } from '../../store/slices/stockSlice.js';
import Button from "./Button";

export function Table() {
  const location = useLocation();
  const { stocks, symbols } = useSelector((state) => state.stockSlice)
  const dispatch = useDispatch();
  const currentPageIndex = parseInt(location.pathname.split('/').reverse()[0]);

  useEffect(() => {
    async function updateStore() {
      const [newStocks, newSymbols] = await getPageStocks(currentPageIndex, symbols);
      dispatch(updateSymbols(newSymbols));
      dispatch(updateStocks(newStocks));
    }

    if (symbols.length > 0) {
      updateStore();
    }
   },[location, symbols]);

  const getLeft = () => {
    const currentPath = location.pathname.split('/').slice(0, -1).join('/');
    return currentPageIndex-1 > 0 ? `${currentPath}/${currentPageIndex-1}` : `${currentPath}/${currentPageIndex}`;
  };

  const getRight = () => {
    const currentPath = location.pathname.split('/').slice(0, -1).join('/');
    return `${currentPath}/${currentPageIndex+1}`;
  };

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
            <th scope="col">Change 1D</th>
            <th scope="col">YTD Change</th>
            <th scope="col">Volume 1D</th>
            <th scope="col">Volume * Price 1D</th>
            <th scope="col">Market cap</th>
            <th scope="col">52-Week Low</th>
            <th scope="col">52-Week High</th>
          </tr>
        </thead>
        <tbody className={style['table-body']}>
          {stocks.length > 0 ?
            stocks.map((stock) => {
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
                    <span>{stock?.latestPrice || 0}</span> <span className={style.currency}>{currency}</span>
                  </td>
                  <td>
                    <span>{stock?.latestTime}</span>
                  </td>
                  <td>
                    <span>{stock?.low || 0}</span> <span className={style.currency}>{currency}</span>
                  </td>
                  <td>
                    <span>{new Date(stock?.lowTime).toLocaleTimeString()}</span>
                  </td>
                  <td>
                    <span>{stock?.high || 0}</span> <span className={style.currency}>{currency}</span>
                  </td>
                  <td>
                    <span>{new Date(stock?.highTime).toLocaleTimeString()}</span>
                  </td>
                  <td>
                    <span>{stock?.changePercent || 0}%</span>
                  </td>
                  <td>
                    <span>{stock?.change || 0}</span> <span className={style.currency}>{currency}</span>
                  </td>
                  <td>
                    <span>{stock?.ytdChange || 0}</span> <span className={style.currency}>{currency}</span>
                  </td>
                  <td>
                    <span>{avgTotalVolume || 0}</span>
                  </td>
                  <td>
                    <span>{volTimesPrice || 0}</span>
                  </td>
                  <td>
                    <span>{marketCap || 0}</span> <span className={style.currency}>{currency}</span>
                  </td>
                  <td>
                    <span>{stock?.week52Low}</span>
                  </td>
                  <td>
                    <span>{stock?.week52High}</span>
                  </td>
                </tr>
              )
            }) : null
          }
        </tbody>
      </table>

      <div className="flex jc-sb">
        <Button title="Left" path={getLeft()} disabled={currentPageIndex-1 === 0} />
        <Button title="Right" path={getRight()} />
      </div>
    </div>
  )
}