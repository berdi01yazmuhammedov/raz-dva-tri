import { Link } from 'react-router-dom';
import styles from './Header.module.scss';


const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <h2>Раз Два Три</h2>
      </Link>

      <nav>
        <ul>
          <Link to={"/lessons"}>
            <li>Уроки</li>
          </Link>
          <Link to={"/train"}>
            <li>Тренажеры</li>
          </Link>
          <Link to={"/accomplishments"}>
            <li>Достижения</li>
          </Link>
          <Link to={"/profile"}>
            <li>Профиль</li>
          </Link>
        </ul></nav>
    </div>
  );
};

export default Header;