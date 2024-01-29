import React, { useState } from "react";

import styles from "../styles/Main.module.css";

export const Add = () => {
  const [name, setName] = useState();
  const [room, setRoom] = useState();

  const onButtonClick = () => {};

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
          <button
            onClick={onButtonClick}
            type="submit"
            className={styles.button}
          >
            Присоединиться
          </button>
        </div>
      </div>
    </div>
  );
};
