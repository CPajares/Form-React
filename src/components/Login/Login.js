import ButtonB from "../Button/Button";

const Login = () => {
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
        onClick={() => console.log("back")}
      />
      <ButtonB
        type="submit"
        text={"Acceder"}
        className={"btn btn-info"}
        onClick={() => console.log("next")}
      />
    </>
  );
};

export default Login;
