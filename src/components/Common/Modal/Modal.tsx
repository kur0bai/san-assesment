import React from "react";
import styles from "./modal.module.css";

enum ModalType {
  ERROR = "error",
  SUCCESS = "ok",
}

interface ModalProps {
  text: string;
  type: ModalType;
}

export const Modal: React.FC<ModalProps> = ({ text, type }) => {
  return (
    <div
      className={`${styles.container} ${
        type == ModalType.SUCCESS ? styles.success : styles.error
      }`}
    >
      <p>{text}</p>
    </div>
  );
};
