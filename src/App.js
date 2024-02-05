import "./App.css";
import Child from "./Components/Child";

function App() {
  return (
    <>
      <h1>Spiced Chai Recipe</h1>
      <h3>for two</h3>
      <Child key={Child} water={2} />
      <h3>for four</h3>
      <Child key={Child} water={4} />
    </>
  );
}

export default App;
