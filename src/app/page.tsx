import Image from "next/image";
import styles from "./page.module.css";
import { Stepper } from "@/components/Stepper";
import steps from "@/constants/steps";
import { Header } from "@/components/Layout/Header";
import { Business } from "@/components/Steps/Business";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <Stepper steps={steps} currentStep={2} />
        <div className={styles.stepContainer}>
          <Business />
        </div>
      </div>
    </div>
  );
}
