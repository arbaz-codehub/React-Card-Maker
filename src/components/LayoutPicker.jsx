import React from 'react';
import styles from './LayoutPicker.module.css';

export default function LayoutPicker({ value, onChange }) {
  return (
    <div className={styles.layoutPicker}>
      <label>Layout</label>
      <div className={styles.radioGroup}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            value="single"
            checked={value === 'single'}
            onChange={(e) => onChange(e.target.value)}
          />
          Single-sided
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            value="double"
            checked={value === 'double'}
            onChange={(e) => onChange(e.target.value)}
          />
          Double-sided
        </label>
      </div>
    </div>
  );
}