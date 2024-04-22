import React from "react";
import s from "./Audiovisualiser.module.scss";

const Audiovisualiser = () => {
  return (
    <div className={s.audiovisualiser}>
      <nav>
        <ul>
          <li>Fichiers</li>
          <li>Vue</li>
          <li>Play</li>
          <li>Outils</li>
          <li>Aide</li>
        </ul>
      </nav>
      <video src=""></video>
      <figcaption>
        <div>
          <button id="play" aria-label="Play" role="button">
            ►
          </button>
          <button id="play" aria-label="Play" role="button">
            ►
          </button>
        </div>
        <div>
          <div>
            <progress id="progress" max="100" value="0">
              Progress
            </progress>
          </div>
          <div>
            <button></button>
            <button></button>
            <button></button>
            <progress></progress>
          </div>
        </div>
      </figcaption>
    </div>
  );
};

export default Audiovisualiser;
