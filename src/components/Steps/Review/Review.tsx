import { useFormStore } from "@/store/useFormStore";
import { useStepStore } from "@/store/useStepStore";
import React, { useEffect } from "react";
import styles from "./review.module.css";
import { Button } from "@/components/Layout/Button/Button";
import { useReviewForm } from "@/view-forms/useReviewFormVM";
import { Modal } from "@/components/Common/Modal/Modal";

export const Review = () => {
  const { contact, business } = useFormStore();
  const { setStep } = useStepStore();
  const { handleSubmit, apiResponse } = useReviewForm();

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.headingContainer}>
          <h3 className={styles.heading}>Business structure</h3>{" "}
          <button className={styles.btnEdit} onClick={() => setStep(1)}>
            Edit
          </button>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.infoElement}>
            <label>Name: </label>
            <span>{business.name}</span>
          </div>
          <div className={styles.infoElement}>
            <label>Type: </label>
            <span>{business.type}</span>
          </div>
          <div className={styles.infoElement}>
            <label>Address: </label>
            <span>
              {business.address.line1} <br />
              {business.address.line2} <br />
              {business.address.city} <br />
              {business.address.zip}
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.headingContainer}>
          <h3 className={styles.heading}>Contact person</h3>{" "}
          <button className={styles.btnEdit} onClick={() => setStep(2)}>
            Edit
          </button>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.infoElement}>
            <label>Name: </label>
            <span>
              {contact.firstName} {contact.lastName}
            </span>
          </div>
          <div className={styles.infoElement}>
            <label>Email: </label>
            <span>{contact.email}</span>
          </div>
          <div className={styles.infoElement}>
            <label>Phone: </label>
            <span>{contact.phone}</span>
          </div>
        </div>
      </div>
      <br />
      {apiResponse && (
        <Modal text={apiResponse.message} type={apiResponse.status} />
      )}
      <Button title="Confirm & Submit" onClick={() => handleSubmit()} />
    </div>
  );
};
