import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import MainRoute from './components/MainRoute.js';


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <MainRoute />
    </main>
  );
}
