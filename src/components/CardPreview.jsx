import React from "react";
import styles from "./CardPreview.module.css";

export default function CardPreview({ cardData }) {
  const cardStyle = {
    backgroundColor: cardData.backgroundColor,
    color: cardData.textColor,
    fontFamily: cardData.font,
  };

  return (
    <div className={styles.previewContainer}>
      <h2 className={styles.previewTitle}>Preview</h2>
      <div className={styles.card} style={cardStyle}>
        <div className={styles.cardContent}>
          <h3 className={styles.name}>{"Name: " + cardData.name}</h3>
          <p className={styles.jobTitle}>{"Job: " + cardData.jobTitle}</p>
          <p className={styles.companyName}>
            {"Company: " + cardData.companyName}
          </p>
        </div>
        <div className={styles.cardContent}>
          <p>{"Ph: " + cardData.phoneNumber}</p>
          <p>{"Email: " + cardData.email}</p>
          <p>{"Website: " + cardData.website}</p>
          <p>{"Address: " + cardData.address}</p>
        </div>
      </div>
    </div>
  );
}
