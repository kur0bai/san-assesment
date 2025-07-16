import React from "react";
import styles from "./button.module.css";
import ArrowLeftIcon from "../../Icons/ArrowLeftIcon";

enum ButtonType {
  SUBMIT = "submit",
  BUTTON = "button",
}

interface ButtonProps {
  type?: ButtonType;
  onClick?: () => void;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({
  type = ButtonType.SUBMIT,
  onClick,
  title,
}) => {
  return (
    <button type={type} className={styles.btn} onClick={onClick ?? undefined}>
      {title} {type == ButtonType.SUBMIT && <ArrowLeftIcon />}
    </button>
  );
};
