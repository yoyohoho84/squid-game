import {
  DoorIcon,
  SettingIcon,
  LikeIcon,
  StatsIcon,
  RocketIcon,
} from "../icons";
import { sharing } from "../sharing-method";
import { APP_IMG_SHARING_STORIES, APP_ID_DEFAULT } from "../constants";

export const dataTemplatePages = [
  {
    name: "/",
    icon: <DoorIcon />,
    header: "Привет!",
    title:
      "Наше приложение не является официальным и не может предоставлять точную статистику*",
    description:
      "* Приблизительные цифры высчитываются по формуле разработанной при анализе специальной фокус группы.",
    buttonName: "Ок",
    next: "setting",
  },
  {
    name: "setting",
    icon: <SettingIcon />,
    header: "Разрешите доступ",
    title: "Это необходимо для того, чтобы я смог получить твои данные",
    description: "",
    buttonName: "Хорошо",
    next: "like",
  },
  {
    name: "like",
    icon: <LikeIcon />,
    header: "Отлично",
    title: "Теперь я могу проверить твои данные",
    description: "",
    buttonName: "Начать анализ",
    next: "search",
  },
  {
    name: "search",
    icon: <StatsIcon />,
    header: "Провожу анализ",
    title: "Ищу дату регистрации...",
    description: "",
    buttonName: "",
    next: "result",
  },
  {
    name: "result",
    icon: <RocketIcon />,
    header: "Анализ завершён",
    title: "Ну, что посмотрим немного статистике о тебе?",
    description: "",
    buttonName: "Опубликовать анализ в истории",
    next: "/result-panel",
  },
];
