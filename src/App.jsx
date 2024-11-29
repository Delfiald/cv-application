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

 return (
  <>
   <Header
    setPreviewContent={setPreviewContent}
    previewContent={previewContent}
   />
   <GeneralInfo setInput={setGeneralInfoInput} />
   <Education />
   <Experience />
   <Preview
    generalInfoInput={generalInfoInput}
    previewContent={previewContent}
   />
   <Footer />
  </>
 );
}

export default App;
