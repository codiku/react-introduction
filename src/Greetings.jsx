export function Greetings(props) {
  return (
    <ul>
      <li>Hello {props.firstName}</li>
      <li>your are {props.age} years old</li>
      <li>{props.children}</li>
      <li>{props.isSunny ? <ItsSunny /> : <ItsRainy />}</li>
    </ul>
  );
}

function ItsSunny() {
  return <h1>Il fait beau</h1>;
}

function ItsRainy() {
  return <h1>Il pleut</h1>;
}
