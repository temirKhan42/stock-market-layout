import Stocks from '../pages/Stocks';
import { createBrowserRouter, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Home Page</h1>
        <Link to="stocks/1">Stocks</Link>
      </div>
    ),
  },
  {
    path: "stocks/:id",
    element: <Stocks />,
  },
]);

export default router;
