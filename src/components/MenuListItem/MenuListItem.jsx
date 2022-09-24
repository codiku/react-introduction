import s from "./style.module.css";
import { useState } from "react";

const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const activate = () => {
    setIsHovered(true);
  };
  const deactivate = () => {
    setIsHovered(false);
  };

  const onClick = () => {
    props.onItemClick(props.difficulty);
  };

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      if (props.isSelected) {
        return "#26baea";
      } else {
        return "#eff0ef";
      }
    }
  };
  return (
    <div
      className={s.item_root}
      style={{ backgroundColor: getBackgroundColor() }}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onClick={onClick}
    >
      Set to : {props.difficulty}
    </div>
  );
};

export default MenuListItem;
