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

function Graphics({ generalInfoInput }) {
 return (
  <div id="graphics">
   <h2>Graphics</h2>
   <p>
    Name: {generalInfoInput.firstName} {generalInfoInput.lastName}
   </p>
   <p>
    Email Address:{" "}
    <a href={`mail:to${generalInfoInput.email}`}>{generalInfoInput.email}</a>
   </p>
   <p>Phone Number: {generalInfoInput.phone}</p>
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
 additionalLinks,
 educationInput,
 experienceInput,
 skillInput,
 projectInput,
 fontFamily,
 sectionOrder,
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
    <Graphics generalInfoInput={generalInfoInput} />
   )}
  </section>
 );
}

export default Preview;
