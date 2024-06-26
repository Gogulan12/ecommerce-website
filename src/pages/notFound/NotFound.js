import React from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={styles["not-found"]}>
      <div>
        <h2>404</h2>
        <p>Opppps, page not found.</p>
        <button className="--btn">
          <Link to="/">&larr; Back To Home</Link>
        </button>
      </div>
    </div>
  );
}
