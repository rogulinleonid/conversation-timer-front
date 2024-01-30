import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import io from "socket.io-client";

import Main from "./Main";
import { Timer } from "./Timer";
import { Create } from "./Create";
import { Add } from "./Add";
import { Room } from "./Room";

export const AppContext = createContext(null);
const socket = io.connect("http://localhost:5000");

const AppRoutes = () => {
  const [data, setData] = useState();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <AppContext.Provider value={{ data, setData, socket }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/timer" element={<Timer expiryTimestamp={time} />} />
        <Route path="/create" element={<Create />} />
        <Route path="/add" element={<Add />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default AppRoutes;
