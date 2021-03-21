function Btn({ text, bgColor, textColor, extraClass, onClick }) {
  return (
    <button onClick={onClick} className={`${bgColor} ${textColor} ${extraClass} py-2 px-5 rounded hover:bg-opacity-80`}>
      {text}
    </button>
  );
}

export default Btn;
