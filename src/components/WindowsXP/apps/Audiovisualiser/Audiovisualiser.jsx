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
            <button>
              <img src="/images/audiovisualiser/btn_past.svg" alt="" />
            </button>
            <progress id="progress" max="100" value="0">
              Progress
            </progress>
            <button>
              <img src="/images/audiovisualiser/btn_forward.svg" alt="" />
            </button>
          </div>
          <div className={s.btnContainer}>
            <div>
              <button className={s.pinkBtn}>
                <img src="/images/audiovisualiser/btn_previous.svg" alt="" />
              </button>
              <button className={s.pinkBtn}>
                <img src="/images/audiovisualiser/btn_next.svg" alt="" />
              </button>
            </div>
            <div>
              <button className={s.pinkBtn}>
                <img src="/images/audiovisualiser/btn_audio.svg" alt="" />
              </button>
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
