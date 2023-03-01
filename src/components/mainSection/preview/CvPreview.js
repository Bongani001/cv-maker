import React from "react";
import GeneralInfoPreview from "./GeneralInfoPreview";
// import EducationPreview from "./EducationPreview";
import WorkExperiencePreview from "./WorkExperincePreview";

function CvPreview({generalInfo, experience}) {


    return (
        <div>
            <GeneralInfoPreview generalInfo={generalInfo} />
            <p>{experience.position}</p>
            <div>
            {experience.map(item => {
                return <WorkExperiencePreview id={item.id} key={item.id} item={item} />
            })}
            </div>
        </div>
    )
}

export default CvPreview;