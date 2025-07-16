"use client";
import styles from "./page.module.css";
import { Stepper } from "@/components/Stepper";
import steps from "@/constants/steps";
import { Header } from "@/components/Layout/Header/Header";
import { Business } from "@/components/Steps/Business/Business";
import { useStepStore } from "@/store/useStepStore";
import { Contact } from "@/components/Steps/Contact/Contact";

export default function Home() {
  const currentStep = useStepStore((state) => state.currentStep);
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <Stepper steps={steps} currentStep={currentStep} />
        <div className={styles.stepContainer}>
          {currentStep == 1 && <Business />}
          {currentStep == 2 && <Contact />}
        </div>
      </div>
    </div>
  );
}
