import React from "react";

const Card = ({children}) => {
  return (
    <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
