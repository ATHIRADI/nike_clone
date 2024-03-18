// eslint-disable-next-line react/prop-types
const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none text-lg 
      ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : " bg-coral-red text-white border-coral-red"
      }  rounded-full ${fullWidth && "w-full"}"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="w-5 h-5 ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
