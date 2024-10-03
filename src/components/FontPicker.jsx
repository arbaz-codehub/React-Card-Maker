import React from 'react';
import styles from './FontPicker.module.css';

const fonts = ['Arial', 'Helvetica', 'Times New Roman', 'Courier', 'Verdana', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact'];

export default function FontPicker({ value, onChange }) {
  return (
    <div className={styles.fontPicker}>
      <label htmlFor="font">Font</label>
      <select id="font" value={value} onChange={(e) => onChange(e.target.value)} className={styles.select}>
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
}