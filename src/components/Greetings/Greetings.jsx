import s from "./style.module.css";
export function Greetings() {
  return <p className={`${s.box} ${s.box2} box`}>Salutation</p>;
}
