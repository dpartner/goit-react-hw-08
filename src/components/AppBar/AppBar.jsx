import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.navigation}>
          <Navigation isLogin={isLoggedIn} user={user} />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
