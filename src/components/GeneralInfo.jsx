import { useState } from "react";

function Input({ setGeneralInfoInput }) {
 const inputList = [
  {
   key: 0,
   type: "text",
   id: "firstName",
   label: "First Name",
   placeholder: "John",
  },
  {
   key: 1,
   type: "text",
   id: "lastName",
   label: "Last Name",
   placeholder: "Doe",
  },
  {
   key: 2,
   type: "email",
   id: "email",
   label: "Email Address",
   placeholder: "john@doe.com",
  },
  {
   key: 3,
   type: "text",
   id: "phone",
   label: "Phone Number",
   placeholder: "+123 456 8900",
  },
 ];

 const handleChange = (e) => {
  const { id, value } = e.target;
  setGeneralInfoInput((prevInput) => ({
   ...prevInput,
   [id]: value,
  }));
 };

 return (
  <>
   {inputList.map((inputItem) => (
    <div key={inputItem.key}>
     <input
      type={inputItem.type}
      id={inputItem.id}
      placeholder={inputItem.placeholder}
      onChange={handleChange}
     />
     <label htmlFor={inputItem.id}>{inputItem.label}</label>
    </div>
   ))}
  </>
 );
}

function AdditionalLink({ additionalLinks, handleRemoveLink, handleChange }) {
 return (
  <>
   {additionalLinks.map((link, index) => (
    <div key={link.id}>
     <input
      type="text"
      placeholder={`Link ${index + 1}`}
      value={index.value}
      onChange={(e) => handleChange(e.target.value, link.id)}
     ></input>
     <button onClick={() => handleRemoveLink(link.id)}>
      <i className="fas fa-minus"></i>
     </button>
    </div>
   ))}
  </>
 );
}

function GeneralInfo({
 setGeneralInfoInput,
 additionalLinks,
 setAdditionalLinks,
}) {
 const [idCounter, setIdCounter] = useState(1);
 const handleAddLink = () => {
  setAdditionalLinks((prevLinks) => [
   ...prevLinks,
   { id: idCounter, value: " " },
  ]);
  setIdCounter((prevCounter) => prevCounter + 1);
 };

 const handleRemoveLink = (id) => {
  setAdditionalLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
 };

 const handleChange = (value, id) => {
  setAdditionalLinks((prevLink) =>
   prevLink.map((link) => (link.id === id ? { ...link, value: value } : link))
  );
 };

 return (
  <section id="general-info">
   <h2>General Information</h2>
   <div className="general-section-1">
    <Input setGeneralInfoInput={setGeneralInfoInput} />
   </div>
   <div className="general-section-2">
    <h3>Additional Links</h3>
    <AdditionalLink
     additionalLinks={additionalLinks}
     handleRemoveLink={handleRemoveLink}
     handleChange={handleChange}
    />
    <button onClick={handleAddLink}>
     <i className="fas fa-plus"></i>
    </button>
   </div>
  </section>
 );
}

export default GeneralInfo;
