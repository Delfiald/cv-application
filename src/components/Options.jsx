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

function Layout({ setSectionLayout }) {
 const handleSectionLayout = (layoutName) => {
  setSectionLayout(layoutName);
 };
 return (
  <div className="layout">
   <h2>Layout</h2>
   <div className="layout-list-wrapper">
    <button
     onClick={() => handleSectionLayout("layout-left")}
     className="layout"
    >
     <div className="layout-pict"></div>
     <div className="layout-name">Left</div>
    </button>
    <button
     onClick={() => handleSectionLayout("layout-top")}
     className="layout"
    >
     <div className="layout-pict"></div>
     <div className="layout-name">Top</div>
    </button>
    <button
     onClick={() => handleSectionLayout("layout-right")}
     className="layout"
    >
     <div className="layout-pict"></div>
     <div className="layout-name">Right</div>
    </button>
   </div>
  </div>
 );
}

function Colors({ colors, setColors }) {
 const handleColorChange = (value, field) => {
  setColors((prevState) => ({
   ...prevState,
   [field]: value,
  }));
 };
 return (
  <div className="colors">
   <h2>Colors</h2>
   <div className="colors-wrapper">
    <div className="color-input-wrapper">
     <input
      type="color"
      id="secondaryBackground-color"
      value={colors.secondaryBackground}
      onChange={(e) => handleColorChange(e.target.value, "secondaryBackground")}
     />
     <label htmlFor="secondaryBackground-color">Secondary Background</label>
    </div>
    <div className="color-input-wrapper">
     <input
      type="color"
      id="secondaryFont-color"
      value={colors.secondaryFont}
      onChange={(e) => handleColorChange(e.target.value, "secondaryFont")}
     />
     <label htmlFor="secondaryFont-color">Secondary Font</label>
    </div>
    <div className="color-input-wrapper">
     <input
      type="color"
      id="primaryBackground-color"
      value={colors.primaryBackground}
      onChange={(e) => handleColorChange(e.target.value, "primaryBackground")}
     />
     <label htmlFor="primaryBackground-color">Primary Background</label>
    </div>
    <div className="color-input-wrapper">
     <input
      type="color"
      id="primaryFont-color"
      value={colors.primaryFont}
      onChange={(e) => handleColorChange(e.target.value, "primaryFont")}
     />
     <label htmlFor="primaryFont-color">Primary Font</label>
    </div>
    <div className="color-input-wrapper">
     <input
      type="color"
      id="specialBackground-color"
      value={colors.specialBackground}
      onChange={(e) => handleColorChange(e.target.value, "specialBackground")}
     />
     <label htmlFor="specialBackground-color">Special Background</label>
    </div>
    <div className="color-input-wrapper">
     <input
      type="color"
      id="summaryFont-color"
      value={colors.summaryFont}
      onChange={(e) => handleColorChange(e.target.value, "summaryFont")}
     />
     <label htmlFor="summaryFont-color">Summary Font</label>
    </div>
    <div className="color-input-wrapper">
     <input
      type="color"
      id="linkFont-color"
      value={colors.linkFont}
      onChange={(e) => handleColorChange(e.target.value, "linkFont")}
     />
     <label htmlFor="linkFont-color">Link Font</label>
    </div>
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
 setSectionLayout,
 colors,
 setColors,
}) {
 return (
  <section id="options">
   <h2>Options</h2>
   {previewContent === "ats" ? (
    <>
     <Fonts fontFamily={fontFamily} setFontFamily={setFontFamily} />
     <Order sectionOrder={sectionOrder} setSectionOrder={setSectionOrder} />
    </>
   ) : (
    <>
     <Fonts fontFamily={fontFamily} setFontFamily={setFontFamily} />
     <Layout setSectionLayout={setSectionLayout} />
     <Colors colors={colors} setColors={setColors} />
    </>
   )}
  </section>
 );
}

export default Options;
