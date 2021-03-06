import React, { useState, useEffect } from "react";

const Details = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.desc}</h3>
    </div>
  );
};

export default Details;
