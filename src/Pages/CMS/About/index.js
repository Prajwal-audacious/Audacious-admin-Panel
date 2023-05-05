import React, { useState } from "react";
import Banner from "./Banner";
import Technology from "./Technology";
import Chooseus from "./Chooseus";
import TeamMember from "./TeamMember";
import WhyChooseUs from "./WhyChooseUs";
import OurSection from "./OurSection";
import TeamWork from "./TeamWork";
import Card from "../../../Components/Card";
import CustomForm from "../../../Components/CustomForm";
import FormInput from "../../../Components/FormInput";

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

  const submitBtn = () => {
    console.log("djkawn");
  };

  return (
    <CustomForm onSubmit={submitBtn}>
      <div className="row">
        <Card>
          <Banner
            handleChange={handleChange}
            handleImage={handleImage}
            handleCkeditorValues={handleCkeditorValues}
          />
        </Card>
        <Card>
          <Technology
            handleChange={handleChange}
            handleCkeditorValues={handleCkeditorValues}
            handleImage={handleImage}
          />
        </Card>

        <Card>
          <Chooseus
            handleChange={handleChange}
            handleCkeditorValues={handleCkeditorValues}
            handleImage={handleImage}
          />
        </Card>
        <Card>
          <TeamMember
            handleChange={handleChange}
            handleImage={handleImage}
            handleCkeditorValues={handleCkeditorValues}
          />
        </Card>
        <Card>
          <WhyChooseUs
            handleChange={handleChange}
            handleCkeditorValues={handleCkeditorValues}
            handleImage={handleImage}
          />
        </Card>
        <Card>
          <OurSection
            handleChange={handleChange}
            handleCkeditorValues={handleCkeditorValues}
            handleImage={handleImage}
          />
        </Card>
        <Card>
          <TeamWork
            handleChange={handleChange}
            handleImage={handleImage}
            handleCkeditorValues={handleCkeditorValues}
          />
          <FormInput type="button" />
        </Card>
      </div>
    </CustomForm>
  );
};

export default About;
