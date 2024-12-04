import React from 'react';
import {Routes, Route } from "react-router-dom";
import { MsalProvider } from "@azure/msal-react";
import Signin from './components/Signin';

function App({ instance }) {
  return (
    <MsalProvider instance={instance}>
      <Routes>
        <Route path="/" element={<Signin/>} />
      </Routes>
    </MsalProvider>
  );
}

export default App;