import React from "react";
import "../../../styles/cv.css";
import GeneralInfoPreview from "./GeneralInfoPreview";
import EducationPreview from "./EducationPreview";
import WorkExperiencePreview from "./WorkExperincePreview";

function CvPreview({generalInfo, experience, education}) {
    return (
        <div className="cv-preview">
            <GeneralInfoPreview generalInfo={generalInfo} />
            <div className="preview-content">
                <div className="main-bar">
                    <div className="profile-description">
                        <h2>Profile</h2>
                        <p>{generalInfo.description}</p>
                    </div>

                    <div className="experience-container">
                        <h2>Employment</h2>
                        {experience.map(item => {
                            return <WorkExperiencePreview id={item.id} key={item.id} item={item} />
                        })}
                    </div>
                    <div className="education-container">
                        <h2>Education</h2>
                        {education.map(item => {
                            return <EducationPreview id={item.id} key={item.id} item={item} />
                        })}
                    </div>
                </div>
                {/* <div className="sidebar"></div> */}
            </div>
        </div>
    )
}

export default CvPreview;