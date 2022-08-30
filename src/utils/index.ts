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
  } else if (
    // Use production by default
    loading === false &&
    (response?.init_point !== "" || response?.init_point !== undefined)
  ) {
    response?.init_point && window.location.replace(response.init_point);
  }
};

export const getParameterByName = (name = "", url = window.location.href) => {
  name = name.replace(/[[]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export enum validPaths {
  success = "/pago-exitoso",
  failed = "/pago-fallido",
  pending = "/pago-pendiente",
}

export const payment_id = getParameterByName("payment_id");

// export const payment_id = window.location.search
//   .split("&")
//   .filter((item: string) => item.includes("payment_id"))[0]
//   ?.split("=")[1];

export const keystore = {
  USER_DATA: "user_data",
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export interface Timeline {
  day: number;
  month: string;
  typeOfSale: string;
  description: string;
  price: string;
  until: string;
  ribbon?: boolean;
  disabled?: boolean;
}

export const timeline: Timeline[] = [
  {
    day: 25,
    month: "Agosto",
    typeOfSale: "Venta Privada",
    description:
      "Este curso está pensado en todos aquellos programadores con poca o ninguna experiencia.",
    price: "49 USD",
    until: "31 de Agosto",
  },
  {
    day: 25,
    month: "Agosto",
    typeOfSale: "Venta Privada",
    description:
      "Este curso está pensado en todos aquellos programadores con poca o ninguna experiencia.",
    price: "49 USD",
    until: "31 de Agosto",
    ribbon: true,
  },
  {
    day: 11,
    month: "Septiembre",
    typeOfSale: "Precio Real",
    description:
      "Este curso está pensado en todos aquellos programadores con poca o ninguna experiencia.",
    price: "150 USD",
    until: "20 de Septiembre",
    disabled: true,
  },
];
