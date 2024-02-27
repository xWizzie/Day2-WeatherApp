import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BottomReusable from "./components/BottomReusable/BottomReusable";
import axios from "axios";

function App() {
  const inputRef = useRef();
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=16951aa8652f9d1a5409edfc010d65b1`;

  const checkKeyPressed = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
      inputRef.current.value = "";
    }
  };

  return (
    <div
      className="container min-vw-100 vh-100 bg-dark text-light d-flex justify-content-center"
      style={{ fontFamily: "Outfit" }}
    >
      <div className="search">
        <input
          className="m-2 rounded-3"
          ref={inputRef}
          type="text"
          placeholder="Search"
          onKeyUp={checkKeyPressed}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="m-2 rounded-3" onClick={checkKeyPressed}>
          Search
        </button>
      </div>
      <div
        className="inner-container w-100  d-flex align-items-center flex-column justify-content-between mt-5 "
        style={{ minWidth: "565px", maxWidth: "65%" }}
      >
        <div className="top w-100 d-flex justify-content-between">
          <div className="location">
            <h1>{data.name}</h1>
            <div className="tempContainer d-flex flex-row">
              {data.main ? (
                <>
                  <p className="mb-2 me-5 fs-3">Today:</p>
                  <span className="temp fw-bold" style={{ fontSize: "150px" }}>
                    {""}
                    {(((data.main.temp - 32) * 5) / 9).toFixed(1)}
                    {" °C"}
                  </span>
                </>
              ) : null}
            </div>
          </div>

          <div className="description d-flex align-items-center ">
            <p className="fs-2 " style={{ transform: "rotate(-90deg)" }}>
              {data.weather ? data.weather[0].description : null}
            </p>
          </div>
        </div>

        <div
          className="bottom d-flex justify-content-evenly align-items-center w-100 fs-3 rounded-4 mb-3"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <BottomReusable value="20 C" label="Feels Like" />
          <BottomReusable value="20 %" label="Humidity" />
          <BottomReusable value="15 km/h" label="Wind Speed" />
        </div>
      </div>
    </div>
  );
}

export default App;
