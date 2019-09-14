import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import MainRoute from './components/MainRoute.js';
import SearchForm from './components/SearchForm.js'


export default function App() {
  return (
    <main>
      <Header> 
        <searchForm/> 
      </Header>

      <TabNav />
      <MainRoute />
    </main>
  );
}
