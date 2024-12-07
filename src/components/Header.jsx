function Header({
 setPreviewContent,
 previewContent,
 menuOpen,
 setMenuOpen,
 setSettingsOpen,
 setExample,
 clearInput,
}) {
 const handlePreview = () => {
  setPreviewContent((prevPreview) =>
   prevPreview === "ats" ? "graphics" : "ats"
  );
 };

 const handleMenuOpen = () => {
  setMenuOpen((prevState) => !prevState);
 };

 const handleSettingsOpen = () => {
  setSettingsOpen((prevState) => !prevState);
 };

 const handlePrint = () => {
  window.print();
 };

 return (
  <>
   <aside>
    <div className="options">
     <button onClick={handleSettingsOpen}>
      <i className="fas fa-gear"></i>
     </button>
    </div>
    <button
     onClick={handleMenuOpen}
     className={`setting-button ${menuOpen ? "open" : ""}`}
    >
     <i className="fas fa-sliders"></i>
    </button>
    <div className="menu-wrapper">
     <div className="fill-example">
      <button onClick={() => setExample()}>
       <i className="fas fa-file-import"></i>{" "}
       <div className="div">Fill With Example</div>
      </button>
     </div>
     <div className="clear">
      <button onClick={() => clearInput()}>
       <i className="fas fa-rotate"></i>
       <div>Clear</div>
      </button>
     </div>
     <div className="print">
      <button onClick={handlePrint}>
       <i className="fas fa-print"></i> <div>Print</div>
      </button>
     </div>
    </div>
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
