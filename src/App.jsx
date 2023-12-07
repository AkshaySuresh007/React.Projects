import { useEffect, useState } from "react";
import { CreateWish, WishList } from "./components";
import { API_PATH, axiosInstance, CreateWishItem } from "./utills";
function App() {
  const [wishLists, setWishLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async (Item) => {
    const wishItem = {
      name: Item,
      description: "description",
      is_complete: false,
    };
    await CreateWishItem(Item);
  };

  const fetchData = async () => {
    setIsLoading(true);
    const response = await axiosInstance.get(API_PATH.WISH_LIST);
    setWishLists(response?.data?.data?.wish_list);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full h-full mt-[15%]">
          <CreateWish onCreate={handleCreate} />
        </div>
        <div className="mt-[10%] w-[50%] h-[500px] overflow-auto">
          <WishList wishItems={wishLists} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
}

export default App;
