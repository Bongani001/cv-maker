import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    tittle: "",
    mail: "",
    phoneNumber: "",
    address: "",
    description: ""
  });

  const [experience, setExperience] = useState({
    position: "",
    company: "",
    city: "",
    from: "",
    to: "",
    duty: "",
    duties: []
  })

  function handleGeneralInput(e) {
    setGeneralInfo(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logo">CV Maker</h1>
      </header>
      <form>
        <fieldset>
          <h2 className="section-heading">General Information</h2>
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
            <input type="text" id="address" placeholder="Address" />
          </label>
          <label htmlFor="description">
            <textarea id="description" placeholder="About yourself" value={generalInfo.description} onChange={handleGeneralInput} />
          </label>
        </fieldset>
        <fieldset>
          <h2 className="section-heading">Experience</h2>
          <div className="experience">
            <label htmlFor="position">
              <input type="text" id="position" placeholder="Position" value={experience.position} onChange={handleGeneralInput} />
            </label>
            <label htmlFor="company">
              <input type="text" id="company" placeholder="Company Name" value={experience.company} onChange={handleGeneralInput} />
            </label>
            <label htmlFor="city">
              <input type="text" id="city" placeholder="City" value={experience.city} onChange={handleGeneralInput} />
            </label>
            <label htmlFor="from">
              <input type="text" id="from" placeholder="Start Date" value={experience.from} onChange={handleGeneralInput} />
            </label>
            <label htmlFor="to">
              <input type="text" id="to" placeholder="End Date" value={experience.to} onChange={handleGeneralInput} />
            </label>
            <label htmlFor="duty">
              <textarea id="duty" placeholder="duty" rows="2" value={experience.duty} onChange={handleGeneralInput} />
            </label>
            <button type="button" className="btn-delete-experience">Delete</button>
          </div>
          <button type="button" className="btn-add-experience">Add Work Experience</button>
        </fieldset>
      </form>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
    </div>
  );
}

export default App;
