import { useState } from "react";

import { State } from "../interfaces";

const useUserInfo = () => {
  const [state, setState] = useState<State>({
    firstName: "",
    lastName: "",
    email: "",
    prefixPhoneNumber: "",
    phoneNumber: "",
  });

  const { firstName, lastName, email, prefixPhoneNumber, phoneNumber } = state;

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setState((state) => ({ ...state, [target.name]: target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
  };

  return {
    firstName,
    lastName,
    email,
    prefixPhoneNumber,
    phoneNumber,
    handleInputChange,
    handleSubmit,
  };
};

export default useUserInfo;
