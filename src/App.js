import "./App.css";
import FormContext from "./context/Form";

function App() {
  return (
    <FormContext.Provider value={"b"}>
      <p>HELLO</p>
    </FormContext.Provider>
  );
}

export default App;
