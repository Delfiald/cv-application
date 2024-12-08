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

 const [additionalInfo, setAdditionalInfo] = useState({
  picture: "",
  subject: "",
  summary: "",
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
 const [settingsOpen, setSettingsOpen] = useState(false);

 const [fontFamily, setFontFamily] = useState({
  fontName: `"Times New Roman", Times, serif`,
  fontActive: "times-new-roman",
 });

 const [sectionOrder, setSectionOrder] = useState([
  {
   id: 1,
   sectionName: "Skills",
  },
  {
   id: 2,
   sectionName: "Experiences",
  },
  {
   id: 3,
   sectionName: "Educations",
  },
  {
   id: 4,
   sectionName: "Projects",
  },
 ]);

 const [sectionLayout, setSectionLayout] = useState("layout-left");
 const [colors, setColors] = useState({
  secondaryBackground: "#26272C",
  secondaryFont: "#ffffff",
  primaryBackground: "#ffffff",
  primaryFont: "#000000",
  specialBackground: "#C2A227",
  summaryFont: "#ffffff",
  linkFont: "#000000",
 });

 const setExample = () => {
  setGeneralInfoInput((prevState) => ({
   ...prevState,
   firstName: "John",
   lastName: "Doe",
   email: "john@doe.com",
   phone: "+1-212-456-7890",
  }));

  setAdditionalInfo({
   picture: "/examples/cv-placeholder.jpg",
   subject: "Software Engineer",
   summary:
    "Innovative and results-driven Software Engineer with 5+ years of experience in designing, developing, and deploying scalable web and mobile applications. Proficient in modern frameworks and technologies such as React, Node.js, and Python, with a strong foundation in algorithms and system design. Passionate about solving complex problems and improving user experience through efficient code and creative solutions.",
  });

  setAdditionalLinks((prevState) => ({
   ...prevState,
   idCounter: 3,
   links: [
    {
     id: 1,
     value: "https://www.github.com/JohnDoe",
    },
    {
     id: 2,
     value: "https://www.linkedin.com/dd/JohnDoe",
    },
   ],
  }));

  setEducationInput({
   idCounter: 3,
   accordOpenId: 2,
   inputs: [
    {
     id: 1,
     schoolName: "Harvard University",
     degree: "Bachelor of Computer Science",
     startDate: "2015-09",
     endDate: "2019-06",
     isStudying: false,
     gpa: "3.8",
    },
    {
     id: 2,
     schoolName: "MIT",
     degree: "Master of Artificial Intelligence",
     startDate: "2020-09",
     endDate: "2022-06",
     isStudying: false,
     gpa: "4.0",
    },
   ],
  });

  setExperienceInput({
   idCounter: 3,
   accordOpenId: 2,
   inputs: [
    {
     id: 1,
     company: "Google",
     position: "Software Engineer",
     startDate: "2019-07",
     endDate: "2021-12",
     location: "Mountain View, CA",
     isWorking: false,
     descId: 2,
     descriptions: [
      { id: 1, description: "Developed scalable web applications." },
      { id: 2, description: "Optimized performance by 30%." },
     ],
    },
    {
     id: 2,
     company: "Facebook",
     position: "Senior Software Engineer",
     startDate: "2022-01",
     endDate: "",
     location: "Menlo Park, CA",
     isWorking: true,
     descId: 2,
     descriptions: [
      { id: 1, description: "Led a team of 10 developers." },
      { id: 2, description: "Implemented new features for user engagement." },
     ],
    },
   ],
  });

  setSkillInput({
   idCounter: 4,
   accordOpenId: 3,
   inputs: [
    {
     id: 1,
     skillName: "JavaScript",
     skillDetails: "Expert in ES6+ and React.js",
    },
    {
     id: 2,
     skillName: "Python",
     skillDetails: "Proficient in data analysis and machine learning.",
    },
    {
     id: 3,
     skillName: "C++",
     skillDetails: "Experience with competitive programming and algorithms.",
    },
   ],
  });

  setProjectInput({
   idCounter: 3,
   accordOpenId: 2,
   inputs: [
    {
     id: 1,
     projectName: "E-commerce Website",
     projectStack: "React, Node.js, MongoDB",
     startDate: "2021-03",
     endDate: "2021-08",
     detailsId: 2,
     details: [
      { id: 1, detail: "Built a responsive front-end using React." },
      { id: 2, detail: "Integrated Stripe API for payment processing." },
     ],
    },
    {
     id: 2,
     projectName: "Social Media App",
     projectStack: "Flutter, Firebase",
     startDate: "2022-05",
     endDate: "2022-11",
     detailsId: 1,
     details: [{ id: 1, detail: "Developed real-time chat functionality." }],
    },
   ],
  });
 };

 const clearInput = () => {
  setGeneralInfoInput({
   firstName: "",
   lastName: "",
   email: "",
   phone: "",
  });

  setAdditionalInfo({
   picture: "",
   subject: "",
   summary: "",
  });

  setAdditionalLinks({
   idCounter: 1,
   links: [],
  });

  setEducationInput({
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

  setExperienceInput({
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
      { id: 1, description: "" },
      { id: 2, description: "" },
     ],
     isWorking: false,
     descId: 2,
    },
   ],
  });

  setSkillInput({
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

  setProjectInput({
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
 };

 return (
  <>
   <section className="edit-section">
    <Header
     setPreviewContent={setPreviewContent}
     previewContent={previewContent}
     menuOpen={menuOpen}
     setMenuOpen={setMenuOpen}
     settingsOpen={settingsOpen}
     setSettingsOpen={setSettingsOpen}
     setExample={setExample}
     clearInput={clearInput}
    />
    <div className="input-section">
     {!settingsOpen ? (
      <>
       <GeneralInfo
        generalInfoInput={generalInfoInput}
        setGeneralInfoInput={setGeneralInfoInput}
        additionalInfo={additionalInfo}
        setAdditionalInfo={setAdditionalInfo}
        additionalLinks={additionalLinks}
        setAdditionalLinks={setAdditionalLinks}
        focusedInputId={focusedInputId}
        setFocusedInputId={setFocusedInputId}
        previewContent={previewContent}
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
      <Options
       previewContent={previewContent}
       fontFamily={fontFamily}
       setFontFamily={setFontFamily}
       sectionOrder={sectionOrder}
       setSectionOrder={setSectionOrder}
       setSectionLayout={setSectionLayout}
       colors={colors}
       setColors={setColors}
      />
     )}
    </div>
   </section>
   <Preview
    previewContent={previewContent}
    generalInfoInput={generalInfoInput}
    additionalInfo={additionalInfo}
    additionalLinks={additionalLinks}
    educationInput={educationInput}
    experienceInput={experienceInput}
    skillInput={skillInput}
    projectInput={projectInput}
    fontFamily={fontFamily}
    sectionOrder={sectionOrder}
    sectionLayout={sectionLayout}
    colors={colors}
   />
  </>
 );
}

export default App;
