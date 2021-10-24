import { useState } from "react";
import { useContext } from "react";
import FormContext from "../../context/Form";
import ButtonB from "../Button/Button";
import ShowData from "../ShowData/Showdata";

const Login = () => {
  const { onChangeprueba, data, previous } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      data.username === data.usernameCheck &&
      data.password === data.passwordCheck
    ) {
      setshowAllDetails(true);
    } else {
      alert("por favor... esa memoria, no coinciden sus datos");
    }
  };

  const [showAllDetails, setshowAllDetails] = useState(false);

  const previousDefault = () => {
    previous();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          3<label htmlFor="usernameCheck">User Name</label>
          <input
            type="text"
            className="form-control"
            id="usernameCheck"
            placeholder="Example input"
            autoComplete="off"
            onChange={onChangeprueba}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordCheck">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordCheck"
            placeholder="Another input"
            required
            autoComplete="off"
            onChange={onChangeprueba}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="rememberPassword"
          />
          <label className="form-check-label" htmlFor="rememberPassword">
            remember password
          </label>
        </div>
        <ButtonB
          text={"<<"}
          className={"btn btn-info"}
          onClick={previousDefault}
        />
        <input
          // onClick={nextDefault}
          type="submit"
          value="Acceder"
          className={"btn btn-info"}
        />
      </form>
      {showAllDetails ? <ShowData /> : ""}
      <pre style={{ textAlign: "left" }}>
        <div>{JSON.stringify(data)}</div>
      </pre>
    </>
  );
};

export default Login;
