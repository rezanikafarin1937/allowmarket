import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__nav}>PROJECTS</div>
        <div className={style.header__nav}>MIKIYA KOBAYASHI</div>
        <div className={style.header__nav}>ALL</div>
      </div>
    </div>
  );
};

export default Header;
