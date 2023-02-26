import React from "react";

function GeneralInfo(props) {

    return (
        <div className="general-info">
            <h1>{props.generalInfo.firstName} {props.generalInfo.lastName}</h1>
            <p className="tittle">{props.generalInfo.tittle}</p>
            <p>{props.generalInfo.phoneNumber}</p>
        </div>
    )
}

export default GeneralInfo;