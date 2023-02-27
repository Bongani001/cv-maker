import React from "react";


function WorkExperienceItem(props) {
    let {position,
    company,
    city,
    from,
    to,
    duty,
    duties} = props.experience;
    let handleWorkInput = props.handleWorkInput;
    return (
      <div className="experience">
        <label htmlFor="position">
          <input type="text" id="position" placeholder="Position" value={position} onChange={handleWorkInput} />
        </label>
        <label htmlFor="company">
          <input type="text" id="company" placeholder="Company Name" value={company} onChange={handleWorkInput} />
        </label>
        <label htmlFor="city">
          <input type="text" id="city" placeholder="City" value={city} onChange={handleWorkInput} />
        </label>
        <label htmlFor="from">
          <input type="text" id="from" placeholder="Start Date" value={from} onChange={handleWorkInput} />
        </label>
        <label htmlFor="to">
          <input type="text" id="to" placeholder="End Date" value={to} onChange={handleWorkInput} />
        </label>
        <label htmlFor="duty">
          <textarea id="duty" placeholder="Describe what are/were your duties" rows="2" value={duty} onChange={handleWorkInput} />
        </label>
        <button type="button" className="btn-delete-experience">Delete</button>
      </div>
    );
  };

  export default WorkExperienceItem;