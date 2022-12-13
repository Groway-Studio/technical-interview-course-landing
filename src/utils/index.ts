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
  currentMonth: "august" | "september"
) => boolean;

export const dateValitation: DateValidation = (
  startDate,
  endDate,
  currentMoth
) => {
  return (
    new Date().getDate() >= startDate &&
    new Date().getDate() <= endDate &&
    new Date().getMonth() === (currentMoth === "august" ? 7 : 8) &&
    new Date().getFullYear() === 2022
  );
};

const privateSaleVerification = (): boolean =>
  !dateValitation(24, 31, "august");

const earlyBirdVerification = (): boolean =>
  !dateValitation(1, 10, "september");

const realPriceVerification = (): boolean =>
  !dateValitation(11, 20, "september");

export const getCurrentPrice = (): number =>
  dateValitation(25, 31, "august")
    ? 29
    : dateValitation(1, 10, "september")
    ? 49
    : 99;

export interface Timeline {
  day: number;
  month: string;
  typeOfSale: string;
  description: string;
  price: string;
  until: string;
  ribbon?: boolean;
  disabled: boolean;
  discount?: number;
}

export const timeline: Timeline[] = [
  {
    day: 25,
    month: "Agosto",
    typeOfSale: "Venta Privada",
    description:
      "Venta privada especial para socios, colaboradores, referidos, amigos y clientes de la empresa.",
    price: "49 USD",
    until: "31 de Agosto",
    ribbon: true,
    disabled: privateSaleVerification(),
    discount: 67,
  },
  {
    day: 1,
    month: "Septiembre",
    typeOfSale: "Early Bird Sale",
    description:
      "Primera venta pública abierta a todo público con un descuento por pronta compra.",
    price: "99 USD",
    until: "10 de Septiembre",
    ribbon: true,
    disabled: earlyBirdVerification(),
    discount: 33,
  },
  {
    day: 11,
    month: "Septiembre",
    typeOfSale: "Precio General",
    description: "Última semana de venta pública antes del inicio del curso.",
    price: "150 USD",
    until: "20 de Septiembre",
    disabled: realPriceVerification(),
  },
];
