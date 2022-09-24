import s from "./style.module.css";

const DisplayDifficulty = (props) => {
  return (
    <div className={s.difficulty_root}>
      Difficulty set to {props.difficulty}
    </div>
  );
};

export default DisplayDifficulty;
