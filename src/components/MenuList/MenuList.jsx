import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
export function MenuList(props) {
  return (
    <div className={s.container}>
      <MenuListItem
        isSelected={props.difficulty === "Low"}
        onClick={props.onItemClick}
        difficulty="Low"
      />
      <MenuListItem
        isSelected={props.difficulty === "Medium"}
        onClick={props.onItemClick}
        difficulty="Medium"
      />
      <MenuListItem
        isSelected={props.difficulty === "High"}
        onClick={props.onItemClick}
        difficulty="High"
      />
      <MenuListItem
        isSelected={props.difficulty === "Insane"}
        onClick={props.onItemClick}
        difficulty="Insane"
      />
    </div>
  );
}
