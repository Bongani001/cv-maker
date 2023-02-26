import React from "react";

function GeneralInfo(props) {
    return (
        <div className="general-info">
            <h1>{props.generalInfo.fullName()}</h1>
            <p className="tittle">{props.generalInfo.tittle}</p>
        </div>
    )
}

export default GeneralInfo;