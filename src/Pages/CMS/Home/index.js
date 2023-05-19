import React, { useState } from "react";
import Banner from "./Banner";
import DigitalAgency from "./DigitalAgency";
import Card from "../../../Components/Card";
import ChooseUs from "./ChooseUs";
import Services from "./Services";
import OurClient from "./OurClient";
import CustomForm from "../../../Components/CustomForm";
import Preview from "../../../Components/Preview";
import OurProject from "./OurProject";
import Contact from "./Contact";

const Home = () => {
  const [inputData, setInputData] = useState({});
  const [ckeditorData, setCkeditorData] = useState({});
  const [imageData, setImageData] = useState({});

  const handleImage = ({ target: { name, files } }) => {
    setImageData({
      ...imageData,
      [name]: files.length > 1 ? [...files] : files[0],
    });
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

  const submitBtn = () => {
    console.log("djkawn");
  };
  return (
    <CustomForm onSubmit={submitBtn}>
      <div className="row">
        <Card>
          <Banner
            handleImage={handleImage}
            handleCkeditorValues={handleCkeditorValues}
            handleChange={handleChange}
          />
        </Card>
        <Card>
          <DigitalAgency
            handleImage={handleImage}
            handleCkeditorValues={handleCkeditorValues}
            handleChange={handleChange}
          />
        </Card>
        <Card>
          <ChooseUs
            handleImage={handleImage}
            handleCkeditorValues={handleCkeditorValues}
            handleChange={handleChange}
          />
        </Card>
        <Card>
          <Services
            handleImage={handleImage}
            handleCkeditorValues={handleCkeditorValues}
            handleChange={handleChange}
          />
        </Card>
        <Card>
          <OurClient
            handleImage={handleImage}
            handleCkeditorValues={handleCkeditorValues}
            handleChange={handleChange}
          />
        </Card>
        <Card>
          <OurProject
            handleImage={handleImage}
            handleCkeditorValues={handleCkeditorValues}
            handleChange={handleChange}
          />
        </Card>
        <Card>
          <Contact
            handleImage={handleImage}
            handleCkeditorValues={handleCkeditorValues}
            handleChange={handleChange}
          />
        </Card>
      </div>
    </CustomForm>
  );
};

export default Home;
