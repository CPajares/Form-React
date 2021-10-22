const ButtonB = ({ text, classB, onClick }) => {
  return (
    <>
      <button className={classB} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default ButtonB;
