import { useContext } from "react";
import FormContext from "../../context/Form";
import ButtonB from "../Button/Button";

const SecondPageForm = () => {
  const { setPageState } = useContext(FormContext);
  return (
    <>
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
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
        onClick={() => setPageState(-1)}
      />
      <ButtonB
        type="submit"
        text={">>"}
        className={"btn btn-info"}
        onClick={() => setPageState(+1)}
      />
    </>
  );
};

export default SecondPageForm;
