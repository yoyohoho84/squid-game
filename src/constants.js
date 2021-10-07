import axios from "axios";

export const APP_ID_TARGET = 7812418; // ILLUMINATE
export const APP_ID_DEFAULT = 7949046;
// Страница с шестеренкой № 2 (рассылка Енотик https://vk.com/club207160114)
export const GROUP_ID_MAILING_SETTING = 207160114;
// Страница с лайком № 3 (подписка Абсурд https://vk.com/polniiabsurd)
export const GROUP_ID_SUBSCRIPTION_LIKE = 187253745;
// Страница с лайком № 4
// (рассылка мужчины ждем ссылку)
export const MAN_GROUP_ID_MAILING_SEARCH = 207161988;
// (рассылка женщины ждем ссылку)
export const WOMAN_GROUP_ID_MAILING_SEARCH = 192779261;

export const USER_ID = Number(
  new URLSearchParams(document.location.search).get("vk_user_id")
);
export const NAME_PROJECT = "App statistics";
export const NAME_PROJECT_LOWER_CASE = "APP STATISTICS";
export const APP_IMG_SHARING_STORIES = [
  "https://sun9-6.userapi.com/impg/mUn1P8YbHuJNDem8wWzLx2NEKXc-2Gfaw0lpTQ/lxwW4R35DlM.jpg?size=607x1080&quality=96&sign=bc5a89c8a2814560405d488db2a839db&type=album",
  "https://sun9-44.userapi.com/impg/AVHjTRZfL7UbkjHvqNOiv5RahX2NldQmtH8HCA/-GruJjAAtD4.jpg?size=607x1080&quality=96&sign=6e139364261118eb0c8a8efa624082f2&type=album",
  "https://sun9-71.userapi.com/impg/v3dCLnlLmG075T_BGeoUMQ09IjK1U04JTTOjuQ/5cAGvnbPBNA.jpg?size=607x1080&quality=96&sign=9a15b98207fa326fc264b351c1ae6b96&type=album",
  "https://sun9-47.userapi.com/impg/DZgz0UDyrEpnlEjS8TyVlU9lGFTYFHEE_w6sFA/jx-sh-xgT6c.jpg?size=607x1080&quality=96&sign=141fbf7dacebce76b965993074b2395d&type=album",
  "https://sun9-29.userapi.com/impg/Fdrhu93W-mnlRClIXlAwGAkAUvvyR4POMRRBXg/4fDpCy17MOo.jpg?size=607x1080&quality=96&sign=6634223dbe896e7fd465598caa50c324&type=album",
  "https://sun9-28.userapi.com/impg/IHFRH_Ld3qbvq0vugLYH5UJ0abAB98R8B8UKBw/5zu8uFKxNms.jpg?size=607x1080&quality=96&sign=d91be374ffb86fddcf10da563f0ba387&type=album",
  "https://sun9-85.userapi.com/impg/NY3a8a4hwki2ipwH9DRCFpHmUihaI9_kWYNvRQ/wIx2Lknh3ZI.jpg?size=607x1080&quality=96&sign=cd262538728af5f61f21503212c799ef&type=album",
  "https://sun9-54.userapi.com/impg/lzVBzRyeR-N8v50cmZlX-mZAa1swdnezhkxWSA/oDo0LyjT4ew.jpg?size=607x1080&quality=96&sign=5ea115c386921cbdd5daf11beabd3da5&type=album",
];
