import React, { useState } from "react";
import CvForm from "./mainSection/form/CvForm";
import CvPreview from "./mainSection/preview/CvPreview";

function Main() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "Boy",
        lastName: "",
        tittle: "",
        mail: "",
        phoneNumber: "",
        address: "",
        description: ""
      });
    
      function handleGeneralInput(e) {
        setGeneralInfo(prevState => {
          return {
            ...prevState,
            [e.target.id]: e.target.value,
          };
        });
      };



    return (
        <main>
            <CvForm generalInfo={generalInfo} handleGeneralInput={handleGeneralInput} />
            <CvPreview generalInfo={generalInfo} />
        </main>
    )
};

export default Main;