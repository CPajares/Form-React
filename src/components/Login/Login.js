import { useContext } from "react";
import FormContext from "../../context/Form";
import ButtonB from "../Button/Button";

const Login = () => {
  const { next, previous } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("yes");
  };

  const previousDefault = () => {
    previous();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          3<label htmlFor="userName">User Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Example input"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Another input"
            required
            autoComplete="off"
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
    </>
  );
};

export default Login;
