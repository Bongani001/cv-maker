import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";

function WorkExperience({
    experience,
    handleWorkInput,
    addWorkExperience
  }) {
    

  return (
    <fieldset>
      <h2 className="section-heading">Experience</h2>
      {
      experience.duties.map((duty, index) => {
        return <WorkExperienceItem key={index} experience={experience} handleWorkInput={handleWorkInput} />
      })
      }
      <button type="button" className="btn-add-experience" onClick={addWorkExperience} >Add Work Experience</button>
    </fieldset>
  );
};

export default WorkExperience;