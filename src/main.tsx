import React from "react";
import ReactDOM from "react-dom/client";
import App, { AppProps } from "./App";
import "./index.css";
import { RecoilRoot } from "recoil";

const mockTeam: AppProps = {
  members: [
    {
      id: 0,
      name: "foo",
    },
    {
      id: 1,
      name: "bar",
    },
    {
      id: 2,
      name: "baz",
    },
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <App members={mockTeam.members} />
    </RecoilRoot>
  </React.StrictMode>
);
