import React from "react";
import styles from "./badge.module.css";
import { RequestType, useRequestStore } from "@/store/useRequestStore";

export const Badge = () => {
  const { isLoading, requestType } = useRequestStore();
  if (requestType == null) return null;
  return (
    <div className={styles.badge}>
      {requestType == RequestType.OK && (
        <span className={styles.success}>success</span>
      )}
      {requestType == RequestType.PROGRESS && (
        <span className={styles.progress}>in progress</span>
      )}
      {requestType == RequestType.ERROR && (
        <span className={styles.error}>error</span>
      )}
    </div>
  );
};
