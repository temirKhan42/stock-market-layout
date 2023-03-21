import { useNavigate } from "react-router-dom";
import style from './header.module.css';
import NavSub from "../../components/nav-sub/NavSub";

function Header() {


  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.title}>
          <img src="/US.svg" alt="US flag" width={36} height={36} />
          <h1>us stock market</h1>
        </div>
        <div className={style.nav}>
          <NavSub />
        </div>
      </div>
    </div>
  );
}

export default Header;
