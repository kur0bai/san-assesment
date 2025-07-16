import React from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

import styles from "./stepper.module.css";

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className={styles.stepperContainer}>
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div
            key={index}
            className={`${styles.stepItem} ${
              isCompleted ? styles.completed : ""
            } ${isActive ? styles.active : ""}`}
          >
            <div className={styles.stepCircle}>{index + 1}</div>
            <div className={styles.stepLabel}>{step}</div>
            {index !== steps.length - 1 && <div className={styles.stepLine} />}
          </div>
        );
      })}
    </div>
  );
};
