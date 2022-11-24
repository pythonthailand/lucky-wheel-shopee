import React from "react";
import Wheel from "./components/Wheel";
import "./App.css";

const App = () => {
  return (
    <>
      <Wheel />
      <div className="footer" style={{ display: "flex" }}>
        <div
          className="foreman"
          style={{
            marginLeft: "auto",
            backgroundImage: `url('https://i.ibb.co/pQMBgSY/Whats-App-Image-2022-10-21-at-11-02-15-PM-removebg-preview.png')`,
            width: "200px",
            height: "200px",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* <img src="WhatsApp_Image_2022-10-21_at_11.02.15_PM-removebg-preview.png" width="100px" height="100px"/> */}
        </div>
        <div
          className="hedge"
          style={{
            marginRight: "auto",
            backgroundImage: `url('https://i.ibb.co/Vv1z4fD/HEDGE-SACHS-Final-1024x201.png')`,
            width: "300px",
            height: "100px",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            marginTop: "60px"
          }}
        ></div>
      </div>
    </>
  );
};

export default App;
