import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BottomReusable from "./components/BottomReusable/BottomReusable";
import axios from "axios";

function App() {
  const inputRef = useRef();
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=16951aa8652f9d1a5409edfc010d65b1`;

  const checkKeyPressed = (e) => {
    if (e.key === "Enter" || e.type === "click") {
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
      className="container min-vw-100 min-vh-100 bg-dark text-light d-flex justify-content-center flex-column align-items-center"
      style={{ fontFamily: "Outfit" }}
    >
      <div className="search d-flex flex-row mt-3 mb-3 w-25">
        <input
          className="m-2 rounded-3 w-100"
          ref={inputRef}
          type="text"
          placeholder="Search"
          onKeyUp={checkKeyPressed}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="m-2 rounded-3 w-25 h-50" onClick={checkKeyPressed}>
          Search
        </button>
      </div>
      <div
        className="inner-container w-100 flex-grow-1 d-flex align-items-center flex-column justify-content-between"
        style={{ minWidth: "565px", maxWidth: "65%" }}
      >
        <div className="top w-100 d-flex justify-content-between">
          <div className="location">
            <h1>
              {data.name ? (
                data.name
              ) : (
                <span
                  style={{
                    marginLeft: "4rem",
                    fontSize: "65px",
                  }}
                >
                  Good to see you.
                </span>
              )}
            </h1>
            <div className="tempContainer d-flex flex-row">
              {data.main ? (
                <>
                  <p className="mb-2 me-5 fs-3">Today:</p>
                  <span className="temp fw-bold" style={{ fontSize: "150px" }}>
                    {""}
                    {data.main.temp.toFixed(1)}
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
          <BottomReusable
            value={data.main ? `${data.main.feels_like.toFixed(1)} °C` : "-"}
            label="Feels Like"
          />
          <BottomReusable
            value={data.main ? `${data.main.humidity} %` : "-"}
            label="Humidity"
          />
          <BottomReusable
            value={data.wind ? `${data.wind.speed} km/h` : "-"}
            label="Wind Speed"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
