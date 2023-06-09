import React from "react";
import Ourpartner from "../AboutUs/Ourpartner";
import "./Herosection.css";
import ScrollAnimation from "./Home/ScrollAnimation";
import NewHerosection from "./Home/NewHerosection";
import ReverseSection2 from "./Home/ReverseSection2";
const Herosection = () => {
  return (
    <>
    <div className="scroll-sections" >
    <NewHerosection/>
    </div>
        <div className="scroll-sections" >
        <div className="section2-home-page" style={{height:"90vh"}}>
          <div className="section2-container">
            <div className="section2-heading">
              <h1>Create a perfect ecosystem for your business</h1>
            </div>
            <div className="section2-content">
              <h2>MII Foundation, a Section-8 company based in India, is an
              incubator dedicated to supporting and nurturing innovative
              start-ups at Medi-Caps University in Indore. As a start-up
              incubator, MII Foundation provides a collaborative and inclusive 
              environment for entrepreneurs to grow their businesses.</h2>

              <p style={{margin: "20px 0"}}>At MII Foundation, we have a culture that is collaborative,
              inclusive, and centered around innovation and creativity. We
              believe in fostering a supportive environment where start-ups can
              come together to share ideas, knowledge, and experiences.</p>
            </div>
          </div>
        </div>
      </div>
      <ReverseSection2/>
      <div className="scroll-sections">
      <ScrollAnimation/>
      </div>
      <div className="scroll-sections">
      {/* <Ourpartner/> */}
      </div>
    </>
  );
};

export default Herosection;
