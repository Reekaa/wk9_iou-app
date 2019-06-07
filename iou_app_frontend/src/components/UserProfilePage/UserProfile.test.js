import React from "react";
import UserProfile from "./UserProfile";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";
import reducer from "./reducers/index";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  // call reducer
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <UserProfile
      currentUser = {{
        "_id": "5cf7827a376aeea2852f51b6",
        "name": "Reka",
        "skill": "dog walking",
        "groups": [
          {
            "groupName": "SW2",
            "karma": 0,
            "completedTasks": [
              {
                "task": "Babysitting",
                "value": 10,
                "whoFor": "Keith",
                "karma": 10,
                "date": "2019-06-05T08:53:25.678Z",
                "cost": {
                  "hours": "1"
                }
              },
              {
                "task": "Painting",
                "value": 10,
                "whoFor": "Ben",
                "karma": 10,
                "date": "2019-06-05T08:53:37.103Z",
                "cost": {
                  "hours": "1"
                }
              }
            ]
          },
        ],
        "isCurrent": false,
        "avatar": "./images/reka.JPG"
      }}
    />
  );

  const btn = untils.getByLabelText("view-group")

  return {
    btn,
    ...utils
  };

};

describe(' Profile Page testing ',  () => {
  it("should display view group button ", async () => {
    // Arrange
    const { getByLabelText, btn } = render(<UserProfile/>);
    // Act
    // Assert
    expect(getByLabelText(/"view-group"/i)).toBeTruthy();
  });

})
