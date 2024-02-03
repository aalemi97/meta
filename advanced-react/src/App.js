import { Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import DessertsList from "./Desserts/DessertsList";
import ControlledForms from "./Form/ControlledForms";
import ThemeSwitcher from "./Theme/Theme";
import { ThemeProvider } from "./Theme/ThemeContext";
import GiftCard from "./Gift/GiftCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">
          Main
        </Link>
        <Link to="/dessert-list" className="nav-item">
          Desserts
        </Link>
        <Link to="/controlled-forms" className="nav-item">
          Sing up
        </Link>
        <Link to="/theme-switcher" className="nav-item">
          Theme
        </Link>
        <Link to="/gift" className="nav-item">
          Gift
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/dessert-list" element={<DessertsList />}></Route>
        <Route path="/controlled-forms" element={<ControlledForms />}></Route>
        <Route
          path="/theme-switcher"
          element={
            <ThemeProvider>
              <ThemeSwitcher />
            </ThemeProvider>
          }
        ></Route>
        <Route path="/gift" element={<GiftCard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
