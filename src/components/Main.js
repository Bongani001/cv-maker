import React, { useState } from "react";
import "../styles/main.css"
import uniqid from "uniqid";
import CvForm from "./mainSection/form/CvForm";
import CvPreview from "./mainSection/preview/CvPreview";

function Main() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "",
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
    WORK EXPERIENCE
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
      };

      
      function addWorkExperience() {
        setExperience(prevState => {
          return [
          ...prevState,
          {
          id: uniqid(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
          duty: ""
        }
        ]})
      };

    function handleDeleteWork(id) {
      const newExperience = experience.filter(item => {
        return item.id !== id
      })
      setExperience([...newExperience])
    };

    /*******************
    EDUCATION
    **********************/

    const [education, setEducation] = useState([{
      id: uniqid(),
      qualification: "",
      institution: "",
      city: "",
      obtained: ""
    }])

    function handleEducationInput(e, id) {
          const newEducation = education.map(item => {
            if (item.id === id) {
              return {...item, [e.target.name]: e.target.value}
            }
            return item
          })
          setEducation([...newEducation]);
    };

    function addEducation() {
      setEducation(prevState => {
        return [
          ...prevState,
          {
          id: uniqid(),
          qualification: "",
          institution: "",
          city: "",
          obtained: ""
          }
        ]})
    };

    function handleDeleteEducation(id) {
      const newEducation = education.filter(item => {
        return item.id !== id
      })
      setEducation([...newEducation])
    };

    return (
        <main className="content">
            <CvForm 
            generalInfo={generalInfo}
            handleGeneralInput={handleGeneralInput}
            experience={experience}
            handleWorkInput={handleWorkInput}
            addWorkExperience={addWorkExperience}
            handleDeleteWork={handleDeleteWork}
            education={education}
            handleEducationInput={handleEducationInput}
            addEducation={addEducation}
            handleDeleteEducation={handleDeleteEducation} />
            <CvPreview generalInfo={generalInfo} experience={experience} education={education} />
        </main>
    )
};

export default Main;