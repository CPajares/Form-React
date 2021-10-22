const ButtonB = ({ text, classB, onClick }) => {
  return (
    <>
      <button type="submit" className={classB} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default ButtonB;
