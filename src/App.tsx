import { Route, Routes } from "react-router";

import { Header } from "./components/header/Header";
import { SinginScreen } from "./pages/signin-screen/SigninScreen";
import { ProfileScreen } from "./pages/profile-screen/ProfileScreen";
import { WelcomeScreen } from "./pages/welcome-screen/WelcomeScreen";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<WelcomeScreen />} />
          <Route path="/signin" element={<SinginScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
