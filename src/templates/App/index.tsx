
import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { CardProps } from "../../components/Card";
import {foods, fruts, animal} from "../../data/cards"
import { Game } from "../Game";
import { Menu } from "../Menu";
import "./styles.css";

export function App() {
  let navigate = useNavigate();
  const [choice, setChoice] = useState<CardProps[]>([]);

  return (
    <div className="app">
      <div className="title">
        <h1>Memory Game </h1>
      </div>
        <Routes>
          <Route path="/" element={<Menu choice={setChoice} />} />
          <Route path="/game" element={<Game cards={choice}/>} />
        </Routes>
    </div>
  )
}

