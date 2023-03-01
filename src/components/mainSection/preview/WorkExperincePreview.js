import React from "react";

function WorkExperiencePreview({item}) {
    // const {position,
    // company,
    // city,
    // from,
    // to,
    // duty,
    // duties} = item
    return (
        <div className="work-experience">
            <h2>Employment</h2>
            {item.city}
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