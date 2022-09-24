import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./components/MenuList/MenuList";
import s from "./style.module.css";
import { useState } from "react";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 100 }}>
        Choose your React course difficulty
      </h1>
      <div className={s.root}>
        <MenuList
          selectedDifficulty={currentDifficulty}
          onMenuItemClick={setCurrentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
