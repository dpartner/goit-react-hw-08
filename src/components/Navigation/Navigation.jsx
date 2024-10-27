import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = ({ isLogin, user }) => {
  return (
    <>
      <div>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      </div>
      {isLogin && <h2>Welcome, {user.name} </h2>}
    </>
  );
};

export default Navigation;
