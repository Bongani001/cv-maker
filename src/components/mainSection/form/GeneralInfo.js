import React from "react";

function GeneralInfo({generalInfo, handleGeneralInput}) {
  return (
      <fieldset>
        <h2 className="section-heading">General Information</h2>
        <div className="general-information">
          <label htmlFor="firstName">
            <input type="text" id="firstName" placeholder="First-name" value={generalInfo.firstName} onChange={handleGeneralInput}  />
          </label>
          <label htmlFor="lastName">
            <input type="text" id="lastName" placeholder="Last-name" value={generalInfo.lastName} onChange={handleGeneralInput} />
          </label>
          <label htmlFor="tittle">
            <input type="text" id="tittle" placeholder="Tittle" value={generalInfo.tittle} onChange={handleGeneralInput} />
          </label>
          <label htmlFor="mail">
            <input type="email" id="mail" placeholder="Email" value={generalInfo.mail} onChange={handleGeneralInput} />
          </label>
          <label htmlFor="phoneNumber">
            <input type="text" id="phoneNumber" placeholder="Phone Number" value={generalInfo.phoneNumber} onChange={handleGeneralInput} />
          </label>
          <label htmlFor="address">
            <input type="text" id="address" placeholder="Address" value={generalInfo.address} onChange={handleGeneralInput} />
          </label>
          <label htmlFor="description">
            <textarea id="description" placeholder="About yourself" rows="3" value={generalInfo.description} onChange={handleGeneralInput} />
          </label>
        </div>
      </fieldset>
  )
}

export default GeneralInfo;