function Header({ setPreviewContent, previewContent }) {
 const handlePreview = () => {
  setPreviewContent((prevPreview) =>
   prevPreview === "ats" ? "graphics" : "ats"
  );
 };

 return (
  <>
   <header>
    <nav>
     <div className="preview-button-wrapper">
      <button
       className={`preview-button ${previewContent === "ats" ? "active" : ""}`}
       onClick={handlePreview}
      >
       Change to ATS
      </button>
      <button
       className={`preview-button ${
        previewContent === "graphics" ? "active" : ""
       }`}
       onClick={handlePreview}
      >
       Change to Graphics
      </button>
     </div>
    </nav>
   </header>
   <aside>
    <button className="setting-button">
     <i className="fas fa-sliders"></i>
    </button>
   </aside>
  </>
 );
}

export default Header;
