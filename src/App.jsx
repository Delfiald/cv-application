import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Preview from "./components/Preview";

function App() {
 const [previewContent, setPreviewContent] = useState("ats");

 const [generalInfoInput, setGeneralInfoInput] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
 });

 const [additionalLinks, setAdditionalLinks] = useState({
  idCounter: 1,
  links: [],
 });

 //  const [educationInput, setEducationInput] = useState({
 //   idCounter: 1,
 //   inputs: [
 //    {
 //     id: 1,
 //     fields: [
 //      {
 //       id: "schoolName-1",
 //       label: "School Name",
 //       value: "",
 //       type: "text",
 //       placeholder: "Harvard University",
 //      },
 //      {
 //       id: "study-1",
 //       label: "Title of Study",
 //       value: "",
 //       type: "text",
 //       placeholder: "Computer Science",
 //      },
 //      {
 //       id: "date-1",
 //       label: "Date of Study",
 //       value: "2019-12-10",
 //       type: "date",
 //       placeholder: "",
 //      },
 //     ],
 //    },
 //   ],
 //  });

 const [educationInput, setEducationInput] = useState({
  idCounter: 1,
  inputs: [
   {
    id: 1,
    schoolName: "",
    study: "",
    startYear: "",
    endYear: "",
    isStudying: false,
   },
  ],
 });

 const [experienceInput, setExperienceInput] = useState({
  idCounter: 1,
  accordOpenId: 1,
  inputs: [
   {
    id: 1,
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    descriptions: [
     {
      id: 1,
      description: "",
     },
     {
      id: 2,
      description: "",
     },
    ],
    isWorking: false,
    descId: 2,
   },
  ],
 });

 const [skillInput, setSkillInput] = useState({
  idCounter: 1,
  accordOpenId: 1,
  inputs: [
   {
    id: 1,
    skillName: "",
    skillDetails: "",
   },
  ],
 });

 const [projectInput, setProjectInput] = useState({
  idCounter: 1,
  accordOpenId: 1,
  inputs: [
   {
    id: 1,
    projectName: "",
    projectStack: "",
    startDate: "",
    endDate: "",
   },
  ],
 });

 const [accordionOpenId, setAccordionOpenId] = useState(1);
 const [focusedInputId, setFocusedInputId] = useState(null);

 const handleClickOutside = (e) => {
  if (!e.target.closest(".input-wrapper")) {
   setFocusedInputId(null);
  }
 };

 useEffect(() => {
  document.addEventListener("click", handleClickOutside);
  return () => {
   document.removeEventListener("click", handleClickOutside);
  };
 }, []);

 return (
  <>
   <Header
    setPreviewContent={setPreviewContent}
    previewContent={previewContent}
   />
   <GeneralInfo
    setGeneralInfoInput={setGeneralInfoInput}
    additionalLinks={additionalLinks}
    setAdditionalLinks={setAdditionalLinks}
    focusedInputId={focusedInputId}
    setFocusedInputId={setFocusedInputId}
   />
   <Education
    educationInput={educationInput}
    setEducationInput={setEducationInput}
    focusedInputId={focusedInputId}
    setFocusedInputId={setFocusedInputId}
    accordionOpenId={accordionOpenId}
    setAccordionOpenId={setAccordionOpenId}
   />
   <Experience
    experienceInput={experienceInput}
    setExperienceInput={setExperienceInput}
    focusedInputId={focusedInputId}
    setFocusedInputId={setFocusedInputId}
   />
   <Skill
    skillInput={skillInput}
    setSkillInput={setSkillInput}
    focusedInputId={focusedInputId}
    setFocusedInputId={setFocusedInputId}
   />
   <Projects
    projectInput={projectInput}
    setProjectInput={setProjectInput}
    focusedInputId={focusedInputId}
    setFocusedInputId={setFocusedInputId}
   />
   <Preview
    generalInfoInput={generalInfoInput}
    previewContent={previewContent}
    additionalLinks={additionalLinks}
    educationInput={educationInput}
    experienceInput={experienceInput}
    skillInput={skillInput}
    projectInput={projectInput}
   />
   <Footer />
  </>
 );
}

export default App;
