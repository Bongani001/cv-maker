import React from "react";


function WorkExperienceItem({id, experience, handleWorkInput,handleDeleteWork}) {
    let {position,
    company,
    city,
    from,
    to,
    duty} = experience;
    // let handleWorkInput = handleWorkInput;

    return (
      <div className="experience">
        <label htmlFor="position">
          <input type="text" name="position" placeholder="Position" value={position} onChange={(e) => handleWorkInput(e, id)} />
        </label>
        <label htmlFor="company">
          <input type="text" name="company" placeholder="Company Name" value={company} onChange={(e) => handleWorkInput(e, id)} />
        </label>
        <label htmlFor="city">
          <input type="text" name="city" placeholder="City" value={city} onChange={(e) => handleWorkInput(e, id)} />
        </label>
        <label htmlFor="from">
          <input type="text" name="from" placeholder="Start Date" value={from} onChange={(e) => handleWorkInput(e, id)} />
        </label>
        <label htmlFor="to">
          <input type="text" name="to" placeholder="End Date" value={to} onChange={(e) => handleWorkInput(e, id)} />
        </label>
        <label htmlFor="duty">
          <textarea name="duty" placeholder="Describe what are/were your duties" rows="2" value={duty} onChange={(e) => handleWorkInput(e, id)} />
        </label>
        <button type="button" className="btn-delete-experience" onClick={(e) => handleDeleteWork(id)}>Delete</button>
      </div>
    );
  };

  export default WorkExperienceItem;