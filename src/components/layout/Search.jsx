import { useEffect, useState } from "react";
import SearchDown from "./SearchDown";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [articlesForSearch, setArticlesForSearch] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchData = () => {
    fetch(`http://dev.to/api/articles?per_page=100`)
      .then((response) => response.json())
      .then((data) => setArticlesForSearch(data));
  };

  if (typeof window !== "undefined") {
    document.body.addEventListener("mouseup", (event) => {
      setIsOpen(false);
    });
  }
  useEffect(() => {
    fetchData();
  }, [searchValue]);

  const handleInputChanger = (event) => {
    setIsOpen(true);
    setSearchValue(event.target.value);
  };
  const filterSearch = articlesForSearch.filter((article) =>
    article?.title?.toLowerCase().includes(searchValue)
  );

  return (
    <div>
      <div className="flex justify-center items-center pr-3 relative  bg-[#F4F4F5] ">
        <input
          className="bg-[#F4F4F5] w-[114px] h-[36px] rounded-xl pl-3 text-black outline-none"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleInputChanger}
        />
        <img src="./search-outline.png" alt="" />
        <div className="absolute top-6 ml-3">
          <SearchDown
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setSearchValue={setSearchValue}
            filterSearch={filterSearch}
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
