import React from "react";
import GeneralInfo from "./GeneralInfo";
import WorkExperience from "./WorkExperience";
import EducationalExperience from "./EducationalExperience";

function CvForm({generalInfo, handleGeneralInput}) {
    return (
        <form>
            <GeneralInfo generalInfo={generalInfo} handleGeneralInput={handleGeneralInput} />
            <WorkExperience />
            <EducationalExperience />
        </form>
    )
};

export default CvForm;