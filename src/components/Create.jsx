import React, { useState } from "react";

import styles from "../styles/Main.module.css";

export const Create = () => {
  const [name, setName] = useState();
  const [room, setRoom] = useState();
  const [totalTime, setTotalTime] = useState();
  const [clientCount, setClientsCount] = useState();

  const onButtonClick = () => {
    if (name) {
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.group}>
          <input
            type="text"
            placeholder="введите имя"
            value={name}
            className={styles.input}
            onChange={({ target: { value } }) => {
              setName(value);
            }}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.group}>
          <input
            type="text"
            placeholder="введите название комнаты"
            value={room}
            className={styles.input}
            onChange={({ target: { value } }) => {
              setRoom(value);
            }}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.group}>
          <input
            type="number"
            placeholder="укажите общее время в минутах"
            value={totalTime}
            className={styles.input}
            onChange={({ target: { value } }) => {
              setTotalTime(value);
            }}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.group}>
          <input
            type="number"
            placeholder="укажите кол-во участников беседы"
            value={clientCount}
            className={styles.input}
            onChange={({ target: { value } }) => {
              setClientsCount(value);
            }}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.group}>
          <button
            onClick={onButtonClick}
            type="submit"
            className={styles.button}
          >
            Создать
          </button>
        </div>
      </div>
    </div>
  );
};
