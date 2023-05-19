import React, { useState } from "react";
import FormInput from "../../../Components/FormInput";
import AddButton from "../../../Components/AddButton";
import RemoveButton from "../../../Components/RemoveButton";

const OurProject = ({ handleChange, handleImage, handleCkeditorValues }) => {
  const [sectionsData, setSectionsData] = useState([
    {
      name: "",
      defaultValue: "",
      projectName: "ZestHRM",
      projectDescription: "lorem Ipsum prajwal ramanwal",
    },
  ]);
  const length = sectionsData && sectionsData.length;

  const addFormFields = () => {
    setSectionsData([
      ...sectionsData,
      {
        name: "",
        defaultValue: "",
        projectName: "",
        projectDescription: "",
      },
    ]);
  };

  const removeFormFields = (index) => {
    const filteredData = sectionsData.filter((el, itemIndex) => {
      return itemIndex !== index;
    });
    console.log(filteredData);
    setSectionsData(filteredData);
  };
  return (
    <div>
      <h2>Our Project Section</h2>
      <hr />
      <FormInput
        type="title"
        label="Our Project Title"
        name="homeOurProjectTitle"
        onChange={handleChange}
      />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="homeOurProjectMainHeading"
        onChange={handleChange}
      />
      <div>
        {sectionsData &&
          sectionsData.map((el, idx) => {
            return (
              <>
                <h3>Project details {`${idx + 1}`} </h3>
                <hr />
                <FormInput
                  type="file"
                  label={`Section Image ${idx + 1}`}
                  name={`homeOurProjectImage_${idx + 1}`}
                  onChange={handleImage}
                />

                <FormInput
                  type="title"
                  label={`Projeact Name Title ${idx + 1}`}
                  name={`homeOurProjectTitle_${idx + 1}`}
                  onChange={handleChange}
                />
                <hr />
                <FormInput
                  type="editor"
                  label={`Project Description ${idx + 1}`}
                  onChange={(event, editor) => {
                    handleCkeditorValues(
                      event,
                      editor,
                      `homeOurProjectDescription_${idx + 1}`
                    );
                  }}
                />
                <hr />
                <FormInput
                  type="title"
                  label={`View Project Button Title ${idx + 1}`}
                  name={`homeOurProjectViewProjectBtnTitle_${idx + 1}`}
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
      <FormInput
        type="title"
        label="View More Work Title"
        name="homeOurProjectMoreWorkBtnTitle"
        onChange={handleChange}
      />
    </div>
  );
};

export default OurProject;
