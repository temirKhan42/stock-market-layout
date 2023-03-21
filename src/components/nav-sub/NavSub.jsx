import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./nav-sub.module.css";

function NavSub() {
  const navigate = useNavigate();

  const navList = [
    'overview', 
    'snaps', 
    'news', 
    'ideas', 
    'stocks', 
    'earning calendar', 
    'sector & industry'
  ];

  const handleClick = (e) => {
    e.preventDefault();
    navigate('#');    
  }

  return (
    <div className={style.nav}>
      <ul>
        {navList.map((item, i) => {
          return (
            <li key={i} className={style['nav-item']}>
              <Link to="#" onClick={handleClick}>{item}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default NavSub;
