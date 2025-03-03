import { useEffect } from "react";

import styles from "./WelcomeScreen.module.scss";

export const WelcomeScreen = () => {
  useEffect(() => {}, []); // getInfo

  const text = "Little story about the company";

  return <h1 className={styles.mainText}>{text}</h1>;
};
