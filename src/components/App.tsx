import React from "react";

import TreeView from "./TreeView/TreeView";

import "./App.scss";

const TreeViewData = ["1", "2", "3", "4"];
// TODO: move layout to different components i guess
// TODO: add async import
function App() {
  return (
    <div className="layout-container">
      <header className="layout-container__header">Header</header>
      <nav className="layout-container__sidebar">
        <TreeView data={TreeViewData} />
      </nav>
      <article className="layout-container__content">Content</article>
    </div>
  );
}

export default App;
