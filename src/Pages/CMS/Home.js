import React from "react";
import Banner from "../../Components/Home/Banner";


const Home = () => {
  return (
    <div className="row">
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
