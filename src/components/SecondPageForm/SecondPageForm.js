import { useContext } from "react";
import FormContext from "../../context/Form";
import ButtonB from "../Button/Button";

const SecondPageForm = () => {
  const { next, previous, setPageState } = useContext(FormContext);

  const previousDefault = () => {
    previous();
  };

  const handleSubmit = () => {
    next();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          2<label htmlFor="userName">User Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Example input"
            autoComplete="off"
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
