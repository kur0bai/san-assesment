import { ModalType } from "@/components/Common/Modal/Modal";
import { useFormStore } from "@/store/useFormStore";
import { RequestType, useRequestStore } from "@/store/useRequestStore";
import axios from "axios";
import { useState } from "react";

interface ApiResponse {
  status: ModalType;
  message: string;
}

export function useReviewForm() {
  const { business, contact } = useFormStore();
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const { requestType, setRequestType } = useRequestStore();
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
    } catch (error) {
      console.log("Error ", error);
      setRequestType(RequestType.ERROR);
    }
  };

  return {
    handleSubmit,
    apiResponse,
  };
}
