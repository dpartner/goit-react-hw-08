import { logout } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className={s.button}
        onClick={() => {
          dispatch(logout());
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
