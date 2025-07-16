import { useFormStore } from "@/store/useFormStore";
import axios from "axios";
import { useState } from "react";

export function useReviewForm() {
  const { business, contact } = useFormStore();
  const [apiResponse, setApiResponse] = useState(null);
  const handleSubmit = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const companyData = {
        name: business.name,
        type: business.type,
        address: business.address,
        contact,
      };
      const response = await axios.post(`${API_URL}/company`, companyData);

      console.log("Response jeje ", response.data);
      setApiResponse(response.data);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  return {
    handleSubmit,
    apiResponse,
  };
}
