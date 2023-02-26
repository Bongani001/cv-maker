import React, { useState } from "react";

function EducationalExperience() {
    const [education, setEducation] = useState({
        qualification: "",
        institution: "",
        city: "",
        obtained: ""
    })

    function handleEducationWorkInput(e) {
        setEducation(prevState => {
          return {
            ...prevState,
            [e.target.id]: e.target.value,
          };
        });
      };

    return (
        <fieldset>
            <h2 className="section-heading">Education</h2>
            <div className="education">
                <label htmlFor="qualification">
                    <input type="text" id="qualification" placeholder="Qualification" value={education.qualification} onChange={handleEducationWorkInput} />
                </label>
                <label htmlFor="institution">
                    <input type="text" id="institution" placeholder="Institution" value={education.institution} onChange={handleEducationWorkInput} />
                </label>
                <label htmlFor="city">
                    <input type="text" id="city" placeholder="City" value={education.city} onChange={handleEducationWorkInput} />
                </label>
                <label htmlFor="obtained">
                    <input type="text" id="obtained" placeholder="Date Obtained" value={education.obtained} onChange={handleEducationWorkInput} />
                </label>
                <button type="button" className="btn-delete-education">Delete</button>
            </div>
            <button type="button" className="btn-add-education">Add Education</button>
        </fieldset>
    )
};

export default EducationalExperience;