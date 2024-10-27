import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.section}>
      <h1>Free contact book for you 😎😎😎</h1>
      <Link className={s.button} to="/contacts">
        Let`s start
      </Link>
    </div>
  );
};

export default HomePage;
