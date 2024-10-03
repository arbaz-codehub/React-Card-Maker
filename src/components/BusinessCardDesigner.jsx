import React, { useState, useEffect } from "react";
import styles from "./BusinessCardDesigner.module.css";
import ColorPicker from "./ColorPicker";
import FontPicker from "./FontPicker";
import LayoutPicker from "./LayoutPicker";
import CardPreview from "./CardPreview";
import { downloadCard } from "./utils";

export default function BusinessCardDesigner() {
  const [cardData, setCardData] = useState({
    name: "",
    jobTitle: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    website: "",
    address: "",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    font: "Arial",
    layout: "single",
  });

  const [savedDesigns, setSavedDesigns] = useState([]);

  useEffect(() => {
    const savedDesigns = JSON.parse(
      localStorage.getItem("savedDesigns") || "[]"
    );
    setSavedDesigns(savedDesigns);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (color, type) => {
    setCardData((prev) => ({ ...prev, [type]: color }));
  };

  const handleFontChange = (font) => {
    setCardData((prev) => ({ ...prev, font }));
  };

  const handleLayoutChange = (layout) => {
    setCardData((prev) => ({ ...prev, layout }));
  };

  const handleSaveDesign = () => {
    const newSavedDesigns = [...savedDesigns, { ...cardData, id: Date.now() }];
    setSavedDesigns(newSavedDesigns);
    localStorage.setItem("savedDesigns", JSON.stringify(newSavedDesigns));
  };

  const handleLoadDesign = (design) => {
    setCardData(design);
  };

  const handleResetDesign = () => {
    setCardData({
      name: "",
      jobTitle: "",
      companyName: "",
      phoneNumber: "",
      email: "",
      website: "",
      address: "",
      backgroundColor: "#ffffff",
      textColor: "#000000",
      font: "Arial",
      layout: "single",
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Digital Business Card Designer</h1>
      <div className={styles.grid}>
        <div className={styles.inputSection}>
          {/* <div className={styles.tabs}>
            <button className={styles.tabButton}>Information</button>
            <button className={styles.tabButton}>Design</button>
            <button className={styles.tabButton}>Saved Designs</button>
          </div> */}
          <div className={styles.tabContent}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={cardData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="jobTitle">Job Title</label>
              <input
                id="jobTitle"
                name="jobTitle"
                value={cardData.jobTitle}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="companyName">Company Name</label>
              <input
                id="companyName"
                name="companyName"
                value={cardData.companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                value={cardData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={cardData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                value={cardData.website}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                value={cardData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.designOptions}>
            <ColorPicker
              label="Background Color"
              color={cardData.backgroundColor}
              onChange={(color) => handleColorChange(color, "backgroundColor")}
            />
            <ColorPicker
              label="Text Color"
              color={cardData.textColor}
              onChange={(color) => handleColorChange(color, "textColor")}
            />
            <FontPicker value={cardData.font} onChange={handleFontChange} />
            <LayoutPicker
              value={cardData.layout}
              onChange={handleLayoutChange}
            />
          </div>
          <div className={styles.savedDesigns}>
            {savedDesigns.map((design) => (
              <button
                key={design.id}
                onClick={() => handleLoadDesign(design)}
                className={styles.savedDesignButton}
              >
                {design.name || "Unnamed Design"}
              </button>
            ))}
          </div>
          <div className={styles.actionButtons}>
            <button
              onClick={() => downloadCard(cardData)}
              className={styles.downloadButton}
            >
              Download Card
            </button>
            <button onClick={handleSaveDesign} className={styles.saveButton}>
              Save Design
            </button>
            <button onClick={handleResetDesign} className={styles.resetButton}>
              Reset
            </button>
          </div>
        </div>
        <div className={styles.previewSection}>
          <CardPreview cardData={cardData} />
        </div>
      </div>
    </div>
  );
}
