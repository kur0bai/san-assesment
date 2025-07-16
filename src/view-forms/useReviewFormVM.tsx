import { ModalType } from "@/components/Common/Modal/Modal";
import { useFormStore } from "@/store/useFormStore";
import { RequestType, useRequestStore } from "@/store/useRequestStore";
import { useStepStore } from "@/store/useStepStore";
import axios from "axios";
import { useState } from "react";

interface ApiResponse {
  status: ModalType;
  message: string;
}

export function useReviewForm() {
  const { business, contact } = useFormStore();
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const setStep = useStepStore((state) => state.setStep);
  const { setRequestType } = useRequestStore();
  const [buttonText, setButtonText] = useState("Confirm & Submit");

  const handleSubmit = async () => {
    setApiResponse(null);
    try {
      setRequestType(RequestType.PROGRESS);
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const companyData = {
        name: business.name,
        type: business.type,
        address: business.address,
        contact,
      };
      const response = await axios.post(`${API_URL}/company`, companyData);
      setApiResponse(response.data);
      setRequestType(RequestType.OK);
      setStep(3);
      setButtonText("Start Over");
    } catch (error) {
      console.log("Error ", error);
      if (axios.isAxiosError(error) && error.response) {
        setApiResponse(error.response.data);
      } else {
        setApiResponse({
          status: ModalType.ERROR,
          message: "An unexpected error occurred.",
        });
      }
      setRequestType(RequestType.ERROR);
    }
  };

  return {
    handleSubmit,
    apiResponse,
    buttonText,
  };
}
