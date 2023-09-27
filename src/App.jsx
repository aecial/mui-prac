import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import SideNavigation from "./components/SideNavigation";
import Aside from "./components/Aside";
import Home from "./components/Home";

function App() {
  return (
    <>
      {/* <PhotoAlbum /> */}
      <CssBaseline />
      <Navbar />
      <main className="p-4 items-center gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <SideNavigation />
          <Home />
          <Aside online={10} />
        </div>
      </main>
    </>
  );
}
export default App;
