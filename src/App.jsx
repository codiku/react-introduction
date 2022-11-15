import { Greetings } from "./Greetings";

export function App() {
  return (
    <>
      <h1>Hello to the React world</h1>
      <Greetings
        firstName={"Rachel"}
        age={50}
        car={{ color: "red", vitess: 300 }}
        doSomething={function () {
          console.log("Hello");
        }}
        sunny={false}
      >
        <img src="https://i.picsum.photos/id/607/200/300.jpg?hmac=ZEvzqI62NudR3rgqTkRZzFnlEeOt9z-b_i8VdLoTgoI" />
      </Greetings>
    </>
  );
}
