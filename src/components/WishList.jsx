import { useState } from "react";
import WishItem from "./WishItem";
import { Loading } from "./widgets";

const WishList = (props) => {
  const { wishItems, isLoading } = props;
  const [isEdit, setIsEdit] = useState();
  const handleEdit = (id) => {
    setIsEdit(id);
  };
  console.log(isEdit);
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-5 w-full h-auto">
        {isLoading ? (
          <div className="flex mx-auto justify-center items-center">
            <Loading />
          </div>
        ) : wishItems?.length > 0 ? (
          wishItems?.map((item, index) => (
            <div
              className="w-[85%] hover:w-[95%] hover:shadow-md flex mx-auto rounded-[10px] duration-300 cursor-pointer"
              key={index}
            >
              <WishItem item={item} onEdit={handleEdit} edit={isEdit} />
            </div>
          ))
        ) : (
          <p>No Items</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
