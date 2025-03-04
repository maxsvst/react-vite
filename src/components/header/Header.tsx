import { Button } from "antd";
import { Link, Outlet, useLocation } from "react-router";

import { logout } from "../../api/mockData";

import styles from "./Header.module.scss";

export const Header = () => {
  const { pathname } = useLocation();
  const isProfile = pathname === "/profile";

  const getData = async () => {
    const token = localStorage.getItem("token");
    try {
      await logout(token!);
    } catch (error) {
      console.error(error);
    }
  };

  const signoutHandler = async () => {
    await getData();
    localStorage.clear();
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <Link to="/">
          <Button>About us</Button>
        </Link>
        {!isProfile && (
          <Link to="/signin">
            <Button>Sign in</Button>
          </Link>
        )}
        {isProfile && (
          <Link to="/profile">
            <Button>Profile</Button>
          </Link>
        )}
        {isProfile && (
          <Link to="/">
            <Button onClick={signoutHandler}>Sign out</Button>
          </Link>
        )}
      </div>
      <Outlet />
    </div>
  );
};
