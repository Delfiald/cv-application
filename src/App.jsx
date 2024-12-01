import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
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
   <Education />
   <Experience />
   <Preview
    generalInfoInput={generalInfoInput}
    previewContent={previewContent}
    additionalLinks={additionalLinks}
   />
   <Footer />
  </>
 );
}

export default App;
