import { useState } from "react";

import { State, TopLevel } from "../interfaces";
import { keystore, validPaths } from "../utils";

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

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setState((state) => ({ ...state, [target.name]: target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      Object.values(state).every((item) => item.trim() !== "") &&
      !isNaN(+phoneNumber)
    ) {
      setLoading(true);
      try {
        const response = await fetch(
          "https://python-course-function-git-main-joelibaceta.vercel.app/api/checkout.py",
          {
            method: "POST",
            body: JSON.stringify({
              title: "Curso Python 1er batch",
              success_url: `${pathnameOrigin}${
                process.env.NODE_ENV === "production" ? "/#" : ""
              }${validPaths.success}`,
              pending_url: `${pathnameOrigin}${
                process.env.NODE_ENV === "production" ? "/#" : ""
              }${validPaths.pending}`,
              failure_url: `${pathnameOrigin}${
                process.env.NODE_ENV === "production" ? "/#" : ""
              }${validPaths.failed}`,
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
        };

        localStorage.setItem(keystore.USER_DATA, JSON.stringify(user));

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error: any) {
        setLoading(false);
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
