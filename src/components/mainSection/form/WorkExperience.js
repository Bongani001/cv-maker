import React, {useState} from "react";
import WorkExperienceItem from "./WorkExperienceItem";

function WorkExperience() {
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

      
      let count = 0;
      function addWorkExperience() {
        count += experience.duties.length;
        setExperience(prevState => {
          return {
            ...prevState,
            id: experience.duties.length,
            duties: [...experience.duties, count]
          }
        })
      }

      const edu = experience.duties.map((duty, index) => {
        return <WorkExperienceItem key={index} experience={experience} handleWorkInput={handleWorkInput} />
      })

    return (
        <fieldset>
          <h2 className="section-heading">Experience</h2>
          {
            edu
          }
          <button type="button" className="btn-add-experience" onClick={addWorkExperience} >Add Work Experience</button>
        </fieldset>
    );
};

export default WorkExperience;