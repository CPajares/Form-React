import "./App.css";
import FirstPageForm from "./components/FirstPageForm/FirstPageForm";
import Login from "./components/Login/Login";
import SecondPageForm from "./components/SecondPageForm/SecondPageForm";
import FormContext from "./context/Form";

function App() {
  return (
    <>
      <FormContext.Provider value={"b"}>
        <form className="form-group">
          <Login />
        </form>
      </FormContext.Provider>
    </>
  );
}

export default App;
