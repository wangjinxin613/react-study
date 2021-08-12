import React from "react";

export const AppContext = React.createContext({
  username: "小张",
  age: 18,
  sex: "男"
});

AppContext.displayName = "xiaolala";
