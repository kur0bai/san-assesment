import React from "react";
import styles from "./modal.module.css";

export enum ModalType {
  ERROR = "error",
  OK = "ok",
}

interface ModalProps {
  text: string;
  type: ModalType;
}

export const Modal: React.FC<ModalProps> = ({ text, type }) => {
  return (
    <div
      className={`${styles.container} ${
        type == ModalType.OK ? styles.success : styles.error
      }`}
    >
      <p>{text}</p>
    </div>
  );
};
