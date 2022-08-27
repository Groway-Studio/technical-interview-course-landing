import { TopLevel } from "../interfaces";

type RedirectFn = (loading: boolean, response: TopLevel | undefined) => void;

export const RedirectMP: RedirectFn = (loading, response) => {
  if (
    process.env.NODE_ENV === "development" &&
    loading === false &&
    (response?.sandbox_init_point !== "" ||
      response?.sandbox_init_point !== undefined)
  ) {
    response?.sandbox_init_point &&
      window.location.replace(response.sandbox_init_point);
  } else (  // Use production by default
    loading === false &&
    (response?.init_point !== "" || response?.init_point !== undefined)
  ) {
    response?.init_point && window.location.replace(response.init_point);
  }
};

export enum validPaths {
  success = "/pago-exitoso",
  failed = "/pago-fallido",
  pending = "/pago-pendiente",
}

export const payment_id = window.location.search
  .split("&")
  .filter((item: string) => item.includes("payment_id"))[0]
  ?.split("=")[1];

export const keystore = {
  USER_DATA: "user_data",
};
