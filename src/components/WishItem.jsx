import { useState } from "react";
import { UpdateWishItem, DeleteWishItem } from "../utills";
import { InputField } from "./widgets";
import { MdEdit, MdClose } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";

const WishItem = (props) => {
  const { item, onEdit, edit } = props;
  const [isChecked, setIsChecked] = useState(item?.is_complete || false);
  const [wishText, setWishText] = useState(item?.title);

  const handleCheckBox = async (e, id) => {
    const checked = e.target.checked;
    // setIsChecked(checked);
    const wishItem = {
      name: item?.title,
      description: item?.description,
      is_complete: checked,
    };
    await UpdateWishItem(id, wishItem);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setWishText(e.target.value);
  };
  const handleDelete = async (id) => {
    await DeleteWishItem(id);
  };

  const handleEdit = async () => {
    onEdit("");
    const wishItem = {
      name: wishText,
      description: item?.description,
      is_complete: false,
    };
    await UpdateWishItem(item?.id, wishItem);
  };

  return (
    <div className="relative w-full h-full">
      <div className="border-[2px] w-full h-auto px-[20px] py-[30px] rounded-[10px] flex justify-between items-center">
        <div className="flex gap-3">
          <input
            type="checkbox"
            name={item.title}
            className="w-[30px]"
            checked={isChecked}
            onChange={(e) => handleCheckBox(e, item?.id)}
          />
          <div
            className={`font-medium text-[20px] ${
              isChecked && edit !== item?.id && "line-through text-gray-500"
            }`}
          >
            {edit === item?.id ? (
              <InputField
                value={wishText}
                onChange={handleChange}
                endIcon={
                  <IoSendSharp className="text-blue-600" onClick={handleEdit} />
                }
              />
            ) : (
              item?.title
            )}
          </div>
        </div>
        <div className="flex gap-5 duration-300">
          {edit === item?.id ? (
            <button onClick={() => onEdit("")}>
              <MdClose size={30} className="text-blue-600" />
            </button>
          ) : (
            <button onClick={() => onEdit(item?.id)}>
              <MdEdit size={25} className="text-blue-600" />
            </button>
          )}
          <button onClick={() => handleDelete(item?.id)}>
            <IoMdTrash size={25} className="text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishItem;
