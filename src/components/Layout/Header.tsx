import React from "react";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>New Company</h3>
    </div>
  );
};
