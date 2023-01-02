import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Index from "./Page";

export default function BasicExample() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index />} />
          </Routes>
      </BrowserRouter>
  );
}