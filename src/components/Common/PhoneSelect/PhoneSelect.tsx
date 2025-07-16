import { COUNTRIES } from "@/constants/countries";
import React, { useEffect, useState } from "react";
import styles from "./phoneSelect.module.css";
import { Field, useFormikContext } from "formik";
import { usePhoneSelectFormVM } from "@/view-forms/usePhoneSelectFormVM";

interface PhoneSelectProps {
  name: string;
}

export const PhoneSelect: React.FC<PhoneSelectProps> = ({ name }) => {
  const { flag, countryCode, setCountryCode, phoneNumber, setPhoneNumber } =
    usePhoneSelectFormVM(name);

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <img src={flag} alt="flag" className={styles.flag} />
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className={styles.innerInput}
        >
          {COUNTRIES.map((country) => (
            <option key={country.name} value={country.phone_code}>
              {country.phone_code}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        placeholder="(555) 000-0000"
        className={styles.innerInput}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
  );
};
