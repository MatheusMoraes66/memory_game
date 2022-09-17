import { Route, Routes } from "react-router-dom";
import { Game } from "../Game";
import { Menu } from "../Menu";
import "./styles.css";

export function App() {

  return (
    <div className="app">
      <div className="title">
        <h1>Memory Game </h1>
      </div>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/game/:id" element={<Game />} />
        </Routes>
    </div>
  )
}

