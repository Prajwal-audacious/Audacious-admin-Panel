import React, { useState } from "react";
import FormInput from "../../../Components/FormInput";
import RemoveButton from "../../../Components/RemoveButton";
import AddButton from "../../../Components/AddButton";

const Footer = ({ handleChange, handleImage, handleCkeditorValues }) => {
  const [sectionData, setSectionData] = useState([{ Contact: "" }]);
  const length = sectionData && sectionData.length;

  const addFormFields = () => {
    setSectionData([
      ...sectionData,
      {
        Contact: "",
      },
    ]);
  };

  const removeFormFields = (index) => {
    const filteredData = sectionData.filter((el, itemIndex) => {
      return itemIndex !== index;
    });
    // console.log(filteredData);
    setSectionData(filteredData);
  };

  return (
    <div>
      <h2>Footer Section</h2>
      <hr />
      <div>
        <h3>Contact Us Form</h3>
        <hr />
        <FormInput
          type="heading"
          label="Section Heading"
          name="footerContactUsHeading"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="file"
          label="Section Image"
          name="footerContactUsImg"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Button Title"
          name="footerContactUsBtnTitle"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div>
        <h3>Need A Consultation Section</h3>
        <hr />
        <FormInput
          type="editor"
          label="Section Description"
          name="footerCosultationDescription"
          onChange={(event, editor) => {
            handleCkeditorValues(event, editor, "footerCosultationDescription");
          }}
        />
        <hr />
        <FormInput
          type="heading"
          label="Section Main Heading"
          name="footerCosultationHeading"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Section Main Heading"
          name="footerCosultationBtnTitle"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="file"
          label="Section Image"
          name="footerCosultationImg"
          onChange={handleImage}
        />
      </div>
      <hr />
      <div>
        <h3>Footer Content section</h3>
        <hr />
        <FormInput
          type="file"
          label="Footer Section Image"
          name="footerMainSectionImg"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="file"
          label="Audacious Logo Image"
          name="footerSectionLogo"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Call Us Title"
          name="footerContentCallUsTitle"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="number"
          label="Enter Phone Number"
          name="footerContentCallUsTitle"
          onChange={handleChange}
        />
        <div>
          {sectionData.map((el, idx) => {
            return (
              <>
                <FormInput
                  type="number"
                  label={`Contact No ${idx + 1}`}
                  name={`footerContentCallNo_${idx + 1}`}
                  onChange={handleChange}
                />
                {idx > 0 ? (
                  <RemoveButton
                    removeFormFields={() => removeFormFields(idx)}
                  />
                ) : null}

                {length === idx + 1 ? (
                  <AddButton addFormFields={addFormFields} />
                ) : null}
                <hr />
              </>
            );
          })}
        </div>
        <hr />

        <FormInput
          type="title"
          label="Write To Us"
          name="footerContentEmailTitle"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Enter Email"
          name="footerContentEmail"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Office Time Title"
          name="footerContentOfficeTimeTitle"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Enter Office Time"
          name="footerContentTime"
          onChange={handleChange}
        />
        <h3>Useful Links</h3>
        <hr />
        <FormInput
          type="title"
          label="Usefull links Title"
          name="footerContentUsefulLinksTitle"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Home Title"
          name="footerContentTitle_1"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="About Title"
          name="footerContentTitle_2"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Service Title"
          name="footerContentTitle_3"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Project Title"
          name="footerContentTitle_4"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Contact Title"
          name="footerContentTitle_5"
          onChange={handleChange}
        />
        <h3>Office Address</h3>
        <hr />
        <FormInput
          type="heading"
          label="Office Address Title"
          name="footerContentOfficeAdressTitle"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="editor"
          label="Office Address"
          onChange={(event, editor) => {
            handleCkeditorValues(event, editor, "footerContentOfficeAdress");
          }}
        />
        <hr />
        <FormInput
          type="file"
          label="Office Address Location"
          name="footerContentOfficeAdressMap"
          onChange={handleImage}
        />
      </div>
    </div>
  );
};

export default Footer;
