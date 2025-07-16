import Image from "next/image";
import styles from "./page.module.css";
import { Stepper } from "@/components/Stepper";
import steps from "@/constants/steps";

export default function Home() {
  return (
    <div className={styles.page}>
      <Stepper steps={steps} currentStep={2} />
    </div>
  );
}
