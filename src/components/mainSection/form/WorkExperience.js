import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";

function WorkExperience({
    experience,
    handleWorkInput,
    addWorkExperience,
    handleDeleteWork
  }) {
    
  return (
    <fieldset>
      <h2 className="section-heading">Experience</h2>
      {
      experience.map(item => {
        return <WorkExperienceItem
        id={item.id}
        key={item.id}
        experience={experience}
        handleWorkInput={handleWorkInput}
        handleDeleteWork={handleDeleteWork} />
      })
      }
      <button type="button" className="btn-add-experience" onClick={addWorkExperience} >Add Work Experience</button>
    </fieldset>
  );
};

export default WorkExperience;