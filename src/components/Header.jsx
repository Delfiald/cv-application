function Header({ setPreviewContent, previewContent, menuOpen, setMenuOpen }) {
 const handlePreview = () => {
  setPreviewContent((prevPreview) =>
   prevPreview === "ats" ? "graphics" : "ats"
  );
 };

 const handleMenuOpen = () => {
  setMenuOpen((prevState) => !prevState);
 };

 return (
  <>
   <aside>
    <button
     onClick={handleMenuOpen}
     className={`setting-button ${menuOpen ? "open" : ""}`}
    >
     <i className="fas fa-sliders"></i>
    </button>
   </aside>
   {!menuOpen && (
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
   )}
  </>
 );
}

export default Header;
