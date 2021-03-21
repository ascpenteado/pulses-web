function BtnSmall({ text, bgColor, textColor, extraClass }) {
  return (
    <button className={`${bgColor} ${textColor} ${extraClass} py-1 px-4 rounded hover:bg-opacity-80`}>{text}</button>
  );
}

export default BtnSmall;
