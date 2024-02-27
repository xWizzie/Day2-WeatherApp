import React from "react";

const ReusableTemperatureComponent = ({ value, label }) => (
  <div className="d-flex flex-column align-items-center">
    <p className="m-2 fw-bold">{value}</p>
    <p className="m-0">{label}</p>
  </div>
);

export default ReusableTemperatureComponent;
