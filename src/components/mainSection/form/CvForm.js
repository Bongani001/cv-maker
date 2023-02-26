import React from "react";
import GeneralInfo from "./GeneralInfo";
import WorkExperience from "./WorkExperience";
import EducationalExperience from "./EducationalExperience";

function CvForm() {
    return (
        <form>
            <GeneralInfo />
            <WorkExperience />
            <EducationalExperience />
        </form>
    )
};

export default CvForm;