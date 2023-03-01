import React from "react";
import EducationalItem from "./EducationalItem";

function Education({
  education,
  handleEducationInput,
  addEducation,
  handleDeleteEducation}) {
    return (
        <fieldset>
            <h2 className="section-heading">Education</h2>
            {education.map(item => {
              return <EducationalItem
                id={item.id}
                key={item.id}
                item={item}
                handleEducationInput={handleEducationInput}
                handleDeleteEducation={handleDeleteEducation} />
            })}
            <button type="button" className="btn-add-education" onClick={addEducation}>Add Education</button>
        </fieldset>
    )
};

export default Education;