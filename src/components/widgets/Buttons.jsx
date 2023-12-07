import { IoSendSharp } from "react-icons/io5";

export const CreateBtn = (props) => {
  const { onClick } = props;
  return (
    <div className="w-full h-full">
      <button
        className="flex items-center justify-center w-full h-full border-[1px] border-blue-600 p-[10px] rounded-[10px] text-blue-600 hover:text-white hover:bg-blue-600 active:bg-blue-500"
        onClick={onClick}
      >
        <IoSendSharp size={30} />
      </button>
    </div>
  );
};
