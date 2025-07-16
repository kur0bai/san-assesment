import React from "react";
import styles from "./header.module.css";
import { Badge } from "@/components/Common/Badge/Badge";

export const Header = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>New Company</h3>
      <Badge />
    </div>
  );
};
