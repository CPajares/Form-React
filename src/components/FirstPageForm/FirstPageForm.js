import { useContext } from "react";
import FormContext from "../../context/Form";
import ButtonB from "../Button/Button";

const FirstPageForm = () => {
  const { next, setPageState } = useContext(FormContext);

  const nextDefault = () => {};

  const handleSubmit = () => {
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
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">LastName:</label>
          <input
            required
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="emailHelp"
            placeholder="Enter LastName"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            className="form-control"
            id="birthday"
            aria-describedby="emailHelp"
            placeholder="Enter Birthday"
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailAdress">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="emailAdress"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            autoComplete="off"
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
    </>
  );
};

export default FirstPageForm;
