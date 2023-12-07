import { HiOutlineDotsVertical } from "react-icons/hi";

const ActionDots = (props) => {
  const { onClick } = props;
  return (
    <div className="cursor-pointer rounded-full h-[40px] w-[40px] active:bg-gray-50 flex justify-center items-center">
      <HiOutlineDotsVertical size={30} />
    </div>
  );
};

export default ActionDots;
