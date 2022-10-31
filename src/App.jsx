import "./global.css";
import { Car } from "./components/Car/Car";
import { Greetings } from "./components/Greetings/Greetings";
export function App() {
  return (
    <div>
      <Car />
      <Greetings />
    </div>
  );
}
