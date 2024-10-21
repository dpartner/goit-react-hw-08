import s from "./Loader.module.css";
import loaderSrc from "../../assets/loader.png";

const Loader = () => {
  return (
    <div className={s.loader}>
      <img className={s.loaderImg} src={loaderSrc} alt="loader" />
    </div>
  );
};

export default Loader;
