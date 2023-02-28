import React, { useState } from "react";
import CvForm from "./mainSection/form/CvForm";
import CvPreview from "./mainSection/preview/CvPreview";

function Main() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "Boy",
        lastName: "",
        tittle: "",
        mail: "",
        phoneNumber: "",
        address: "",
        description: ""
      });
    
      function handleGeneralInput(e) {
        setGeneralInfo(prevState => {
          return {
            ...prevState,
            [e.target.id]: e.target.value,
          };
        });
      };

    /*******************
    WORK EXPERIENCE SYNTAX
    **********************/

    const [experience, setExperience] = useState({
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        duty: "",
        duties: [0]
      });

      function handleWorkInput(e) {
        setExperience(prevState => {
          return {
            ...prevState,
            [e.target.id]: e.target.value,
          };
        });
      };

      
      let countWork = 0;
      function addWorkExperience() {
        countWork += experience.duties.length;
        setExperience(prevState => {
          return {
            ...prevState,
            id: experience.duties.length,
            duties: [...experience.duties, countWork]
          }
        })
      } 

    return (
        <main>
            <CvForm 
            generalInfo={generalInfo}
            handleGeneralInput={handleGeneralInput}
            experience={experience}
            handleWorkInput={handleWorkInput}
            addWorkExperience={addWorkExperience} />
            <CvPreview generalInfo={generalInfo} />
        </main>
    )
};

export default Main;