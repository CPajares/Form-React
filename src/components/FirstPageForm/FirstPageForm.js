import { useState } from "react";
import { useContext } from "react";
import FormContext from "../../context/Form";

const FirstPageForm = () => {
  const { setData, onChangeprueba, next, data } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    next();
  };
  const onChangeBirthday = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
    setAge(agecalculateAge(event.target.value));
  };

  function agecalculateAge(birthday) {
    let birthday_arr = birthday.split("-").reverse();
    let birthday_date = new Date(
      birthday_arr[2],
      birthday_arr[1] - 1,
      birthday_arr[0]
    );
    let ageDifMs = Date.now() - birthday_date.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  const [age, setAge] = useState(0);

  return (
    <>
      <div className="alert alert-info">Personal Data</div>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
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
            onChange={onChangeBirthday}
            required
          />
          <p>
            Años:
            <span> {age}</span>
          </p>
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
    </>
  );
};

export default FirstPageForm;
