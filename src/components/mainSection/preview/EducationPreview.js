import React from "react";

function EducationPreview({item}) {
    return (
        <div className="education-preview">
            <div className="education-time">
                <p className="qualification-name">{item.qualification}</p>
                <p>{item.obtained}</p>
            </div>
            <p className="institution-name">{item.institution}, {item.city}</p>
        </div>
    )
};

export default EducationPreview;