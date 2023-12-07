const InputField = (props) => {
  const { value, onChange, placeholder, endIcon } = props;
  return (
    <div className="w-full h-full border-[1px] focus:border-blue-400 rounded-full p-2 flex items-center">
      <input
        type="text"
        className={`w-full h-full px-[20px] pb-[4px] font-medium text-blue-600 text-[20px] outline-none ${
          endIcon && "border-r-[1px] mr-2"
        }`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {endIcon && endIcon}
    </div>
  );
};

export default InputField;
