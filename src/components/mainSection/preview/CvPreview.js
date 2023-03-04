import React from "react";
import "../../../styles/cv.css";
import GeneralInfoPreview from "./GeneralInfoPreview";
import EducationPreview from "./EducationPreview";
import WorkExperiencePreview from "./WorkExperincePreview";

function CvPreview({generalInfo, experience, education}) {
    return (
        <div className="cv-preview">
            <GeneralInfoPreview generalInfo={generalInfo} />
            {experience.map(item => {
                return <WorkExperiencePreview id={item.id} key={item.id} item={item} />
            })}
            {education.map(item => {
                return <EducationPreview id={item.id} key={item.id} item={item} />
            })}
        </div>
    )
}

export default CvPreview;