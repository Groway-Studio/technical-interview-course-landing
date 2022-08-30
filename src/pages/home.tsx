import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { Hero, Modality, Calendar, Faqs, Instructor } from "../component";
import { Header, Footer } from "../component/shared";

import { API } from "../api";

export default function Home() {
  // const navigate = useNavigate();

  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API}/invitation_code.py`, {
          method: "POST",
          body: JSON.stringify({
            invitation_code: searchParams.get("invitation_code"),
          }),
        });

        const data: string = await response.text();

        if (data === "Invalid invitation_code") {
        }

        // console.log(JSON.parse(data));
      } catch (error: any) {
        throw new Error(error);
      }
    })();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Modality />
      <Calendar />
      <Instructor />
      <Faqs />
      <Footer />
    </>
  );
}
