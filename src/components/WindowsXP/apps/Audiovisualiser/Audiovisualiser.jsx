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
        <div className={s.videoInputsLeft}>
          <button
            className={s.btnPlay}
            id="play"
            aria-label="Play"
            role="button"
          >
            ►
          </button>
          <button
            className={s.btnStop}
            id="play"
            aria-label="Play"
            role="button"
          >
            ■
          </button>
        </div>
        <div className={s.videoInputsRight}>
          <div className={s.progressContainer}>
            <button>►</button>
            <progress id="progress" max="100" value="0">
              Progress
            </progress>
            <button>►</button>
          </div>
          <div className={s.btnContainer}>
            <div>
              <button>►</button>
              <button>►</button>
            </div>
            <div>
              <button>🕪</button>
              <progress></progress>
            </div>
            <div>
              <span>Nom Chanson</span>
            </div>
          </div>
        </div>
      </figcaption>
    </div>
  );
};

export default Audiovisualiser;
