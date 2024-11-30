import { useState } from "react";
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

 const [additionalLinks, setAdditionalLinks] = useState([]);

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
