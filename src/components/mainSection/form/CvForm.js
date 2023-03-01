import React from "react";
import GeneralInfo from "./GeneralInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

function CvForm({
    generalInfo,
    handleGeneralInput,
    experience,
    handleWorkInput,
    addWorkExperience,
    handleDeleteWork,
    education,
    handleEducationInput,
    addEducation,
    handleDeleteEducation
    }) {
    return (
        <form>
            <GeneralInfo 
            generalInfo={generalInfo} handleGeneralInput={handleGeneralInput} />
            <WorkExperience 
            experience={experience}
            handleWorkInput={handleWorkInput}
            addWorkExperience={addWorkExperience}
            handleDeleteWork={handleDeleteWork} />
            <Education 
            education={education}
            handleEducationInput={handleEducationInput}
            addEducation={addEducation}
            handleDeleteEducation={handleDeleteEducation} />
        </form>
    )
};

export default CvForm;