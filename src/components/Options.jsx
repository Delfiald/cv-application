import "./options.css";

function Fonts({ fontFamily, setFontFamily }) {
 const handleFontChange = (fontName, fontActive) => {
  setFontFamily((prevState) => ({
   ...prevState,
   fontName: fontName,
   fontActive: fontActive,
  }));
 };
 return (
  <div className="font">
   <h2>Font Family</h2>
   <div className="font-list-wrapper">
    <div
     className={`button-wrapper ${
      fontFamily.fontActive === "times-new-roman" ? "active" : ""
     }`}
    >
     <button
      style={{ fontFamily: "Times New Roman" }}
      onClick={() =>
       handleFontChange(`"Times New Roman", Times, serif`, "times-new-roman")
      }
     >
      Aa
     </button>
     <div>Times New Roman</div>
    </div>
    <div
     className={`button-wrapper ${
      fontFamily.fontActive === "arial" ? "active" : ""
     }`}
    >
     <button
      style={{ fontFamily: "Arial" }}
      onClick={() => handleFontChange("Arial, Helvetica, sans-serif", "arial")}
     >
      Aa
     </button>
     <div>Arial</div>
    </div>
    <div
     className={`button-wrapper ${
      fontFamily.fontActive === "calibri" ? "active" : ""
     }`}
    >
     <button
      style={{ fontFamily: "Calibri" }}
      onClick={() =>
       handleFontChange(`Calibri, 'Trebuchet MS', sans-serif`, "calibri")
      }
     >
      Aa
     </button>
     <div>Calibri</div>
    </div>
   </div>
  </div>
 );
}

function Order({ sectionOrder, setSectionOrder }) {
 const handleReorder = (fromIndex, toIndex) => {
  setSectionOrder((prevOrder) => {
   const updatedOrder = [...prevOrder];
   const [movedItem] = updatedOrder.splice(fromIndex, 1);
   updatedOrder.splice(toIndex, 0, movedItem);
   return updatedOrder;
  });
 };

 return (
  <div className="order">
   <h2>Order</h2>
   <div className="section-list-wrapper">
    {sectionOrder.map((sectionName, index) => (
     <div key={sectionName.id}>
      {sectionName.sectionName}
      <div className="order-button-wrapper">
       {index !== 0 && (
        <button
         className="up-button"
         onClick={() => handleReorder(index, index - 1)}
        >
         <i className="fas fa-chevron-up"></i>
        </button>
       )}
       {index !== sectionOrder.length - 1 && (
        <button
         className="down-button"
         onClick={() => handleReorder(index, index + 1)}
        >
         <i className="fas fa-chevron-down"></i>
        </button>
       )}
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}

function Options({
 fontFamily,
 setFontFamily,
 setSectionOrder,
 sectionOrder,
 previewContent,
}) {
 return (
  <section id="options">
   <h2>Options</h2>
   {previewContent === "ats" ? (
    <>
     <Fonts fontFamily={fontFamily} setFontFamily={setFontFamily} />
     <Order sectionOrder={sectionOrder} setSectionOrder={setSectionOrder} />
    </>
   ) : null}
  </section>
 );
}

export default Options;
