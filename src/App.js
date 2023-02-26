import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "Bongani",
    lastName: "Nyaku",
    fullName: getFullName,
    tittle: "Web Dev"
  });

  function getFullName() {
    return generalInfo.firstName + " " + generalInfo.lastName;
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logo">CV Maker</h1>
      </header>
      <form>
        <fieldset>
          <h1 className="section-heading">General Information</h1>
          <label htmlFor="first-name"><input type="text" id="first-name" placeholder="First-name" /></label>
          <label htmlFor="last-name"><input type="text" id="last-name" placeholder="Last-name" /></label>
          <label htmlFor="tittle"><input type="text" id="tittle" placeholder="Tittle" /></label>
          <label htmlFor="phone-number"><input type="text" id="phone-number" placeholder="Phone Number" /></label>
          <label htmlFor="address"><input type="text" id="address" placeholder="Address" /></label>
          
        </fieldset>
      </form>
      <GeneralInfo generalInfo={generalInfo} />
    </div>
  );
}

export default App;
