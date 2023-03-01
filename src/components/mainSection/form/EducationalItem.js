import React from "react";

function EducationalItem({
    id,
    item,
    handleEducationInput,
    handleDeleteEducation}) {
    let {qualification,
    institution,
    city,
    obtained} = item;

    return (
        <div className="education">
            <label htmlFor="qualification">
                <input type="text" name="qualification" placeholder="Qualification" value={qualification} onChange={(e) => {handleEducationInput(e, id)}} />
            </label>
            <label htmlFor="institution">
                <input type="text" name="institution" placeholder="Institution" value={institution} onChange={(e) => {handleEducationInput(e, id)}} />
            </label>
            <label htmlFor="city">
                <input type="text" name="city" placeholder="City" value={city} onChange={(e) => {handleEducationInput(e, id)}} />
            </label>
            <label htmlFor="obtained">
                <input type="text" name="obtained" placeholder="Date Obtained" value={obtained} onChange={(e) => {handleEducationInput(e, id)}} />
            </label>
            <button type="button" className="btn-delete-education" onClick={(e) => handleDeleteEducation(id)}>Delete</button>
        </div>
    )
}

export default EducationalItem;