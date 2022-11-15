export function Greetings(props) {
  console.log("***", props);

  return (
    <ul>
      <li>Hello {props.firstName}</li>
      <li>your are {props.age} years old</li>
      <li>{props.children}</li>
      {props.sunny && <ItsSunny />}
    </ul>
  );
}

function ItsSunny() {
  return <h1>Il fait beau</h1>;
}

function ItsRainy() {
  return <h1>Il pleut</h1>;
}
