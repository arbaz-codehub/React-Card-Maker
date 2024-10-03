import React from 'react';
import styles from './ColorPicker.module.css';

export default function ColorPicker({ label, color, onChange }) {
  return (
    <div className={styles.colorPicker}>
      <label>{label}</label>
      <div className={styles.inputGroup}>
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className={styles.colorInput}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className={styles.textInput}
        />
      </div>
    </div>
  );
}