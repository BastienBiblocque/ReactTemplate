import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Index from "./Page";
import Stats from "./Page/stats";

export default function BasicExample() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/stats" element={<Stats />} />
          </Routes>
      </BrowserRouter>
  );
}