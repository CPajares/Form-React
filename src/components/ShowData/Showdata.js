import { useContext } from "react";
import FormContext from "../../context/Form";

const ShowData = () => {
  const { data } = useContext(FormContext);
  return (
    <>
      <div className="alert alert-info">
        <h1>{data.name}</h1>
        <h1>{data.surname}</h1>
        <h1>{data.birthday}</h1>
        <h1>{data.email}</h1>
        <h1>{data.username}</h1>
      </div>
    </>
  );
};

export default ShowData;
