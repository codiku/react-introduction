import { Greetings } from "./Greetings";

export function App() {
  return (
    <div>
      <h1>Welcome to the React world</h1>
      <Greetings
        firstName={"Rachel"}
        lastName={"Green"}
        age={30}
        car={{ brand: "Viper", color: "red", speed: 200 }}
        doSomething={function () {
          console.log("BBLABAEALZKELAZKE");
        }}
      >
        <img src="https://picsum.photos/200/300" />
      </Greetings>
    </div>
  );
}
