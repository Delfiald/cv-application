function Header({ setPreviewContent, previewContent }) {
 const handlePreview = () => {
  setPreviewContent((prevPreview) =>
   prevPreview === "ats" ? "graphics" : "ats"
  );
 };

 return (
  <>
   <aside>
    <button className="setting-button">
     <i className="fas fa-sliders"></i>
    </button>
   </aside>
   <header>
    <nav>
     <div className="preview-button-wrapper">
      <button
       className={`preview-button ${previewContent === "ats" ? "active" : ""}`}
       onClick={handlePreview}
      >
       ATS
      </button>
      <button
       className={`preview-button ${
        previewContent === "graphics" ? "active" : ""
       }`}
       onClick={handlePreview}
      >
       Graphics
      </button>
     </div>
    </nav>
   </header>
  </>
 );
}

export default Header;
