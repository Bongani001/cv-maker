import React, { useState } from "react";
import "../styles/main.css"
import uniqid from "uniqid";
import CvForm from "./mainSection/form/CvForm";
import CvPreview from "./mainSection/preview/CvPreview";

function Main() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "",
        lastName: "",
        tittle: "",
        mail: "",
        phoneNumber: "",
        address: "",
        description: ""
      });

    const generalInfoExample = {
      firstName: "Kevin",
      lastName: "Johnson",
      tittle: "Software Engineer",
      mail: "kelvinjohnson@gmail.com",
      phoneNumber: "0874521568",
      address: "107 King Street, Johannesburg, South Africa, 9660",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque purus nisl, mattis nec felis eget, semper rutrum diam. Vestibulum sollicitudin nunc ut lectus fermentum, at maximus metus interdum. Integer hendrerit nisl id dui scelerisque posuere. Nam at tellus nec odio hendrerit finibus. Cras bibendum risus et felis posuere aliquam."
    };

    const experienceExample = [{
      id: uniqid(),
      position: "Software Engineer",
      company: "Naso Works",
      city: "Dubai",
      from: "June 2021",
      to: "Present",
      duty: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque ornare risus, sit amet feugiat est gravida eget. Proin sem massa, vulputate eu hendrerit cursus, dapibus vitae justo. Donec euismod bibendum eros, at sagittis lectus feugiat vel. Nullam sodales, mi in bibendum viverra, nunc elit porttitor ante, in elementum sapien dolor et augue. Nunc posuere lorem ac ligula porttitor fringilla. Integer vitae tellus feugiat, vehicula tellus ac, tincidunt nulla.",
    }, {
      id: uniqid(),
      position: "Software Engineer",
      company: "Naso Works",
      city: "Dubai",
      from: "Jan 2019",
      to: "June 2021",
      duty: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque ornare risus, sit amet feugiat est gravida eget. Proin sem massa, vulputate eu hendrerit cursus, dapibus vitae justo. Donec euismod bibendum eros, at sagittis lectus feugiat vel. Nullam sodales, mi in bibendum viverra, nunc elit porttitor ante, in elementum sapien dolor et augue. Nunc posuere lorem ac ligula porttitor fringilla. Integer vitae tellus feugiat, vehicula tellus ac, tincidunt nulla.",
    }, {
      id: uniqid(),
      position: "Software Developer",
      company: "Cool Tech",
      city: "Pretori",
      from: "June 2016",
      to: "Dec 2018",
      duty: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque ornare risus, sit amet feugiat est gravida eget. Proin sem massa, vulputate eu hendrerit cursus, dapibus vitae justo. Donec euismod bibendum eros, at sagittis lectus feugiat vel. Nullam sodales, mi in bibendum viverra, nunc elit porttitor ante, in elementum sapien dolor et augue. Nunc posuere lorem ac ligula porttitor fringilla. Integer vitae tellus feugiat, vehicula tellus ac, tincidunt nulla.",
    }, {
      id: uniqid(),
      position: "Software Developer | Intern",
      company: "Cool Tech",
      city: "Pretori",
      from: "Feb 2016",
      to: "June 2016",
      duty: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque ornare risus, sit amet feugiat est gravida eget. Proin sem massa, vulputate eu hendrerit cursus, dapibus vitae justo. Donec euismod bibendum eros, at sagittis lectus feugiat vel. Nullam sodales, mi in bibendum viverra, nunc elit porttitor ante, in elementum sapien dolor et augue. Nunc posuere lorem ac ligula porttitor fringilla. Integer vitae tellus feugiat, vehicula tellus ac, tincidunt nulla.",

    }];

    const educationExperience = [{
      id: uniqid(),
      qualification: "Honours in Computer Science",
      institution: "University of Cape Town",
      city: "Cape Town",
      obtained: "2015"
    }, {
      id: uniqid(),
      qualification: "Bachelor of Science in Computer Science",
      institution: "University of Johannesburg",
      city: "Johannesburg",
      obtained: "2014"
    }];
    
    function handleGeneralInput(e) {
      setGeneralInfo(prevState => {
        return {
          ...prevState,
          [e.target.id]: e.target.value,
        };
      });
    };

    /*******************
    WORK EXPERIENCE
    **********************/

    const [experience, setExperience] = useState([{
        id: uniqid(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        duty: "",
      }]);

    function handleWorkInput(e, id) {
      const newExperience = experience.map(item => {
        if (item.id === id) {
          return {...item, [e.target.name]: e.target.value}
        }
        return item;
      })
      setExperience([...newExperience]);
    };

    
    function addWorkExperience() {
      setExperience(prevState => {
        return [
        ...prevState,
        {
        id: uniqid(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        duty: ""
      }
      ]})
    };

    function handleDeleteWork(id) {
      const newExperience = experience.filter(item => {
        return item.id !== id
      })
      setExperience([...newExperience])
    };

    /*******************
    EDUCATION
    **********************/

    const [education, setEducation] = useState([{
      id: uniqid(),
      qualification: "",
      institution: "",
      city: "",
      obtained: ""
    }])

    function handleEducationInput(e, id) {
          const newEducation = education.map(item => {
            if (item.id === id) {
              return {...item, [e.target.name]: e.target.value}
            }
            return item
          })
          setEducation([...newEducation]);
    };

    function addEducation() {
      setEducation(prevState => {
        return [
          ...prevState,
          {
          id: uniqid(),
          qualification: "",
          institution: "",
          city: "",
          obtained: ""
          }
        ]})
    };

    function handleDeleteEducation(id) {
      const newEducation = education.filter(item => {
        return item.id !== id
      })
      setEducation([...newEducation])
    };

    function loadExample() {
      setGeneralInfo(generalInfoExample);
      setExperience(experienceExample)
      setEducation(educationExperience)
    };

    

    return (
        <main className="content">
            <CvForm 
            generalInfo={generalInfo}
            handleGeneralInput={handleGeneralInput}
            experience={experience}
            handleWorkInput={handleWorkInput}
            addWorkExperience={addWorkExperience}
            handleDeleteWork={handleDeleteWork}
            education={education}
            handleEducationInput={handleEducationInput}
            addEducation={addEducation}
            handleDeleteEducation={handleDeleteEducation}
            loadExample={loadExample} />
            <CvPreview generalInfo={generalInfo} experience={experience} education={education} />
        </main>
    )
};

export default Main;