import { useState } from "react";
import "./App.css";
import FirstPageForm from "./components/FirstPageForm/FirstPageForm";
import Login from "./components/Login/Login";
import SecondPageForm from "./components/SecondPageForm/SecondPageForm";
import FormContext from "./context/Form";

function App() {
  const [pageState, setPageState] = useState(0);

  const [data, setData] = useState({
    name: "",
    lastname: "",
    birthday: "",
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });

  const initialData = {};

  const next = () => {
    if (pageState >= 0 && pageState < 2) {
      setPageState(pageState + 1);
    }
  };

  const onChangeprueba = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const previous = () => {
    if (pageState >= 1 && pageState <= 2) {
      setPageState(pageState - 1);
    }
  };

  return (
    <>
      <FormContext.Provider
        value={{
          onChangeprueba,
          data,
          next,
          previous,
          pageState,
          setPageState,
        }}
      >
        {pageState === 0 && <FirstPageForm />}
        {pageState === 1 && <SecondPageForm />}
        {pageState === 2 && <Login />}
      </FormContext.Provider>
    </>
  );
}

export default App;
