import React from "react";

function GeneralInfoPreview({generalInfo}) {
    return (
        <div className="general-info">
            <h1>{generalInfo.firstName} {generalInfo.lastName}</h1>
            <p className="tittle">{generalInfo.tittle}</p>
            <p>{generalInfo.mail}</p>
            <p>{generalInfo.phoneNumber}</p>
            <p>{generalInfo.address}</p>
            <p>{generalInfo.description}</p>
        </div>
    )
};

export default GeneralInfoPreview;