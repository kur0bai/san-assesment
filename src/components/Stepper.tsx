import React from "react";

interface IStep {
  label: string;
  number: number;
}

interface StepperProps {
  steps: IStep[];
  currentStep: number;
}

import styles from "./stepper.module.css";
import CheckIcon from "./icons/CheckIcon";

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stepperContainer}>
        {steps.map((step, index) => {
          const isActive = step.number === currentStep;
          const isCompleted = step.number < currentStep;

          return (
            <div
              key={step.number}
              className={`${styles.stepItem} ${
                isCompleted ? styles.completed : ""
              } ${isActive ? styles.active : ""}`}
            >
              <div className={styles.stepCircle}>
                {isCompleted ? <CheckIcon /> : step.number}
              </div>
              <div className={styles.stepLabel}>{step.label}</div>
              {index !== steps.length - 1 && (
                <div className={styles.stepLine} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
