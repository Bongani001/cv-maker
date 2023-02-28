import React from "react";

function EducationalExperienceItem(props) {
    let {
        qualification,
        institution,
        city,
        obtained
    } = props.education;
    let handleEducationWorkInput = props.handleEducationWorkInput;

    function handleDelete(e) {
        e.target.parentElement.remove();
    };

    return (
        <div className="education">
            <label htmlFor="qualification">
                <input type="text" id="qualification" placeholder="Qualification" value={qualification} onChange={handleEducationWorkInput} />
            </label>
            <label htmlFor="institution">
                <input type="text" id="institution" placeholder="Institution" value={institution} onChange={handleEducationWorkInput} />
            </label>
            <label htmlFor="city">
                <input type="text" id="city" placeholder="City" value={city} onChange={handleEducationWorkInput} />
            </label>
            <label htmlFor="obtained">
                <input type="text" id="obtained" placeholder="Date Obtained" value={obtained} onChange={handleEducationWorkInput} />
            </label>
            <button type="button" className="btn-delete-education" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default EducationalExperienceItem;