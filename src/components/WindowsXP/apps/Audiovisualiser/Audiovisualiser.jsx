import React from "react";
import s from "./Audiovisualiser.module.scss";

const Audiovisualiser = () => {
  return (
    <div className={s.audiovisualiser}>
      <header>Test</header>
      <video src=""></video>
      <figcaption>
        <button id="play" aria-label="Play" role="button">
          ►
        </button>
        <progress id="progress" max="100" value="0">
          Progress
        </progress>
      </figcaption>
    </div>
  );
};

export default Audiovisualiser;
