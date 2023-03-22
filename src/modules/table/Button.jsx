import style from './button.module.css'
import { Link } from 'react-router-dom';

function Button(props) {
  const title = props?.title;
  const path = props?.path;

  return (
      <Link className={style.button} to={path}>{title}</Link>
  );
}

export default Button;
