import React from "react";
import { Card,Form, } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <div>
        <Card.Title className="mb-4">
          <strong>Banner</strong>
        </Card.Title>

        <Form.Group className="mb-4">
          <Form.Label>Banner title</Form.Label>
          <Form.Control
            // defaultValue={data.title}
            type="text"
            name="title"
            // onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Banner background image</Form.Label>
          {/* <div>
            {backgroundChange.backGroundImage ? (
              <Preview file={backgroundChange.backGroundImage} />
            ) : (
              <img
                src={`${process.env.REACT_APP_HOME_UPLOADS_API}${data.backGroundImage}`}
                width={100}
                height={100}
                alt="No image found"
              />
            )}
          </div> */}
          <Form.Control
            type="file"
            name="backGroundImage"
            // onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Label>Banner images</Form.Label>
          {/* <div>
            {backgroundChange.images
              ? backgroundChange.images.map((item) => {
                  return <Preview file={item} />;
                })
              : images &&
                images.map((item) => {
                  return (
                    <img
                      src={`${process.env.REACT_APP_HOME_UPLOADS_API}${item}`}
                      width={100}
                      height={100}
                      alt="No image found"
                      className="multiple-images"
                    />
                  );
                })}
          </div> */}
          <Form.Control
            multiple
            type="file"
            name="images"
            // onChange={(event) => {
            //   handleChange(event);
            // }}
          />
        </Form.Group>
        <hr />
      </div>
    </>
  );
};

export default Banner;
