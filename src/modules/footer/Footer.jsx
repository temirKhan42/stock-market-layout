import { useNavigate } from "react-router-dom";
import style from './footer.module.css';

function Footer() {

  return (
    <div className={style.footer}>
      <div className={style.container}>
        <p>Select market data provided by <a>ICE Data Services</a></p>
        <p>© 2023 TradingView, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
