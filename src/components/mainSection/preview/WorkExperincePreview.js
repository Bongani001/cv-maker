import React from "react";

function WorkExperiencePreview({item}) {
    return (
        <div className="experience-preview">
            <h2>Employment</h2>
            <p>{item.position}</p>
            <p>{item.company}</p>
            <p>{item.city}</p>
            <p>{item.from}</p>
            <p>{item.to}</p>
            <p>{item.duty}</p>
        </div>
    )
};

export default WorkExperiencePreview;