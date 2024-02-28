import { useRef, useState } from "react";
import axios from "axios";

const Search = ({ locationChanged }) => {
  const inputRef = useRef();
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=yourAPIKEY`;

  const checkKeyPressed = async (e) => {
    if (e.key === "Enter" || e.type === "click") {
      await axios.get(url).then((response) => {
        console.log(response.data);
        locationChanged(response.data);
      });
      setLocation("");
    }
  };

  return (
    <>
      <div className="search d-flex flex-row mt-3 mb-3 w-25">
        <input
          className="m-2 rounded-3 w-100"
          ref={inputRef}
          type="text"
          placeholder="Search"
          onKeyDown={(e) => checkKeyPressed(e)}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="m-2 rounded-3 w-25 h-50" onClick={checkKeyPressed}>
          Search
        </button>
      </div>
    </>
  );
};
export default Search;
