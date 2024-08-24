import React from "react";
import style from "./LoadingPage.module.css";

export default function LoadingPage() {
  return (
    <div className={style.preloader}>
      <div class={style.loader}/>
    </div>
  );
}
