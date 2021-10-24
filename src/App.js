import { useState } from "react";
import "./App.css";
import FirstPageForm from "./components/FirstPageForm/FirstPageForm";
import Login from "./components/Login/Login";
import SecondPageForm from "./components/SecondPageForm/SecondPageForm";
import FormContext from "./context/Form";

function App() {
  const [pageState, setPageState, nextButton] = useState(0);

  const next = () => {
    if (pageState >= 0 && pageState < 2) {
      setPageState(pageState + 1);
    }
  };

  const previous = () => {
    if (pageState >= 1 && pageState < 2) {
      setPageState(pageState - 1);
    }
  };

  return (
    <>
      <FormContext.Provider value={{ next, previous, pageState, setPageState }}>
        {pageState === 0 && <FirstPageForm />}
        {pageState === 1 && <SecondPageForm />}
        {pageState === 2 && <Login />}
      </FormContext.Provider>
    </>
  );
}

export default App;
