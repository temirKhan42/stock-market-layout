import { useState } from "react";
import style from './userIcon.module.css';

function UserIcon() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={style['user-icon']}>
      <div className={style['icon']} onClick={handleClick}>
        <img src="/user-icon.svg" alt="user icon" width={28} height={28} />
      </div>
      {isMenuOpen ?
        <div className={style.menu}>
          <ul>
            <li className={style['menu-icon']}>
              <img src="/user-icon-blue.svg" alt="user icon" />
              <span>Sign in</span>
            </li>
          </ul>
          <ul>
            <li><span>Help center</span></li>
            <li><span>What's new</span></li>
          </ul>
        </div> : null
      }
    </div>
  );
}

export default UserIcon;
