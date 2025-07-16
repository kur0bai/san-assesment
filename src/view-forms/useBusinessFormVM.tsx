import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export function useBusinessFormVM() {
  const initialValues = {
    name: "",
    type: "",
    address: { line1: "", line2: "", city: "", state: "", zip: "" },
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    type: Yup.string().required("Type is required"),
    address: Yup.object({
      line1: Yup.string().required("Address line 1 is required"),
      line2: Yup.string().nullable(),
      city: Yup.string().required("City is required"),
      state: Yup.string()
        .length(2, "State must be a 2-letter code")
        .required("State is required"),
      zip: Yup.string()
        .matches(/^\d{5}$/, "Zip code must be 5 digits")
        .required("Zip code is required"),
    }),
  });

  const handleSubmit = (values: any) => {
    console.log("wdwd", values);
    alert("HOLAAA");
  };

  return {
    initialValues,
    validationSchema,
    handleSubmit,
  };
}
