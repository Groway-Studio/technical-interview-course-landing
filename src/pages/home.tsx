import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Hero,
  Modality,
  Calendar,
  Faqs,
  Instructor,
  Overlay,
  Spinner,
  Timeline,
} from "../component";
import { Header, Footer } from "../component/shared";

// import { API } from "../api";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  // const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    (async () => {
      try {
        // const response = await fetch(`${API}/invitation_code.py`, {
        //   method: "POST",
        //   body: searchParams.get("invitation_code")
        //     ? JSON.stringify({
        //         invitation_code: searchParams.get("invitation_code"),
        //       })
        //     : JSON.stringify({}),
        // });

        // const data: string = await response.text();

        // if (
        //   data === "Invalid invitation_code" ||
        //   data === "No invitation_code"
        // ) {
        setShowOverlay(false);
        //   setLoading(false);
        // }

        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        navigate("/server-error");

        throw new Error(error);
      }
    })();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Spinner info={false} />
      ) : showOverlay ? (
        <Overlay />
      ) : (
        <>
          <Header />
          <Hero />
          <Modality />
          <Calendar />
          {/* <Timeline /> */}
          <Instructor />
          <Faqs />
          <Footer />
        </>
      )}
    </>
  );
}
