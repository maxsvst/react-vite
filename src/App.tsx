import { BrowserRouter, Route, Routes } from "react-router";

import { WelcomeScreen } from "./pages/welcome-screen/WelcomeScreen";

import styles from "./App.module.scss";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
