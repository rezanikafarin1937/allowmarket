import React from "react";
import styles from "./Item.module.scss";

const Item = ({ data }) => {
  return (
    <div className={styles.item}>
      <div className={styles.ratio}></div>
      <div className={styles.layer}><h2 className={styles.text}>{data.name}</h2></div>
      <div className={styles.image} style={{backgroundImage : `url(${data.image})`}}></div>
    </div>
  );
};

export default Item;
