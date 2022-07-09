import "./styles.css";
import Counter from "./session01/Counter";

export default function App() {
  return (
    <div>
      <Counter diff={1} />
      <Counter diff={10} />
      <Counter diff={20} />
    </div>
  );
}
