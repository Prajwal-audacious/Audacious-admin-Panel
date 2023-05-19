import React from "react";
import { ProgressBar } from "react-bootstrap";

const BasicTable = () => {
  const tableData = [
    {
      id: 1,
      firstName: "Prajwal",
      lastName: "Ramanwal",
      contact: 9685358775,
      email: "ramanwalprajwal1@gmail.com",
    },
    {
      id: 2,
      firstName: "ved",
      lastName: "prakash",
      contact: 9685358775,
      email: "ramanwalprajwal1@gmail.com",
    },
    {
      id: 3,
      firstName: "deepak",
      lastName: "Ramanwal",
      contact: 9685358775,
      email: "ramanwalprajwal1@gmail.com",
    },
    {
      id: 4,
      firstName: "xyz",
      lastName: "Ramanwal",
      contact: 9685358775,
      email: "ramanwalprajwal1@gmail.com",
    },
    {
      id: 5,
      firstName: "ved",
      lastName: "Praksh",
      contact: 9685358775,
      email: "ramanwalprajwal1@gmail.com",
    },
  ];

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Contact Us Table Data</h3>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Basic Table</h4>
              <p className="card-description">
                {" "}
                Add className <code>.table</code>
              </p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>S No</th>
                      <th>First Name.</th>
                      <th>Last Name</th>
                      <th>Contact</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((el, index) => {
                      return (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{el.firstName}</td>
                            <td>{el.lastName}</td>
                            <td>{el.contact}</td>
                            <td>{el.email}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTable;
