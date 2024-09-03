import React from "react";
import MyHeader from "./components/MyHeader";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from './router/routes';

export default function App() {
  return (
    <BrowserRouter>
      <MyHeader />
      <MyRoutes />
    </BrowserRouter >
  );
}

