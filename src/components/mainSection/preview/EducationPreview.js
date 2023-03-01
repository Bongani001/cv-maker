import React from "react";

function EducationPreview({item}) {
    return (
        <div className="education-preview">
            <h2>Education</h2>
            <p>{item.qualification}</p>
            <p>{item.institution}</p>
            <p>{item.city}</p>
            <p>{item.obtained}</p>
        </div>
    )
};

export default EducationPreview;