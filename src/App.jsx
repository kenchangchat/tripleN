import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterIndex from "./routes/RouterIndex";
import "./App.scss";


function App() {
  return (
    <>
      <Router>
        <RouterIndex />
        
      </Router>
    </>
  );
}

export default App;
