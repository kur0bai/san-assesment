import Image from "next/image";
import styles from "./page.module.css";
import { Stepper } from "@/components/Stepper";

export default function Home() {
  return (
    <div className={styles.page}>
      <Stepper steps={["1", "2", "3"]} currentStep={1} />
    </div>
  );
}
