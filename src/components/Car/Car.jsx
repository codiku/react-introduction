export function Car(props) {
  const onClick = () => {
    props.onCarClick(2);
  };
  return <p onClick={onClick}>I am the {"<Car/>"}</p>;
}
