import { useEffect, useState } from "react";

const useUserData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) return;

    fetch("https://awaretherapycenter.ro/accounts/whoami/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.error("Eroare la preluarea userului:", err);
        setUser(null);
      });
  }, []);

  return user;
};

export default useUserData;
