import { useState } from "react";
import s from "./style.module.css";
export const MenuListItem = (props) => {
  const [isHovered, setIsHover] = useState(false);

  const activate = () => {
    setIsHover(true);
  };
  const deactivate = () => {
    setIsHover(false);
  };

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      return "#eff0ef";
    }
  };
  return (
    <div
      className={s.container}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to : {props.difficulty}
    </div>
  );
};
