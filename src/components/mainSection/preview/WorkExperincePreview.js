import React from "react";

function WorkExperiencePreview({item}) {
    return (
        <div className="experience-preview">
            <div className="position-time">
                <p className="position">{item.position}</p>
                <p>{item.from} - {item.to}</p>
            </div>
            <p className="company-name">{item.company}, {item.city}</p>
            <p>- {item.duty}</p>
        </div>
    )
};

export default WorkExperiencePreview;