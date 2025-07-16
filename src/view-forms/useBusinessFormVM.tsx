import { useFormStore } from "@/store/useFormStore";
import { useStepStore } from "@/store/useStepStore";
import * as Yup from "yup";

export function useBusinessFormVM() {
  const { setBusiness, business } = useFormStore();
  const nextStep = useStepStore((state) => state.nextStep);
  const initialValues = {
    name: business.name ?? "",
    type: business.type ?? "",
    address: {
      line1: business.address.line1 ?? "",
      line2: business.address.line2 ?? "",
      city: business.address.city ?? "",
      state: business.address.state ?? "",
      zip: business.address.zip ?? "",
    },
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
    setBusiness({
      name: values.name,
      type: values.type,
      address: values.address,
    });
    nextStep();
  };

  return {
    initialValues,
    validationSchema,
    handleSubmit,
  };
}
