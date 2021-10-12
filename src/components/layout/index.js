import React from "react";
import "./style.css";

// import Footer from "../footer";
const Index = ({ children }) => {
  return (
    <div className="flex flex-col justify-center " style={{ height: "100vh" }}>
      <div className="">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
