import React from "react";
import { Form } from "react-bootstrap";

const TechTrend = ({ handleCkeditorValues, handleImage, handleChange }) => {
  return (
    <div>
      <Form>
        <h2>Improve And Innovate with The Tech Trend Section</h2>
        <hr />
        <Form.Group>
          <h3>Logo 1</h3>
          <hr />
          <Form.Label>Logo Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter The Logo Title"
            name="techTrendLogoTitle_1"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Logo Image</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="techTrendImg1"
                name="techTrendImg_1"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="techTrendImg1">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
          </div>
          <hr />
          <Form.Label>Button Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Button Title"
            name="buttonTitle_1"
            onChange={handleChange}
          />
        </Form.Group>
        <hr />
        <Form.Group>
          <h3>Logo 2</h3>
          <hr />
          <Form.Label>Logo Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter The Logo Title"
            name="techTrendLogoTitle_2"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Logo Image</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="techTrendImg2"
                name="techTrendImg_2"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="techTrendImg2">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
          </div>
          <hr />
          <Form.Label>Button Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Button Title"
            name="buttonTitle_2"
            onChange={handleChange}
          />
        </Form.Group>
        <hr />
        <Form.Group>
          <h3>Logo 3</h3>
          <hr />
          <Form.Label>Logo Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter The Logo Title"
            name="techTrendLogoTitle_3"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Logo Image</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="techTrendImg3"
                name="techTrendImg_3"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="techTrendImg3">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
          </div>
          <hr />
          <Form.Label>Button Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Button Title"
            name="buttonTitle_3"
            onChange={handleChange}
          />
        </Form.Group>
        <hr />
        <Form.Group>
          <h3>Logo 4</h3>
          <hr />
          <Form.Label>Logo Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter The Logo Title"
            name="techTrendLogoTitle_4"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Logo Image</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="techTrendImg4"
                name="techTrendImg_4  "
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="techTrendImg4">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
          </div>
          <hr />
          <Form.Label>Button Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Button Title"
            name="buttonTitle_4"
            onChange={handleChange}
          />
        </Form.Group>
        <hr />
        <Form.Group>
          <h3>Logo 5</h3>
          <hr />
          <Form.Label>Logo Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter The Logo Title"
            name="techTrendLogoTitle_5"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Logo Image</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="techTrendImg5"
                name="techTrendImg_5"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="techTrendImg5">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
          </div>
          <hr />
          <Form.Label>Button Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Button Title"
            name="buttonTitle_5"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <hr />
      <Form.Group>
        <h3>Logo 6</h3>
        <hr />
        <Form.Label>Logo Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter The Logo Title"
          name="techTrendLogoTitle_6"
          onChange={handleChange}
        />
        <hr />
        <Form.Label>Logo Image</Form.Label>
        <div>
          <div className="custom-file">
            <Form.Control
              type="file"
              className="form-control visibility-hidden"
              id="techTrendImg6"
              name="techTrendImg_6  "
              onChange={handleImage}
            />
            <label className="custom-file-label" htmlFor="techTrendImg6">
              Upload image
            </label>
          </div>
          <hr />
          {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
        </div>
        <hr />
        <Form.Label>Button Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the Button Title"
          name="buttonTitle_6"
          onChange={handleChange}
        />
      </Form.Group>
    </div>
  );
};

export default TechTrend;
