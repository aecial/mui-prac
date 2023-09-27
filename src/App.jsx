import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import SideNavigation from "./components/SideNavigation";
import Aside from "./components/Aside";
import Home from "./components/Home";
import Pages from "./components/Pages";
import Groups from "./components/Groups";
function App() {
  const [mainCont, setMainCont] = useState(0);
  const contents = [<Home />, <Pages />, <Groups />];

  return (
    <>
      {/* <PhotoAlbum /> */}
      <CssBaseline />
      <Navbar />
      <main className="p-4 items-center gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <SideNavigation
            onClick={() => setMainCont(1)}
            homeClick={() => setMainCont(0)}
            groupClick={() => setMainCont(2)}
          />
          {contents[mainCont]}
          <Aside online={10} />
        </div>
      </main>
    </>
  );
}
export default App;
