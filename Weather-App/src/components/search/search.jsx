import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (value) => {
    setSearch(value);
  };

  return (
    <div>
      <input type="text" placeholder="Search" />
      <button>Search</button>
    </div>
  );
};
export default Search;
