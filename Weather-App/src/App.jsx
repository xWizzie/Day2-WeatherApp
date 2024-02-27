import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BottomReusable from "./components/BottomReusable/BottomReusable";
import Search from "/src/components/Search/Search.jsx";
import TopStuff from "/src/components/TopStuff/TopStuff.jsx";

function App() {
  const [data, setData] = useState({});

  const handleLocationChange = (data) => {
    setData(data);
  };

  return (
    <div
      className="container min-vw-100 min-vh-100 bg-dark text-light d-flex justify-content-center flex-column align-items-center"
      style={{ fontFamily: "Outfit" }}
    >
      <Search locationChanged={handleLocationChange} />
      <div
        className="inner-container w-100 flex-grow-1 d-flex align-items-center flex-column justify-content-between"
        style={{ minWidth: "565px", maxWidth: "65%" }}
      >
        <div className="top w-100 d-flex justify-content-between">
          <TopStuff returned={data.main ? data : {}} />
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
