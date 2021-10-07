import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import { navigate } from "@reach/router";
import { Button } from "@vkontakte/vkui";
import "./TemplatePage.scss";

import { story } from "../../sharing-method";
import { nativeAds } from "../../ads";
import { addGroup, incrementCountButton } from "../../bridge-method";
import {
  GROUP_ID_MAILING_SETTING,
  GROUP_ID_SUBSCRIPTION_LIKE,
  MAN_GROUP_ID_MAILING_SEARCH,
  WOMAN_GROUP_ID_MAILING_SEARCH,
  APP_IMG_SHARING_STORIES,
  APP_ID_DEFAULT,
} from "../../constants";

const TemplatePage = ({
  icon,
  header,
  title,
  description,
  buttonName,
  setTemplatePage,
  name,
  next,
  fn,
  appID,
  getGroupId,
  openAlert,
  fetchedUser,
  getRandomImg,
  imgIndex,
  gotToken,
  publishStories,
}) => {
  const [editTitle, setEditTitle] = useState(title);

  function subscribeMessageFromGroupDefault(groupIDsubscription, type, next) {
    bridge
      .send("VKWebAppAllowMessagesFromGroup", {
        group_id: groupIDsubscription,
      })
      .then((res) => {
        if (type === "search") {
          setTemplatePage(next);
        }
        incrementCountButton(`stats.buttonPage_${type}`);
      })
      .catch((err) => {
        bridge
          .send("VKWebAppAllowMessagesFromGroup", {
            group_id: groupIDsubscription,
          })
          .then((res) => {
            if (type === "search") {
              setTemplatePage(next);
            }
            incrementCountButton(`stats.buttonPage_${type}`);
          })
          .catch((err) => {
            bridge
              .send("VKWebAppAllowMessagesFromGroup", {
                group_id: groupIDsubscription,
              })
              .then((res) => {
                if (type === "search") {
                  setTemplatePage(next);
                }
                incrementCountButton(`stats.buttonPage_${type}`);
              })
              .catch((err) => {
                if (type === "search") {
                  setTemplatePage(next);
                }
              });
          });
      });
  }

  useEffect(() => {
    switch (name) {
      case "setting":
        subscribeMessageFromGroupDefault(
          getGroupId.msgSettingPage
            ? getGroupId.msgSettingPage
            : GROUP_ID_MAILING_SETTING,
          name,
          next
        );
        break;
      case "like":
        nativeAds();
        addGroup(
          getGroupId.subLikePage
            ? getGroupId.subLikePage
            : GROUP_ID_SUBSCRIPTION_LIKE,
          name
        );
        break;
      case "search":
        setTimeout(() => {
          setEditTitle("Просматриваю сообщения.");
        }, 500);
        setTimeout(() => {
          setEditTitle("Просматриваю сообщения..");
        }, 1000);
        setTimeout(() => {
          setEditTitle("Просматриваю сообщения...");
        }, 1500);
        setTimeout(() => {
          setEditTitle("Провожу более глубокий анализ.");
        }, 2500);
        setTimeout(() => {
          setEditTitle("Провожу более глубокий анализ..");
        }, 3500);
        setTimeout(() => {
          setEditTitle("Провожу более глубокий анализ...");
        }, 4500);

        const groupIdMan = getGroupId.msgSearchPageMan
          ? getGroupId.msgSearchPageMan
          : MAN_GROUP_ID_MAILING_SEARCH;

        const groupIdWoman = getGroupId.subSearchPageWoman
          ? getGroupId.subSearchPageWoman
          : WOMAN_GROUP_ID_MAILING_SEARCH;

        if (fetchedUser?.sex === 2) {
          setTimeout(() => {
            subscribeMessageFromGroupDefault(groupIdMan, name, next);
          }, 5000);
        } else {
          setTimeout(() => {
            addGroup(groupIdWoman, name);
          }, 5000);
        }

        break;
      case "result":
        getRandomImg(0, 8);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="container">
      <div className="container__icon">{icon}</div>
      <div className="container__main">
        <div className="header">{header}</div>
        <div className="title">{editTitle}</div>
        <div className="description">{description}</div>
      </div>

      <div className="buttons">
        {buttonName && (
          <Button
            onClick={() => {
              if (name === "result") {
                story(APP_IMG_SHARING_STORIES[imgIndex], name);
                // gotToken && publishStories();
              } else {
                setTemplatePage(next);
              }
            }}
            className="buttons"
            stretched
          >
            <span>{buttonName}</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export { TemplatePage };
