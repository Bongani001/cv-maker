import React, {useState} from "react";

function WorkExperience() {
    const [experience, setExperience] = useState({
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        duty: "",
        duties: []
      });

      function handleWorkInput(e) {
        setExperience(prevState => {
          return {
            ...prevState,
            [e.target.id]: e.target.value,
          };
        });
      };

    return (
        <fieldset>
          <h2 className="section-heading">Experience</h2>
          <div className="experience">
            <label htmlFor="position">
              <input type="text" id="position" placeholder="Position" value={experience.position} onChange={handleWorkInput} />
            </label>
            <label htmlFor="company">
              <input type="text" id="company" placeholder="Company Name" value={experience.company} onChange={handleWorkInput} />
            </label>
            <label htmlFor="city">
              <input type="text" id="city" placeholder="City" value={experience.city} onChange={handleWorkInput} />
            </label>
            <label htmlFor="from">
              <input type="text" id="from" placeholder="Start Date" value={experience.from} onChange={handleWorkInput} />
            </label>
            <label htmlFor="to">
              <input type="text" id="to" placeholder="End Date" value={experience.to} onChange={handleWorkInput} />
            </label>
            <label htmlFor="duty">
              <textarea id="duty" placeholder="Describe what are/were your duties" rows="2" value={experience.duty} onChange={handleWorkInput} />
            </label>
            <button type="button" className="btn-delete-experience">Delete</button>
          </div>
          <button type="button" className="btn-add-experience">Add Work Experience</button>
        </fieldset>
    );
};

export default WorkExperience;