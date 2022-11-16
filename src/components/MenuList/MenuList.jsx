import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
export function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={s.container}>
      <MenuListItem
        onClick={onItemClick}
        difficulty="Low"
        isSelected={difficulty === "Low"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="Medium"
        isSelected={difficulty === "Medium"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="High"
        isSelected={difficulty === "High"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="Insane"
        isSelected={difficulty === "Insane"}
      />
    </div>
  );
}
