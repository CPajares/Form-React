import { useContext } from "react";
import FormContext from "../../context/Form";
import ButtonB from "../Button/Button";

const SecondPageForm = () => {
  const { data, onChangeprueba, next, previous } = useContext(FormContext);

  const previousDefault = () => {
    previous();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    data.password === data.repeatPassword
      ? next()
      : alert(
          "haga usted el favor, un poco de seriedad y ponga bien su password"
        );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          2<label htmlFor="username">User Name</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Example input"
            autoComplete="off"
            onChange={onChangeprueba}
            required
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
            onChange={onChangeprueba}
          />
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            type="password"
            className="form-control"
            id="repeatPassword"
            placeholder="Another input"
            required
            autoComplete="off"
            onChange={onChangeprueba}
          />
        </div>

        <ButtonB
          text={"<<"}
          className={"btn btn-info"}
          onClick={previousDefault}
        />

        <input type="submit" value=">>" className={"btn btn-info"} />
      </form>
    </>
  );
};

export default SecondPageForm;
