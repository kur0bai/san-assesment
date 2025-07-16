"use client";

import React from "react";
import styles from "./business.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useBusinessFormVM } from "@/view-forms/useBusinessFormVM";
import { COMPANY_TYPES } from "@/constants/company";
import { STATES } from "@/constants/states";
import { Button } from "../../Layout/Button/Button";

export const Business = () => {
  const { initialValues, validationSchema, handleSubmit } = useBusinessFormVM();
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
                Business Name
              </label>
              <Field
                name="name"
                type="text"
                className="input"
                placeholder="Registered business name"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="type" className="label">
                Type
              </label>
              <Field as="select" name="type" className="input">
                <option value="">Type of business</option>
                {COMPANY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="type" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="type" className="label">
                Address
              </label>
              <Field
                name="address.line1"
                type="text"
                className="input"
                placeholder="Address line 1"
              />
              <ErrorMessage
                name="address.line1"
                component="div"
                className="error"
              />
              <Field
                name="address.line2"
                type="text"
                className="input"
                placeholder="Address line 2 (optional)"
              />
              <Field
                name="address.city"
                type="text"
                className="input"
                placeholder="City"
              />
              <ErrorMessage
                name="address.city"
                component="div"
                className="error"
              />
              <div className={styles.location}>
                <Field as="select" name="address.state" className="input">
                  <option value="">State</option>
                  {STATES.map((state) => (
                    <option key={state.name} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </Field>
                <Field
                  name="address.zip"
                  type="text"
                  className="input"
                  placeholder="Zip"
                />
              </div>
              <ErrorMessage
                name="address.state"
                component="div"
                className="error"
              />
              <ErrorMessage
                name="address.zip"
                component="div"
                className="error"
              />
            </div>
            <br />
            <Button title="Continue" />
          </Form>
        }
      </Formik>
    </div>
  );
};
