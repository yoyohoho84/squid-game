import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { AdminPanelMain } from "/";
import { NAME_PROJECT, NAME_PROJECT_LOWER_CASE } from "../../constants";

const AdminPanel = ({ openAlert, snackbar, getButtonStats, getPlatform }) => {
  const [settingGroupMailingId, setSettingGroupMailingId] = useState("");
  const [likeAddedGroupId, setLikeAddedGroupId] = useState("");
  const [searchManGroupMailingId, setSearchManGroupMailingId] = useState("");
  const [searchWomanGroupMailingId, setSearchWomanGroupMailingId] =
    useState("");
  const [searchWomanGroupSubId, setSearchWomanGroupSubId] = useState("");

  const [appID, setAppID] = useState("");

  const typeLink = {
    setting: settingGroupMailingId,
    like: likeAddedGroupId,
    "search-man": searchManGroupMailingId,
    "search-woman": searchWomanGroupMailingId,
    "search-woman-sub": searchWomanGroupSubId,
    "app-id": appID,
  };

  const typeLinkKey = {
    setting: "links.msgSettingPage",
    like: "links.subLikePage",
    "search-man": "links.msgSearchPageMan",
    "search-woman": "links.msgSearchPageWoman",
    "search-woman-sub": "links.subSearchPageWoman",
    "app-id": "links.appID",
  };

  function editLinkGroup(type) {
    axios
      .post("https://ods-studio.ru/app-statistics/edit", {
        key: typeLinkKey[type],
        value: typeLink[type],
      })
      .then(function (response) {
        if (response.data === "ok") {
          openAlert(
            type === "app-id"
              ? "Вы успешно изменили ссылку на приложение"
              : "Вы успешно изменили ссылку на группу"
          );
        } else {
          openAlert("Вы указали невалидную ссылку", "red");
        }
      })
      .catch(function (error) {});
  }

  function onChangeAction(e, type) {
    const value = e.target.value.trim();

    switch (type) {
      case "setting":
        setSettingGroupMailingId(value);
        break;
      case "like":
        setLikeAddedGroupId(value);
        break;
      case "search-man":
        setSearchManGroupMailingId(value);
        break;
      case "search-woman":
        setSearchWomanGroupMailingId(value);
        break;
      case "search-woman-sub":
        setSearchWomanGroupSubId(value);
        break;
      case "app-id":
        setAppID(value);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <AdminPanelMain
        onChangeAction={onChangeAction}
        editLinkGroup={editLinkGroup}
        NAME_PROJECT={NAME_PROJECT}
        settingGroupMailingId={settingGroupMailingId}
        likeAddedGroupId={likeAddedGroupId}
        searchManGroupMailingId={searchManGroupMailingId}
        searchWomanGroupMailingId={searchWomanGroupMailingId}
        searchWomanGroupSubId={searchWomanGroupSubId}
        getButtonStats={getButtonStats}
        getPlatform={getPlatform}
      />
      {snackbar}
    </div>
  );
};

export { AdminPanel };
