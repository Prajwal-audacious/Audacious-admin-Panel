import React, { useState } from "react";
import Card from "../../../Components/Card";
import Banner from "./Banner";
import ProjectDetails from "./ProjectDetails";
import OurProjects from "./OurProjects";
import CustomForm from "../../../Components/CustomForm";
import FormInput from "../../../Components/FormInput";

const Projects = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  return (
    <CustomForm onSubmit={handleSubmit}>
      <div className="row">
        <Card>
          <Banner handleImage={handleImage} handleChange={handleChange} />
        </Card>
        <Card>
          <ProjectDetails
            handleCkeditorValues={handleCkeditorValues}
            handleImage={handleImage}
            handleChange={handleChange}
          />
        </Card>
        <Card>
          <OurProjects
            handleCkeditorValues={handleCkeditorValues}
            handleImage={handleImage}
            handleChange={handleChange}
          />
          <FormInput type="button" />
        </Card>
      </div>
    </CustomForm>
  );
};

export default Projects;
