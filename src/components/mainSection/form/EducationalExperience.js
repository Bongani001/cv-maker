import React, { useState } from "react";
import EducationalExperienceItem from "./EducationalExperienceItem";

function EducationalExperience() {
    const [education, setEducation] = useState({
        qualification: "",
        institution: "",
        city: "",
        obtained: "",
        qualificationNumbers: [0]
    })

    function handleEducationWorkInput(e) {
        setEducation(prevState => {
          return {
            ...prevState,
            [e.target.id]: e.target.value,
          };
        });
      };

      let count = 0;
      function addEducationalExperience() {
        count += education.qualificationNumbers.length;
        setEducation(prevState => {
          return {
            ...prevState,
            id: education.qualificationNumbers.length,
            qualificationNumbers: [...education.qualificationNumbers, count]
          }
        })
      } 

    return (
        <fieldset>
            <h2 className="section-heading">Education</h2>
            {education.qualificationNumbers.map((num, index) => {
                return (
                    <EducationalExperienceItem key={index} education={education} handleEducationWorkInput={handleEducationWorkInput} />
                )
            })}
            <button type="button" className="btn-add-education" onClick={addEducationalExperience}>Add Education</button>
        </fieldset>
    )
};

export default EducationalExperience;