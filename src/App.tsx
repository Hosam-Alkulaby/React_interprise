import { useState } from "react";
import "./App.css";

import AppHeader from "./AppHeader";
import SideMenu from "./SideMenu";
import PageContent from "./PageContent";
import AppFooter from "./AppFooter";
import { Space } from "antd";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="sidemenupagecontent">
        <SideMenu />
        <PageContent />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
