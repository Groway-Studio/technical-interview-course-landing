

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { State, TopLevel } from "../interfaces";
import { keystore, validPaths, getParameterByName } from "../utils";

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: Record<string, any>
  }
}

const useUserInfo = () => {
  const [state, setState] = useState<State>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<TopLevel>();

  const { firstName, lastName, email, phoneNumber } = state;

  const pathnameOrigin: string = window.location.origin;

  const navigate = useNavigate();

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setState((state) => ({ ...state, [target.name]: target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  
    window.dataLayer.push({
      event: 'checkout_initiated',
      eventProps: {
          label: "Buy intention",
          value: "By intention val"
      }
    });

    if (
      Object.values(state).every((item) => item.trim() !== "") &&
      !isNaN(+phoneNumber)
    ) {
      setLoading(true);
      try {

        let checkoutUrl = "https://python-course-function-git-main-joelibaceta.vercel.app/api/checkout.py"

        if (process.env.NODE_ENV === "development") {
          checkoutUrl += "?sandbox=true"
        } else {
          checkoutUrl += "?sandbox=false"
        }

        const response = await fetch(
          checkoutUrl,
          {
            method: "POST",
            body: JSON.stringify({
              title: "Curso Python 1er batch",
              success_url: `${pathnameOrigin}${"/#"}${validPaths.success}`,
              pending_url: `${pathnameOrigin}${"/#"}${validPaths.pending}`,
              failure_url: `${pathnameOrigin}${"/#"}${validPaths.failed}`,
              user_first_name: firstName,
              user_last_name: lastName,
              user_email: email,
              user_phone: `+51${phoneNumber}`,
            }),
          }
        );
        

        const data = await response.json();

        setResponse(data);

        const user = {
          user_first_name: firstName,
          user_last_name: lastName,
          user_email: email,
          user_phone: `+51${phoneNumber}`,
          invitation_code: getParameterByName("invitation_code"),
        };

        localStorage.setItem(keystore.USER_DATA, JSON.stringify(user));

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error: any) {
        setLoading(false);
        navigate("/server-error");
        throw new Error(error);
      }
    }
  };

  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    loading,
    response,
    handleInputChange,
    handleSubmit,
  };
};

export default useUserInfo;
