import React, { useState } from "react";
import CustomForm from "../../../Components/CustomForm";
import Card from "../../../Components/Card";
import Header from "./Header";
import Footer from "./Footer";
import FormInput from "../../../Components/FormInput";

const Layout = () => {
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
          <Header handleImage={handleImage} handleChange={handleChange} />
        </Card>
        <Card>
          <Footer
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

export default Layout;
