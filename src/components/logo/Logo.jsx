import { useNavigate } from "react-router-dom";
import style from './logo.module.css';

function Logo() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');    
  }

  return (
    <div className={style.logo} onClick={handleClick}>
      <img src='/logo2.svg' alt='logo' width={36} height={18}  />
    </div>
  );
}

export default Logo;
