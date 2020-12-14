import React from "react";
// Importing the Context Provider & Home Component
import MyContextProvider from "./components/contexts/MyContext";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <MyContextProvider>
      <Home />
    </MyContextProvider>
  );
}

export default App;
