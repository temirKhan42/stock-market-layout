import { useNavigate } from "react-router-dom";
import style from './navbar.module.css';
import Logo from "../../components/logo/Logo";
import Nav from "../../components/nav/Nav";
import UserIcon from "../../components/user-icon/UserIcon";
import Button from "../../ui/Button";


function Navbar() {
  const navigate = useNavigate();

  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate('/');    
  }

  return (
    <div className={style.navbar}>
      <Logo></Logo>
      <Nav></Nav>
      <div className="flex ai-c">
        <div className={style['user-icon']}>
          <UserIcon></UserIcon>
        </div>
        <Button title={'Get started'} handleClick={handleGetStarted} />
      </div>
    </div>
  );
}

export default Navbar;
