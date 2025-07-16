import { useFormStore } from "@/store/useFormStore";
import { useStepStore } from "@/store/useStepStore";
import * as Yup from "yup";

export function useContactFormVM() {
  const setContact = useFormStore((state) => state.setContact);
  const nextStep = useStepStore((state) => state.nextStep);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),
    email: Yup.string()
      .email("Make sure your email is a well formed address")
      .required("Email is required"),
    phone: Yup.string()
      .required("Type is required")
      .matches(
        /^\(\d{3}\) \d{3}-\d{4}$/,
        "Phone must be in the format (000) 000-0000"
      ),
  });

  const handleSubmit = (values: any) => {
    setContact({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
    });
    nextStep();
  };

  return {
    initialValues,
    validationSchema,
    handleSubmit,
  };
}
