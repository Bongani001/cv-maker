import React from "react";
import GeneralInfoPreview from "./GeneralInfoPreview";
import EducationPreview from "./EducationPreview";
import WorkExperiencePreview from "./WorkExperincePreview";

function CvPreview({generalInfo}) {


    return (
        <GeneralInfoPreview generalInfo={generalInfo} />
    )
}

export default CvPreview;