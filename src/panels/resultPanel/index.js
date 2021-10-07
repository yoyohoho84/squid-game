import React, { useState, useEffect, useReducer } from "react";
import { Button } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import cn from "classnames";
import "./ResultPanel.scss";

import { APP_ID_TARGET } from "../../constants";
import { nativeAds } from "../../ads";
import { addGroup, incrementCountButton } from "../../bridge-method";

const ResultPanel = ({
  id,
  go,
  IMGresult,
  getPlatform,
  openAlert,
  snackbar,
  fetchedUser,
  getGroupId,
  appID,
}) => {
  useEffect(() => {
    setTimeout(() => {
      nativeAds();
    }, 3000);
  }, []);

  const openNewApp = () => {
    bridge
      .send("VKWebAppOpenApp", { app_id: APP_ID_TARGET, location: "new-app" })
      .then((res) => {
        incrementCountButton("stats.buttonPage_result");
      })
      .catch((err) => {});
  };

  return (
    <div
      className={cn({
        "result-panel": true,
        web: getPlatform === "web",
      })}
    >
      <div className="img">{IMGresult}</div>

      <Button className="buttons" onClick={openNewApp}>
        Узнать дату смерти
      </Button>
      <Button className="buttons" onClick={openNewApp}>
        Узнать дату свадьбы
      </Button>
      <Button className="buttons" onClick={openNewApp}>
        Узнать дату первого секса
      </Button>
    </div>
  );
};

export { ResultPanel };
