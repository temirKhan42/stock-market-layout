import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./nav.module.css";

function Nav() {
  const navigate = useNavigate();

  const navList = ['products', 'community', 'markets', 'news', 'brokers', 'more'];

  const handleClick = (e) => {
    e.preventDefault();
    navigate('#');    
  }

  return (
    <div className="nav">
      <ul className="flex">{navList.map((item, i) => {
        return (
          <li key={i}>
            <Link to="#" onClick={handleClick} className={style['nav-item']}>{item}</Link>
          </li>
        )
      })}</ul>
    </div>
  );
}

export default Nav;
