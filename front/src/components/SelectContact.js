import React from "react";
import Select from "react-select";

const options = [
  { value: "exemplue", label: "Exemplu de eveniment" },
  { value: "exemplu2", label: "Exemplu de eveniment 2" },
  { value: "exemplu3", label: "Exemplu de eveniment 3" },
];

const ContactSelect = () => {
  return (
    <Select
      options={options}
      placeholder="Alege evenimentul"
      styles={{
        control: (base) => ({
          ...base,
          height: 42,
          width: "100%",
          boxSizing: "border-box",
          borderRadius: 20,
          border: "none",
          fontWeight: "normal",
          fontFamily: "Archivo",
        }),
        input: (base) => ({
          ...base,
          fontSize: 14,
          height: "100%", // Face input-ul să ocupe toată înălțimea control-ului
          padding: 0, // Elimină padding-ul default al input-ului
          margin: 0, // Elimină marginile implicite
          fontWeight: "normal",
          fontFamily: "Archivo",
        }),
        placeholder: (base) => ({
          ...base,
          fontSize: 14,
          fontWeight: "normal",
          fontFamily: "Archivo",
        }),
      }}
    />
  );
};

export default ContactSelect;
