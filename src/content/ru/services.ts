import type { Service } from "../services";
import { businessRu } from "./business";
import { howItWorksStepsRu } from "./how-it-works";

/**
 * Russian wording for the four confirmed services.
 *
 * Mirrors the Georgian and English records: the steps describe only what each
 * service is by definition, and nothing operational the business has not
 * confirmed is added (docs/OPEN-QUESTIONS.md #16–#18).
 */
export const servicesRu: Service[] = [
  {
    slug: "send-to-europe",
    seoTitle: "Отправка посылок из Грузии в Европу",
    seoDescription:
      "Отправьте посылку родным, друзьям и близким в Европу. Узнайте, как работает доставка посылок из Грузии и как оформить заказ в Parcello.",
    updatedAt: "2026-09-03",
    title: "Отправка посылок в Европу",
    direction: "Грузия → Европа",
    summary:
      "Отправьте посылку родным, друзьям и близким в Европу — грузинские продукты, одежду, подарки и личные вещи.",
    body: [
      "Parcello отправляет посылки из Грузии в любую страну Европы. Отправляйте грузинские продукты, одежду, подарки и личные вещи родным, друзьям и близким.",
      "Посылку можно передать курьеру или привезти по нашему адресу самостоятельно — как вам удобнее.",
      `${businessRu.departure} ${businessRu.doorDelivery}`,
      // Single-source pricing copy, as in the other locales.
      businessRu.pricing.dependsOn,
      businessRu.pricing.copy,
    ],
    image: "courier-handover.jpg",
    alt: "Курьер Parcello принимает посылку у клиента",
    steps: howItWorksStepsRu,
    deliveryTimeGenitive: businessRu.deliveryTimeGenitive,
  },
  {
    slug: "receive-from-europe",
    seoTitle: "Отправка посылок в Грузию",
    seoDescription:
      "Из Греции и Польши можно отправить посылку в Грузию. Узнайте, как передать посылку и сколько она идет.",
    updatedAt: "2026-09-13",
    title: "Отправка посылок в Грузию",
    direction: "Греция и Польша → Грузия",
    summary: "Из Греции и Польши можно отправить посылку в Грузию.",
    image: "parcels-tbilisi.jpg",
    alt: "Посылки Parcello в Тбилиси",
    steps: [
      {
        title: "Напишите нам",
        body: "Сообщите, что хотите отправить посылку в Грузию, и кто ее получатель.",
      },
      {
        title: "Получите адрес склада",
        body: "Мы пришлем адрес нашего склада, куда нужно сдать посылку.",
      },
      {
        title: "Подготовьте и сдайте посылку",
        body: "Положите вещи в картонную коробку, напишите на ней данные отправителя и получателя и привезите ее по адресу, который мы вам дали.",
      },
      {
        title: "Получите посылку в Грузии",
        body: "Посылка отправляется указанному получателю в Грузии.",
      },
    ],
    // Inbound has its own figure, not the outbound 2–3 weeks.
    deliveryTimeGenitive: businessRu.inboundDeliveryTimeGenitive,
  },
  {
    slug: "online-shopping",
    seoTitle: "Покупки в интернет-магазинах Европы",
    seoDescription:
      "Покупайте в европейских интернет-магазинах и получайте заказы в Грузии. Узнайте, как работает услуга Parcello.",
    updatedAt: "2026-09-03",
    title: "Покупки в интернет-магазинах Европы",
    direction: "Интернет-магазины Европы → Грузия",
    summary:
      "Покупайте в европейских интернет-магазинах и получайте заказы в Грузии.",
    image: "what-you-can-send.jpg",
    alt: "Покупки из интернет-магазинов — одежда, обувь и аксессуары",
    steps: [
      {
        title: "Получите адрес",
        body: "Свяжитесь с нами, и мы дадим адрес, на который нужно оформить доставку заказа.",
      },
      {
        title: "Сделайте заказ",
        body: "Выберите товары в интернет-магазине и укажите этот адрес как адрес доставки.",
      },
      {
        title: "Мы получаем заказ",
        body: "Когда заказ прибудет, мы подготовим посылку к отправке в Грузию.",
      },
      {
        title: "Получите посылку в Грузии",
        body: "Посылка прибывает в Грузию и передается вам.",
      },
    ],
    deliveryTimeGenitive: null,
  },
  {
    slug: "commercial-freight",
    seoTitle: "Перевозка коммерческих грузов из Европы",
    seoDescription:
      "Перевозка коммерческих грузов из Европы в Грузию. Импорт и экспорт для вашего бизнеса — пришлите нам данные о грузе.",
    updatedAt: "2026-09-13",
    title: "Коммерческие грузы",
    direction: "Европа → Грузия",
    summary: "Parcello перевозит коммерческие грузы из Европы в Грузию.",
    body: [
      "У нашей команды многолетний опыт в отрасли, и мы работаем над тем, чтобы ваш груз был доставлен к месту назначения безопасно, эффективно и в срок.",
      "Если вашему бизнесу нужно импортировать или экспортировать товары, мы подберем услугу под ваши требования.",
      "Если вас это интересует, пришлите нам данные о грузе или позвоните — и мы с вами свяжемся.",
    ],
    image: "commercial-freight.jpg",
    alt: "Грузовик, контейнеровоз и коробки Parcello на поддоне в порту",
    steps: [
      {
        title: "Пришлите данные",
        body: "Сообщите, откуда отправляется груз, что это за груз и каковы его примерный объем и вес.",
      },
      {
        title: "Мы свяжемся с вами",
        body: "Мы изучим ваши требования и предложим условия, подходящие вашему бизнесу.",
      },
      {
        title: "Мы принимаем груз",
        body: "Груз передается нашей команде в Европе согласованным с нами способом.",
      },
      {
        title: "Груз прибывает в Грузию",
        body: "Мы организуем перевозку до места назначения.",
      },
    ],
    deliveryTimeGenitive: null,
  },
];

export const getServiceRu = (slug: string): Service | undefined =>
  servicesRu.find((service) => service.slug === slug);
