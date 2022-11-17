import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { DIFFICUTLIES } from "./constant";

export function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={s.container}>
      {DIFFICUTLIES.map((diff) => {
        return (
          <MenuListItem
            onClick={onItemClick}
            difficulty={diff}
            isSelected={difficulty === diff}
          />
        );
      })}
    </div>
  );
}
