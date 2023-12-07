const PopOver = (props) => {
  const { isOpen = false, id } = props;
  const handleEdit = () => {
    console.log(`edit ${id}`);
  };
  const handleDelete = () => {
    console.log(`delete ${id}`);
  };
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } w-[200px] h-[80px] shadow-md flex justify-between items-center rounded-[10px]`}
    >
      <button
        className="w-full h-full flex items-center justify-center"
        onClick={handleEdit}
      >
        Edit
      </button>
      <div className="h-[50px] border-[1px] flex items-center justify-center"></div>
      <button
        className="w-full h-full flex items-center justify-center"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default PopOver;
