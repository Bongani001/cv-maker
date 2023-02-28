import React from "react";
import GeneralInfoPreview from "./GeneralInfoPreview";
// import EducationPreview from "./EducationPreview";
import WorkExperiencePreview from "./WorkExperincePreview";

function CvPreview({generalInfo, experience}) {


    return (
        <div>
            <GeneralInfoPreview generalInfo={generalInfo} />
            <p>{experience.position}</p>
            {experience.duties.map((duty, index) => {
                return <WorkExperiencePreview key={index} experience={experience} />
            })}
        </div>
    )
}

export default CvPreview;