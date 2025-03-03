import { Route, Routes } from "react-router";

import { WelcomeScreen } from "./pages/welcome-screen/WelcomeScreen";

import styles from "./App.module.scss";
import { Header } from "./components/header/Header";
import { SinginScreen } from "./pages/signin-screen/SigninScreen";

function App() {
  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<WelcomeScreen />} />
          <Route
            path="/info"
            element={
              <>
                <div>INFO</div>
              </>
            }
          />
          <Route path="/signin" element={<SinginScreen />} />
          <Route path="/profile" element={<div>PROFILE</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
