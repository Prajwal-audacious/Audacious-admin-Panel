import React, { useState } from "react";
import Banner from "./Banner";
import WorkingSection from "./WorkingSection";
import OurCompany from "./OurCompany";
import WebDesign from "./WebDesign";
import SoftwareDev from "./SoftwareDev";
import MobileDev from "./MobileDev";
import WebAppDev from "./WebAppDev";
import CmsDev from "./CmsDev";
import TechTrend from "./TechTrend";

const Services = () => {
  const [inputData, setInputData] = useState({});
  const [ckeditorData, setCkeditorData] = useState({});
  const [imageData, setImageData] = useState({});

  const handleImage = ({ target: { name, files } }) => {
    setImageData({ ...imageData, [name]: files[0] });
  };

  const handleChange = ({ target: { name, value } }) => {
    setInputData({ ...inputData, [name]: value });
  };
  const handleCkeditorValues = (event, editor, name) => {
    setCkeditorData({ ...ckeditorData, [name]: editor.getData() });
  };
  console.log(inputData);
  console.log(ckeditorData);
  console.log(imageData);

  return (
    <div className="row">
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <Banner
              handleImage={handleImage}
              handleChange={handleChange}
              handleCkeditorValues={handleCkeditorValues}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <WorkingSection />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <OurCompany
              handleImage={handleImage}
              handleChange={handleChange}
              handleCkeditorValues={handleCkeditorValues}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <WebDesign />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <SoftwareDev
              handleImage={handleImage}
              handleChange={handleChange}
              handleCkeditorValues={handleCkeditorValues}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <MobileDev
              handleImage={handleImage}
              handleChange={handleChange}
              handleCkeditorValues={handleCkeditorValues}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <WebAppDev
              handleImage={handleImage}
              handleChange={handleChange}
              handleCkeditorValues={handleCkeditorValues}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <CmsDev
              handleImage={handleImage}
              handleChange={handleChange}
              handleCkeditorValues={handleCkeditorValues}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <TechTrend
              handleImage={handleImage}
              handleChange={handleChange}
              handleCkeditorValues={handleCkeditorValues}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
