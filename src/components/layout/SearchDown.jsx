import Link from "next/link";

const SearchDown = ({ filterSearch, setSearchValue, setIsOpen, isOpen }) => {
  filterSearch.length = 3;
  const handleclickLink = () => {
    setIsOpen(false);
    setSearchValue("");
  };

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } flex-col gap-2 bg-[#0d0603] p-2 overflow-hidden rounded-b-lg w-[229px] duration-200`}
    >
      {filterSearch?.map((article) => {
        return (
          <Link onClick={handleclickLink} href={`/blogpost/${article.id}`}>
            <div className="flex flex-col hover:bg-gray-300 duration-200  ">
              {article?.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default SearchDown;
