import React from "react";

const TopStuff = ({ returned }) => {
  return (
    <>
      <div className="location">
        <h1>
          {returned.name ? (
            returned.name
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
          {returned.main ? (
            <>
              <p className="mb-2 me-5 fs-3">Today:</p>
              <span className="temp fw-bold" style={{ fontSize: "150px" }}>
                {""}
                {returned.main.temp.toFixed(1)}
                {" °C"}
              </span>
            </>
          ) : null}
        </div>
      </div>

      <div className="description d-flex align-items-center ">
        <p className="fs-2 " style={{ transform: "rotate(-90deg)" }}>
          {returned.weather ? returned.weather[0].description : null}
        </p>
      </div>
    </>
  );
};

export default TopStuff;
