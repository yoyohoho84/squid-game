import React, { useState } from "react";
import { navigate } from "@reach/router";
import { Panel, PanelHeader, Button } from "@vkontakte/vkui";

import { TemplatePage } from "../../components/TemplatePage/index";
import "./Home.scss";
import { dataTemplatePages } from "../../helpers";
import { AdminPanel } from "../index";

const Home = ({
  id,
  go,
  snackbar,
  fetchedUser,
  setTemplatePage,
  templatePage,
  appID,
  openAlert,
  getButtonStats,
  getStats,
  getGroupId,
  getRandomImg,
  imgIndex,
  publishStories,
  gotToken,
}) => {
  return (
    <div
      style={
        {
          // height: "100vh",
        }
      }
    >
      <>
        {fetchedUser && (
          <>
            {[554966402, 616935572, 73606509].includes(fetchedUser.id) ? (
              <Button
                onClick={() => navigate("/admin-panel")}
                style={{
                  width: "150px",
                  height: "30px",
                  backgroundColor: "#ff6781",
                  borderRadius: "15px",
                  left: "10px",
                  top: "10px",
                  position: "absolute",
                }}
              >
                Админ панель
              </Button>
            ) : (
              ""
            )}
          </>
        )}
      </>

      {dataTemplatePages.map((item, index) => {
        if (item.name === templatePage) {
          return (
            <TemplatePage
              key={index}
              icon={item.icon}
              header={item.header}
              title={item.title}
              description={item.description}
              buttonName={item.buttonName}
              next={item.next}
              setTemplatePage={setTemplatePage}
              fn={item.fn && item.fn}
              name={item.name}
              appID={appID}
              getGroupId={getGroupId}
              openAlert={openAlert}
              fetchedUser={fetchedUser}
              getRandomImg={getRandomImg}
              imgIndex={imgIndex}
              gotToken={gotToken}
              publishStories={publishStories}
            />
          );
        }
      })}
    </div>
  );
};

export { Home };
