const Button = ({ text, classB, onClick }) => {
  return (
    <>
      <button type="button" className={classB} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
