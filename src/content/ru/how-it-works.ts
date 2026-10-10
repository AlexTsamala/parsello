import type { HowItWorksStep } from "../types";
import { businessRu } from "./business";

/** Shared by the Russian homepage and every Russian country page. */
export const howItWorksStepsRu: HowItWorksStep[] = [
  {
    title: "Оформите заказ",
    body: "Позвоните нам или напишите в Facebook и согласуйте детали.",
  },
  {
    title: "Подготовьте посылку",
    body: "Упакуйте вещи так, чтобы они были защищены в дороге.",
  },
  {
    title: "Мы принимаем посылку",
    body: "Передайте посылку курьеру или привезите ее к нам сами.",
  },
  {
    title: "Посылка едет в Европу",
    body: `${businessRu.departure} Посылка доходит до получателя в течение ${businessRu.deliveryTimeGenitive} после отправки. ${businessRu.doorDelivery}`,
  },
];
