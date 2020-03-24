import React from "react";
import RenderDOM from "react-dom";
import AccountsList from "./AccountsList";

// This is fake account data.
// It mimics data that might be loaded from e.g. a server or database.
const fakeAccounts = [
  {
    id: 1,
    name: "One",
    email: "fake.email@example.com"
  },
  {
    id: 2,
    name: "Two",
    email: "fake.email@example.com"
  }
];

RenderDOM.render(
  <AccountsList accounts={fakeAccounts} />,
  document.getElementById("root")
);
