import MenuListItem from "./../MenuListItem/MenuListItem";
import s from "./style.module.css";

const MenuList = (props) => {
  return (
    <div className={s.menu_root}>
      <MenuListItem
        onItemClick={props.onMenuItemClick}
        difficulty="Low"
        isSelected={props.selectedDifficulty === "Low"}
      />
      <MenuListItem
        onItemClick={props.onMenuItemClick}
        difficulty="Medium"
        isSelected={props.selectedDifficulty === "Medium"}
      />
      <MenuListItem
        onItemClick={props.onMenuItemClick}
        difficulty="Hard"
        isSelected={props.selectedDifficulty === "Hard"}
      />
      <MenuListItem
        onItemClick={props.onMenuItemClick}
        difficulty="Insane"
        isSelected={props.selectedDifficulty === "Insane"}
      />
    </div>
  );
};

export default MenuList;
