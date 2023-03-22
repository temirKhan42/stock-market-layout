import style from './button.module.css'

function Button(props) {
  const title = props?.title;
  const handleClick = props?.handleClick;

  const handler = (e) => {
    e.preventDefault();
    handleClick();    
  }

  return (
    <div className={style.button} onClick={handler}>
      <button>{title}</button>
    </div>
  );
}

export default Button;
