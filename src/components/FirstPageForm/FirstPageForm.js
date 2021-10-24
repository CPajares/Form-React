import { useContext } from "react";
import FormContext from "../../context/Form";

const FirstPageForm = () => {
  const { onChangeprueba, next, data } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log();
    next();
  };

  return (
    <>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="form-group">
          1<label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            autoComplete="off"
            value={data.name}
            onChange={onChangeprueba}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">LastName:</label>
          <input
            required
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Enter LastName"
            autoComplete="off"
            onChange={onChangeprueba}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            className="form-control"
            id="birthday"
            placeholder="Enter Birthday"
            autoComplete="off"
            onChange={onChangeprueba}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            autoComplete="off"
            onChange={onChangeprueba}
            required
          />
        </div>
        <input
          // onClick={nextDefault}
          type="submit"
          value=">>"
          className={"btn btn-info"}
        />
      </form>
      <pre style={{ textAlign: "left" }}>
        <div>{JSON.stringify(data)}</div>
      </pre>
    </>
  );
};

export default FirstPageForm;
