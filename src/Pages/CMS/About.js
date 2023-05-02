import React, { useState } from "react";
import Banner from "../../Components/Aboutus/Banner";
import Technology from "../../Components/Aboutus/Technology";
import Chooseus from "../../Components/Aboutus/Chooseus";
import TeamMember from "../../Components/Aboutus/TeamMember";
import WhyChooseUs from "../../Components/Aboutus/WhyChooseUs";
import OurSection from "../../Components/Aboutus/OurSection";
import TeamWork from "../../Components/Aboutus/TeamWork";

const About = () => {
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
  console.log(ckeditorData);
  console.log(inputData);
  console.log(imageData);

  return (
    <div className="row">
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <Banner handleChange={handleChange} handleImage={handleImage} />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <Technology
              handleChange={handleChange}
              handleCkeditorValues={handleCkeditorValues}
              handleImage={handleImage}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <Chooseus
              handleChange={handleChange}
              handleCkeditorValues={handleCkeditorValues}
              handleImage={handleImage}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <TeamMember handleChange={handleChange} handleImage={handleImage} />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <WhyChooseUs
              handleChange={handleChange}
              handleCkeditorValues={handleCkeditorValues}
              handleImage={handleImage}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <OurSection
              handleChange={handleChange}
              handleCkeditorValues={handleCkeditorValues}
              handleImage={handleImage}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <TeamWork handleChange={handleChange} handleImage={handleImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
