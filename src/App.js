import "./styles.css";
import React, { useState } from "react";
import Header from "./components/header";
import Content from "./components/content";
import TextContext from "./components/testContext";
import Hook from "./components/hook";
import { AppContext } from "./common/context";

export default function App() {
  return (
    <>
      {/* <AppContext.Provider
        value={{
          username: "",
          age: 1
        }}
      >
        <div>
          <Header></Header>
          <Content></Content>
        </div>
      </AppContext.Provider>
      <TextContext></TextContext> */}
      <Hook></Hook>
    </>
  );
}
