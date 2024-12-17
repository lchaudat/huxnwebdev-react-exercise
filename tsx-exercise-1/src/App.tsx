import Button from "./components/Button";

function App() {
  return (
    <Button label="text1" onClick={() => alert("clicked")} disabled={false} />
  );
}

export default App;
