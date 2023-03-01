import React, { useState } from "react";
import uniqid from "uniqid";
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

    const [experience, setExperience] = useState([{
        id: uniqid(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        duty: "",
      }]);

      function handleWorkInput(e, id) {
        const newExperience = experience.map(item => {
          if (item.id === id) {
            return {...item, [e.target.name]: e.target.value}
          }
          return item;
        })
        setExperience([...newExperience]);
        console.log('yes')
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


    function handleDeleteWork(e) {
        e.target.parentElement.remove();
        // countWork -= experience.duties.length;
        // setExperience(prevState => {
        //     return {
        //       ...prevState,
        //       duties: experience.duties.splice(0, 1)
        //     }
        //   })
    };

    return (
        <main>
            <CvForm 
            generalInfo={generalInfo}
            handleGeneralInput={handleGeneralInput}
            experience={experience}
            handleWorkInput={handleWorkInput}
            addWorkExperience={addWorkExperience}
            handleDeleteWork={handleDeleteWork} />
            <CvPreview generalInfo={generalInfo} experience={experience} />
        </main>
    )
};

export default Main;