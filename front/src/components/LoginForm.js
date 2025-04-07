import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";

const useLoginLogic = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    startLoading();

    try {
      const response = await fetch(
        "https://awaretherapycenter.ro/accounts/token/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        setError("");
        navigate("/");
      } else {
        if (data?.detail === "Email or password invalid") {
          setError("Email sau parolă incorecte.");
        } else if (
          data?.detail ===
          "Your account is not verified. Please verify your email."
        ) {
          localStorage.setItem("unverifiedEmail", formData.email);
          localStorage.setItem("verificationType", "register");
          setError(
            "Se pare ca acest cont nu este verifcat. Vei fi redirectionat spre verificarea contului."
          );
          setTimeout(() => {
            navigate("/confirm-email");
          }, 3000);
          stopLoading();
        } else {
          setError("A apărut o eroare. Încearcă din nou.");
        }
      }
    } catch (err) {
      setError("Eroare de rețea. Încearcă din nou.");
    } finally {
      stopLoading();
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    error,
  };
};

export default useLoginLogic;
