import React from "react";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FlightIcon from '@mui/icons-material/Flight';
const Education = () => {
  return (
    <>
      <div className="container-fluid main5">
        <div className="container ee1 py-5">
          <MenuBookIcon style={{ fontSize: "40px", color: "rgb(106, 107, 206)" }} />
          <h1 style={{ color: "rgb(106, 107, 206)", fontSize: "40px" }}>
           Education
          </h1>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 e2">
            <div style={{ width: "90%" }}>
              <h2 style={{ color: "rgb(106, 107, 206)" }}> <b>Bsc computer science</b></h2>
              <h2 style={{ color: "rgb(106, 107, 206)" }}><b>Govt. collage Ambala Cantt</b></h2>
              <p className="e4" style={{ color: "gray" }}>
                I have done my graduation
                During (2019-2022)
              </p></div>
            <div style={{ width: "10%" }}>
              <div className="timeline-divider">
                <div className="timeline-travler">
                  <FlightIcon className="airplane1" />
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-6 e3 mb-2">
            <div className="timeline-divider">
              <div className="timeline-travler">
                <div style={{ width: "10%" }}><FlightIcon className="airplane1" />
                </div>
              </div>
            </div>
            <div style={{ width: "90%" }}>
              <h2 style={{ color: "rgb(106, 107, 206)" }}><b>12th</b></h2>
              <h2 style={{ color: "rgb(106, 107, 206)" }}><b>Govt. school shahabad</b></h2>
              <p className="e4" style={{ color: "gray" }}>
              I have done my 12th
                During (2018-2019)
              </p>
            </div>
          </div>

          <div className="row mt-5 pb-5">
            <div className="col-md-6 e2">
              <div style={{ width: "90%" }}>
                <h2 style={{ color: "rgb(106, 107, 206)" }}> <b>12th</b></h2>
                <h2 style={{ color: "rgb(106, 107, 206)" }}><b>Sir chotu ram sen. sec. school</b></h2>
                <p className="e4" style={{ color: "gray" }}>
                  I have done my 10th
                  During (2016-2017)
                </p></div>
              <div style={{ width: "10%" }}>
                <div className="timeline-divider">
                  <div className="timeline-travler">
                    <FlightIcon className="airplane1" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Education;