import { Button } from "antd";
import { Link, Outlet, useLocation } from "react-router";

import styles from "./Header.module.scss";

export const Header = () => {
  const { pathname } = useLocation();
  const isProfile = pathname === "/profile";

  return (
    <div>
      <div className={styles.headerContainer}>
        <Link to="/info">
          <Button>About us</Button>
        </Link>
        {!isProfile && (
          <Link to="/signin">
            <Button>Sing in</Button>
          </Link>
        )}
        {isProfile && (
          <Link to="/">
            <Button>Profile</Button>
          </Link>
        )}
        {isProfile && (
          <Link to="/">
            <Button>Sign out</Button>
          </Link>
        )}
      </div>
      <Outlet />
    </div>
  );
};
