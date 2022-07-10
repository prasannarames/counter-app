import "./src/styles.css";
import Counter from "./src/session01/counter"

export default function App() {
  return (
    <div>
      <Counter diff={1} />
      <Counter diff={10} />
      <Counter diff={20} />
    </div>
  );
}
