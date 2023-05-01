import React from "react";
import Banner from "../../Components/Services/Banner";
import WorkingSection from "../../Components/Services/WorkingSection";
import OurCompany from "../../Components/Services/OurCompany";
import WebDesign from "../../Components/Services/WebDesign";
import SoftwareDev from "../../Components/Services/SoftwareDev";
import MobileDev from "../../Components/Services/MobileDev";
import WebAppDev from "../../Components/Services/WebAppDev";
import CmsDev from "../../Components/Services/CmsDev";
import TechTrend from "../../Components/Services/TechTrend";

const Services = () => {
  return (
    <div className="row">
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <Banner />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <WorkingSection />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <OurCompany />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <WebDesign />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <SoftwareDev />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <MobileDev />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <WebAppDev />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <CmsDev />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <TechTrend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
