import React from "react";
import styles from "./contact.module.css";
import { useContactFormVM } from "@/view-forms/useContactFormVM";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "../../Layout/Button/Button";
import { PhoneSelect } from "@/components/Common/PhoneSelect/PhoneSelect";

export const Contact = () => {
  const { initialValues, validationSchema, handleSubmit } = useContactFormVM();
  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {
          <Form>
            <div className="form-group">
              <label htmlFor="name" className="label">
                Name
              </label>
              <div className={styles.name}>
                <Field
                  name="firstName"
                  type="text"
                  className="input"
                  placeholder="First name"
                />
                <Field
                  name="lastName"
                  type="text"
                  className="input"
                  placeholder="Last name"
                />
              </div>

              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="type" className="label">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="type" className="label">
                Phone
              </label>
              <PhoneSelect name="phone" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <br />
            <Button title="Continue" />
          </Form>
        }
      </Formik>
    </div>
  );
};
