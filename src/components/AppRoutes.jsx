import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Main";
import Timer from "./Chat";
import { Create } from "./Create";
import { Add } from "./Add";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/timer" element={<Timer />} />
    <Route path="/create" element={<Create />} />
    <Route path="/add" element={<Add />} />
  </Routes>
);

export default AppRoutes;
