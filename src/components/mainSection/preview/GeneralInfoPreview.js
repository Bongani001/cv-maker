import React from "react";
import mail from "../../../assets/mail.png";
import phone from "../../../assets/phone-call.png";
import location from "../../../assets/pin.png";

function GeneralInfoPreview({generalInfo}) {
    return (
        <div className="general-info">
            <h1>{generalInfo.firstName} {generalInfo.lastName}</h1>
            <p className="tittle">{generalInfo.tittle}</p>
            <div className="contact">
                <p><img src={mail} alt="Mail icon" /> {generalInfo.mail}</p>
                <p><img src={phone} alt="Phone icon" /> {generalInfo.phoneNumber}</p>
                <p><img src={location} alt="Pin icon" /> {generalInfo.address}</p>
                {/* <p>{generalInfo.description}</p> */}
            </div>
        </div>
    )
};

export default GeneralInfoPreview;