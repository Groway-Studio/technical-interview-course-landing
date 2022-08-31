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

type DateValidation = (
  startDate: number,
  endDate: number,
  currentMonth: number,
  currentYear?: number
) => boolean;

const dateValitation: DateValidation = (
  startDate,
  endDate,
  currentMoth,
  currentYear = 2022
) => {
  return (
    new Date().getMonth() === currentMoth &&
    new Date().getDate() >= startDate &&
    new Date().getDate() <= endDate &&
    new Date().getFullYear() === currentYear
  );
};

const privateSaleVerification = (): boolean => {
  return !dateValitation(24, 31, 7);
};

const earlyBirdVerification = (): boolean => {
  return !dateValitation(1, 10, 8);
};

const realPriceVerification = (): boolean => {
  return !dateValitation(11, 20, 8);
};

export const getCurrentPrice = (): number => {
  return dateValitation(25, 31, 7) ? 49 : dateValitation(1, 10, 8) ? 99 : 150;
};

export interface Timeline {
  day: number;
  month: string;
  typeOfSale: string;
  description: string;
  price: string;
  until: string;
  ribbon?: boolean;
  disabled: boolean;
}

export const timeline: Timeline[] = [
  {
    day: 25,
    month: "Agosto",
    typeOfSale: "Venta Privada",
    description:
      "Este curso está pensado para todos aquellos programadores con poca o ninguna experiencia.",
    price: "49 USD",
    until: "31 de Agosto",
    ribbon: false,
    disabled: privateSaleVerification(),
  },
  {
    day: 1,
    month: "Septiembre",
    typeOfSale: "Early Bird Sale",
    description:
      "Este curso está pensado para todos aquellos programadores con poca o ninguna experiencia.",
    price: "99 USD",
    until: "10 de Septiembre",
    disabled: earlyBirdVerification(),
  },
  {
    day: 11,
    month: "Septiembre",
    typeOfSale: "Precio General",
    description:
      "Este curso está pensado para todos aquellos programadores con poca o ninguna experiencia.",
    price: "150 USD",
    until: "20 de Septiembre",
    disabled: realPriceVerification(),
  },
];
