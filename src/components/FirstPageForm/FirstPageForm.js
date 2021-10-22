import { render } from "@testing-library/react";

const FirstPageForm = () => {
  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        className="form-control"
        id="name"
        aria-describedby="emailHelp"
        placeholder="Enter Name"
        autoComplete="off"
      />
      <label htmlFor="lastName">LastName:</label>
      <input
        type="text"
        className="form-control"
        id="lastName"
        aria-describedby="emailHelp"
        placeholder="Enter LastName"
        autoComplete="off"
      />
      <label htmlFor="birthday">Birthday:</label>
      <input
        type="text"
        className="form-control"
        id="birthday"
        aria-describedby="emailHelp"
        placeholder="Enter Birthday"
        autoComplete="off"
      />
      <label htmlFor="emailAdress">Email address:</label>
      <input
        type="email"
        className="form-control"
        id="emailAdress"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        autoComplete="off"
      />
    </>
  );
};

export default FirstPageForm;
