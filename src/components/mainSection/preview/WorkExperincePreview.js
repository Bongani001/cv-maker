import React from "react";

function WorkExperiencePreview(experience) {
    // const {position,
    // company,
    // city,
    // from,
    // to,
    // duty,
    // duties} = experience
    return (
        <div className="work-experience">
            <h2>Employment</h2>
            {experience.city}
            <p>{experience.position}</p>
            <p>{experience.company}</p>
            <p>{experience.city}</p>
            <p>{experience.from}</p>
            <p>{experience.to}</p>
            <p>{experience.duty}</p>
            <p>{experience.duties}</p>
        </div>
    )
};

export default WorkExperiencePreview;