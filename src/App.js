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

  function handleInput(e) {
    setGeneralInfo(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
    console.log(e.target.value)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logo">CV Maker</h1>
      </header>
      <form>
        <fieldset>
          <h1 className="section-heading">General Information</h1>
          <label htmlFor="firstName">
            <input type="text" id="firstName" placeholder="First-name" value={generalInfo.firstName} onChange={handleInput}  />
          </label>
          <label htmlFor="lastName">
            <input type="text" id="lastName" placeholder="Last-name" value={generalInfo.lastName} onChange={handleInput} />
          </label>
          <label htmlFor="tittle">
            <input type="text" id="tittle" placeholder="Tittle" value={generalInfo.tittle} onChange={handleInput} />
          </label>
          <label htmlFor="mail">
            <input type="email" id="mail" placeholder="Email" value={generalInfo.mail} onChange={handleInput} />
          </label>
          <label htmlFor="phoneNumber">
            <input type="text" id="phoneNumber" placeholder="Phone Number" value={generalInfo.phoneNumber} onChange={handleInput} />
          </label>
          <label htmlFor="address">
            <input type="text" id="address" placeholder="Address" />
          </label>
          <label htmlFor="description">
            <input type="text" id="description" placeholder="About yourself" value={generalInfo.description} onChange={handleInput} />
          </label>
        </fieldset>
      </form>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
    </div>
  );
}

export default App;
