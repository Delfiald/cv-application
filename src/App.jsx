import { useState, useEffect } from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInformation/GeneralInfo";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Skill from "./components/Skills/Skill";
import Projects from "./components/Projects/Projects";
import Preview from "./components/Preview/Preview";
import Options from "./components/Options";

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
  accordOpenId: 1,
  inputs: [
   {
    id: 1,
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    isStudying: false,
    gpa: "",
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
    detailsId: 1,
    details: [
     {
      id: 1,
      detail: "",
     },
    ],
   },
  ],
 });

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

 const [menuOpen, setMenuOpen] = useState(false);

 const [fontFamily, setFontFamily] = useState({
  fontName: `"Times New Roman", Times, serif`,
  fontActive: "times-new-roman",
 });

 return (
  <>
   <section className="edit-section">
    <Header
     setPreviewContent={setPreviewContent}
     previewContent={previewContent}
     menuOpen={menuOpen}
     setMenuOpen={setMenuOpen}
    />
    <div className="input-section">
     {!menuOpen ? (
      <>
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
      </>
     ) : (
      <Options fontFamily={fontFamily} setFontFamily={setFontFamily} />
     )}
    </div>
   </section>
   <Preview
    generalInfoInput={generalInfoInput}
    previewContent={previewContent}
    additionalLinks={additionalLinks}
    educationInput={educationInput}
    experienceInput={experienceInput}
    skillInput={skillInput}
    projectInput={projectInput}
    fontFamily={fontFamily}
   />
  </>
 );
}

export default App;
