import { COUNTRIES } from "@/constants/countries";
import { useField } from "formik";
import { useEffect, useState } from "react";

export function usePhoneSelectFormVM(name: string) {
  const [field, , helpers] = useField(name);
  const { setValue } = helpers;

  const [countryCode, setCountryCode] = useState(COUNTRIES[0].phone_code);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [flag, setFlag] = useState(COUNTRIES[0].flag_url);

  useEffect(() => {
    const country = COUNTRIES.find((c) => c.phone_code === countryCode);
    if (country) setFlag(country.flag_url);
  }, [countryCode]);

  useEffect(() => {
    setValue(`${countryCode} ${phoneNumber}`);
  }, [countryCode, phoneNumber]);

  return {
    countryCode,
    setCountryCode,
    phoneNumber,
    setPhoneNumber,
    flag,
    setFlag,
    field,
  };
}
