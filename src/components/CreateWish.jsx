import { useState } from "react";
import { CreateBtn, InputField } from "./widgets";

const CreateWish = (props) => {
  const { onCreate } = props;
  const [wishText, setWishText] = useState("");
  const handleCreateBtn = () => {
    wishText && onCreate(wishText);
    setWishText("");
  };

  return (
    <div className="flex gap-5 justify-center w-full h-auto">
      <div className="w-[50%] h-[60px]">
        <InputField
          value={wishText}
          onChange={(e) => {
            e.preventDefault();
            setWishText(e.target.value);
          }}
          placeholder="Enter your wish"
        />
      </div>
      <div className="h-[60px] w-[60px]">
        <CreateBtn onClick={handleCreateBtn} title="make the wish true" />
      </div>
    </div>
  );
};

export default CreateWish;
