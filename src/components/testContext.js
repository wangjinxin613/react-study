import React from "react";
import App from "../App";
import { AppContext } from "../common/context";
import { store } from "../common/redux";

export default class TestContext extends React.Component {
  componentDidMount() {
    const context = this.context;
    console.log(888, context);
  }
  render() {
    return (
      <div>
        <AppContext.Consumer>
          {(value) => {
            return value.sex;
          }}
        </AppContext.Consumer>
        {store.getState().counter}
      </div>
    );
  }
}

TestContext.contextType = AppContext;
