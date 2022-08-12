import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const virtualRootElement = createRoot(rootElement);

virtualRootElement.render(<App />);

function App() {
  return (
    <>
      <Header />
      <Greeting />
    </>
  );
}

function Greeting() {
  return (
    <div>
      <img src="https://fakeimg.pl/350x200/?text=Hello" />
      <span>dear React apprentice !</span>
    </div>
  );
}

function Header() {
  return <h1>Welcome to the React universe</h1>;
}
