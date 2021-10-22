import { useState } from "react";
import "./App.css";
import FirstPageForm from "./components/FirstPageForm/FirstPageForm";
import Login from "./components/Login/Login";
import SecondPageForm from "./components/SecondPageForm/SecondPageForm";
import FormContext from "./context/Form";

function App() {
  const [pageState, setPageState, nextButton] = useState(0);

  const next = () => {
    setPageState(pageState + 1);
  };

  return (
    <>
      <FormContext.Provider value={{ next, pageState, setPageState }}>
        <form className="form-group">
          {pageState === 0 && <FirstPageForm />}
          {pageState === 1 && <SecondPageForm />}
          {pageState === 2 && <Login />}
        </form>
      </FormContext.Provider>
    </>
  );
}

export default App;
