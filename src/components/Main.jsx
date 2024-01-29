import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Таймер Беседы</h1>
        <Link className={styles.group} to="/create">
          <button type="submit" className={styles.button}>
            Создать новую беседу
          </button>
        </Link>
        <Link className={styles.group} to="/add">
          <button type="submit" className={styles.button}>
            Присоединиться к существующей
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
