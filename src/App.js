import "./App.css";
import FirstPageForm from "./components/FirstPageForm/FirstPageForm";
import FormContext from "./context/Form";

function App() {
  return (
    <>
      <FormContext.Provider value={"b"}>
        <div className="form-group">
          <FirstPageForm />
        </div>
      </FormContext.Provider>
    </>
  );
}

export default App;
