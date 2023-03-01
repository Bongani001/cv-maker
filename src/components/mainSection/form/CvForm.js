import React from "react";
import GeneralInfo from "./GeneralInfo";
import WorkExperience from "./WorkExperience";
// import EducationalExperience from "./EducationalExperience";

function CvForm({
    generalInfo,
    handleGeneralInput,
    experience,
    handleWorkInput,
    addWorkExperience,
    handleDeleteWork
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
            {/* <EducationalExperience /> */}
        </form>
    )
};

export default CvForm;