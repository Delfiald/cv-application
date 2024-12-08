import React from "react";
import "./preview.css";

const convertMonth = (inputValue) => {
 const [year, month] = inputValue.split("-");
 const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
 ];
 return `${monthNames[Number(month) - 1]} ${year}`;
};

const getYear = (inputValue) => {
 const year = inputValue.split("-")[0];

 return year;
};

function GraphicsInformationSide({
 generalInfoInput,
 additionalInfo,
 additionalLinks,
 skillInput,
 colors,
}) {
 return (
  <section
   className="general-information"
   style={{
    background: colors.secondaryBackground,
    color: colors.secondaryFont,
   }}
  >
   <style>
    {`
      #preview #graphics a,
      #preview #graphics a:visited {
        color: ${colors.linkFont} !important;
      }
      #preview #graphics .paper .general-information .contacts > div a {
        color: ${colors.secondaryFont} !important
      }
    `}
   </style>
   <div className="profile-pict">
    {additionalInfo.picture === "" ? (
     <i className="fas fa-user"></i>
    ) : (
     <img src={additionalInfo.picture} alt="Profile Picture" />
    )}
   </div>
   <div className="contacts">
    <h2 style={{ borderColor: colors.secondaryFont }}>CONTACT</h2>
    <div className="email">
     <i
      className="fas fa-envelope"
      style={{ borderColor: colors.secondaryFont }}
     ></i>
     <a href={`mailto:${generalInfoInput.email}`}>
      {generalInfoInput.email === "" ? "Email" : generalInfoInput.email}
     </a>
    </div>
    <div className="phone">
     <i
      className="fas fa-phone"
      style={{ borderColor: colors.secondaryFont }}
     ></i>
     <div>
      {generalInfoInput.phone === "" ? "Phone" : generalInfoInput.phone}
     </div>
    </div>
   </div>
   <div
    className="links"
    style={{ background: colors.specialBackground, color: colors.linkFont }}
   >
    <h2 style={{ borderColor: colors.linkFont }}>LINKS</h2>
    {additionalLinks.links.map((link, index) => (
     <div key={link.id} className="link-wrapper">
      <a href={link.value}>
       {link.value === "" ? `Link ${index + 1}` : link.value}
      </a>
     </div>
    ))}
   </div>
   <div className="skills">
    <h2 style={{ borderColor: colors.secondaryFont }}>SKILLS</h2>
    {skillInput.inputs.map((skill) => (
     <div key={skill.id} className="skill-wrapper">
      <div className="skill-name">
       {skill.skillName === "" ? "Skill Name" : skill.skillName}
      </div>
      <div className="skill-details">
       {skill.skillDetails === "" ? "Skill Details" : skill.skillDetails}
      </div>
     </div>
    ))}
   </div>
  </section>
 );
}

function GraphicsMainSide({
 generalInfoInput,
 additionalInfo,
 experienceInput,
 educationInput,
 colors,
}) {
 return (
  <div
   className="main-information"
   style={{ background: colors.primaryBackground, color: colors.primaryFont }}
  >
   <div className="information-header">
    <div className="first-name">
     <h1>
      {generalInfoInput.firstName === ""
       ? "Name".toUpperCase()
       : generalInfoInput.firstName.toUpperCase()}
     </h1>
    </div>
    <div className="last-name">
     <h1>
      {generalInfoInput.lastName !== "" &&
       generalInfoInput.lastName.toUpperCase()}
     </h1>
    </div>
    <div
     className="subject"
     style={{
      background: colors.secondaryBackground,
      color: colors.secondaryFont,
     }}
    >
     {additionalInfo.subject === ""
      ? "Subject".toUpperCase()
      : additionalInfo.subject.toUpperCase()}
    </div>
   </div>
   <div
    className="summary"
    style={{ background: colors.specialBackground, color: colors.summaryFont }}
   >
    <h2>SUMMARY</h2>
    <div className="summary-wrapper">
     {additionalInfo.summary === "" ? "Summary" : additionalInfo.summary}
    </div>
   </div>
   <div className="experiences">
    <h2>EXPERIENCE</h2>
    <style>
     {`
      #preview #graphics .paper .main-information .experiences::before,
      #preview
      #graphics
      .paper
      .main-information
      .experiences
      .experience-wrapper
      .overview-top::before,
      #preview
      #graphics
      .paper
      .main-information
      .experiences
      .experience-wrapper:not(:last-child):before,
      #preview
      #graphics
      .paper
      .main-information
      .experiences
      .experience-wrapper::after {
        background-color: ${colors.primaryFont}
      }
      `}
    </style>
    {experienceInput.inputs.map((experience) => (
     <div key={experience.id} className="experience-wrapper">
      <div className="overview-top">
       <div className="position">
        {experience.position === "" ? "Position" : experience.position}
       </div>
       <div className="date">
        {experience.startDate === ""
         ? "Start Date"
         : convertMonth(experience.startDate)}{" "}
        &minus;{" "}
        {!experience.isWorking
         ? experience.endDate === ""
           ? "End Date"
           : convertMonth(experience.endDate)
         : "Present"}
       </div>
      </div>
      <div className="overview-bottom">
       <div className="company-name">
        {experience.company === "" ? "Company" : experience.company}
       </div>
       <div className="location">
        {experience.location === "" ? "Location" : experience.location}
       </div>
      </div>
      <div className="descriptions">
       <ul>
        {experience.descriptions.map((desc, index) => (
         <li key={desc.id}>
          {desc.description === ""
           ? `Description ${index + 1}`
           : desc.description}
         </li>
        ))}
       </ul>
      </div>
     </div>
    ))}
   </div>
   <div className="educations">
    <h2 style={{ borderColor: colors.primaryFont }}>EDUCATION</h2>
    {educationInput.inputs.map((education) => (
     <div key={education.id} className="education-wrapper">
      <div className="degree">
       {education.degree === "" ? "Degree" : education.degree}
      </div>
      <div className="education-bottom">
       <div className="schoolName">
        {education.schoolName === "" ? "School Name" : education.schoolName}
       </div>
       |
       <div className="date">
        {education.startDate === ""
         ? "Start Date"
         : getYear(education.startDate)}{" "}
        &minus;{" "}
        {!education.isStudying
         ? education.endDate === ""
           ? "End Date"
           : getYear(education.endDate)
         : "Present"}
       </div>
       |
       <div className="gpa">
        GPA {education.gpa === "" ? "GPA" : education.gpa}
       </div>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}

function Graphics({
 generalInfoInput,
 additionalInfo,
 additionalLinks,
 educationInput,
 experienceInput,
 skillInput,
 fontFamily,
 sectionLayout,
 colors,
}) {
 return (
  <div id="graphics" style={{ fontFamily: fontFamily.fontName }}>
   <div className={`paper ${sectionLayout}`}>
    <GraphicsInformationSide
     generalInfoInput={generalInfoInput}
     additionalInfo={additionalInfo}
     additionalLinks={additionalLinks}
     skillInput={skillInput}
     colors={colors}
    />
    <GraphicsMainSide
     generalInfoInput={generalInfoInput}
     additionalInfo={additionalInfo}
     experienceInput={experienceInput}
     educationInput={educationInput}
     colors={colors}
    />
   </div>
  </div>
 );
}

function ATSContactInformation({ generalInfoInput, additionalLinks }) {
 const firstName = generalInfoInput.firstName;
 const lastName = generalInfoInput.lastName;
 const email = generalInfoInput.email;
 const phone = generalInfoInput.phone;
 return (
  <section className="contact-information">
   <h1>
    {firstName === "" ? "Name" : firstName} {lastName === "" ? "" : lastName}
   </h1>
   <div>
    <a href={`mailto:${email}`}>{email === "" ? "Email" : email}</a>
    {" | "}
    <p>{phone === "" ? "Phone" : phone}</p>
    {additionalLinks.links.map((link, index) => (
     <React.Fragment key={link.id}>
      {index === 0 && " | "}
      <a href={link.value} target="_blank" rel="noopener noreferrer">
       {link.value === "" ? `Link ${index + 1}` : link.value}
      </a>
      {index !== additionalLinks.links.length - 1 && " | "}
     </React.Fragment>
    ))}
   </div>
  </section>
 );
}

function ATSSkills({ skillInput }) {
 return (
  <section className="skill">
   <h2>Skills</h2>
   <hr />
   {skillInput.inputs.map((skill) => (
    <div key={skill.id} className="skill-wrapper">
     <div className="skill-name">
      {skill.skillName === "" ? "Skill Name" : skill.skillName}:
     </div>
     <div className="skill-details">
      {skill.skillDetails === "" ? "Skill Details" : skill.skillDetails}
     </div>
    </div>
   ))}
  </section>
 );
}

function ATSExperiences({ experienceInput }) {
 return (
  <>
   {experienceInput.inputs.length > 0 && (
    <section className="experiences">
     <h2>Experiences</h2>
     <hr />
     {experienceInput.inputs.map((experience) => (
      <div key={experience.id} className="experience-wrapper">
       <div className="experience-info">
        <div className="position">
         {experience.position === "" ? "Position" : experience.position}
        </div>
        <div className="date">
         {experience.startDate === ""
          ? "Start Date"
          : convertMonth(experience.startDate)}{" "}
         &minus;{" "}
         {!experience.isWorking
          ? experience.endDate === ""
            ? "End Date"
            : convertMonth(experience.endDate)
          : "Present"}
        </div>
        <div className="company">
         {experience.company === "" ? "Company" : experience.company}
        </div>
        <div className="location">
         {experience.location === "" ? "Location" : experience.location}
        </div>
       </div>
       <div className="experience-details">
        <ul>
         {experience.descriptions.map((description, index) => (
          <li key={description.id}>
           {description.description === ""
            ? `Description ${index + 1}`
            : description.description}
          </li>
         ))}
        </ul>
       </div>
      </div>
     ))}
    </section>
   )}
  </>
 );
}

function ATSEducations({ educationInput }) {
 return (
  <>
   {educationInput.inputs.length > 0 && (
    <section className="educations">
     <h2>Educations</h2>
     <hr />
     {educationInput.inputs.map((education) => (
      <div key={education.id} className="education-wrapper">
       <div className="school-information">
        <div className="school-name">
         {education.schoolName === "" ? "School Name" : education.schoolName}
        </div>
        <div className="date">
         {" "}
         {"("}
         {education.startDate === ""
          ? "Start Date"
          : getYear(education.startDate)}{" "}
         &minus;{" "}
         {!education.isStudying
          ? education.endDate === ""
            ? "End Date"
            : getYear(education.endDate)
          : "Present"}
         {")"}
        </div>
       </div>
       <div className="school-detail">
        <div className="degree">
         {education.degree === "" ? "Degree" : education.degree}
        </div>
        &minus;
        <div className="gpa">
         {" "}
         {education.gpa === "" ? "GPA" : `GPA ${education.gpa}`}
        </div>
       </div>
      </div>
     ))}
    </section>
   )}
  </>
 );
}

function ATSProjects({ projectInput }) {
 return (
  <>
   {projectInput.inputs.length > 0 && (
    <section className="projects">
     <h2>Projects</h2>
     <hr />
     {projectInput.inputs.map((project) => (
      <div key={project.id} className="project-wrapper">
       <div className="project-overview">
        <div className="project-information">
         <div className="project-name">
          {project.projectName === "" ? "Project Name" : project.projectName}
         </div>
         {" | "}
         <div className="project-stack">
          {project.projectStack === "" ? "Project Stack" : project.projectStack}
         </div>
        </div>
        <div className="date">
         {project.startDate === ""
          ? "Start Date"
          : convertMonth(project.startDate)}{" "}
         &minus;{" "}
         {project.endDate === "" ? "End Date" : convertMonth(project.endDate)}
        </div>
       </div>
       <div className="project-details">
        <ul>
         {project.details.map((detail, index) => (
          <li key={detail.id}>
           {detail.detail === "" ? `Detail ${index + 1}` : detail.detail}
          </li>
         ))}
        </ul>
       </div>
      </div>
     ))}
    </section>
   )}
  </>
 );
}

function ATS({
 generalInfoInput,
 additionalLinks,
 educationInput,
 experienceInput,
 skillInput,
 projectInput,
 fontFamily,
 sectionOrder,
}) {
 const renderSection = (sectionName) => {
  switch (sectionName) {
   case "Skills":
    return <ATSSkills skillInput={skillInput} />;
   case "Experiences":
    return <ATSExperiences experienceInput={experienceInput} />;
   case "Educations":
    return <ATSEducations educationInput={educationInput} />;
   case "Projects":
    return <ATSProjects projectInput={projectInput} />;
   default:
    return null;
  }
 };

 return (
  <div id="ats" style={{ fontFamily: fontFamily.fontName }}>
   <div className="paper">
    <ATSContactInformation
     generalInfoInput={generalInfoInput}
     additionalLinks={additionalLinks}
    />
    {sectionOrder.map((sectionName) => (
     <React.Fragment key={sectionName.id}>
      {renderSection(sectionName.sectionName)}
     </React.Fragment>
    ))}
   </div>
  </div>
 );
}

function Preview({
 previewContent,
 generalInfoInput,
 additionalInfo,
 additionalLinks,
 educationInput,
 experienceInput,
 skillInput,
 projectInput,
 fontFamily,
 sectionOrder,
 sectionLayout,
 colors,
}) {
 return (
  <section id="preview">
   <button className="nav-button previous">
    <i className="fas fa-chevron-left"></i>
   </button>
   <button className="nav-button next">
    <i className="fas fa-chevron-right"></i>
   </button>
   <div className="page-number">1 of 2</div>
   {previewContent === "ats" ? (
    <ATS
     generalInfoInput={generalInfoInput}
     additionalLinks={additionalLinks}
     educationInput={educationInput}
     experienceInput={experienceInput}
     skillInput={skillInput}
     projectInput={projectInput}
     fontFamily={fontFamily}
     sectionOrder={sectionOrder}
    />
   ) : (
    <Graphics
     generalInfoInput={generalInfoInput}
     additionalInfo={additionalInfo}
     additionalLinks={additionalLinks}
     educationInput={educationInput}
     experienceInput={experienceInput}
     skillInput={skillInput}
     projectInput={projectInput}
     fontFamily={fontFamily}
     sectionLayout={sectionLayout}
     colors={colors}
    />
   )}
  </section>
 );
}

export default Preview;
