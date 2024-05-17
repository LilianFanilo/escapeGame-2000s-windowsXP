import React, { useState } from "react";
import s from "./Audiovisualiser.module.scss";
import Window from "../../../Window/Window";
import audiovisualiser_icon from "../../../../assets/WindowsIcons/audiovisualiser_icon.png";

const Audiovisualiser = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const playVid = () => {
    let vid = document.getElementById("myVideo");
    if (!isPlaying) {
      setIsPlaying(true);
      vid.play();
    } else if (isPlaying) {
      setIsPlaying(false);
      vid.pause();
    }
  };

  const updateProgressBar = () => {
    let vid = document.getElementById("myVideo");
    let progressBar = document.getElementById("progress-bar");
    let percentage = Math.floor((100 / vid.duration) * vid.currentTime);
    progressBar.value = percentage;
  };

  const seekTimeStamp = (event) => {
    let vid = document.getElementById("myVideo");
    let progressBar = document.getElementById("progress-bar");
    let percent = event.offsetX / progressBar.offsetWidth;
    vid.currentTime = percent * vid.duration;
    progressBar.value = Math.floor(percent / 100);
  };

  const restartVid = () => {
    let vid = document.getElementById("myVideo");
    vid.pause();
    vid.currentTime = 0;
  };

  const skip = (value) => {
    let vid = document.getElementById("myVideo");
    vid.currentTime += value;
  };

  const changeVolume = (evt) => {
    let vid = document.getElementById("myVideo");
    vid.volume = evt.target.value;
    console.log(evt);
  };

  const updateVolumeStyle = () => {
    let volumeRange = document.getElementById("volume-bar");

    volumeRange.addEventListener("input", function () {
      const value = this.value;
      this.style.background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${value}%, #ddd ${value}%, #ddd 100%)`;
    });
  };

  updateVolumeStyle;

  const muteVolume = () => {
    let vid = document.getElementById("myVideo");
    if (vid.muted) {
      setIsMuted(false);
      vid.muted = false;
    } else {
      setIsMuted(true);
      vid.muted = true;
    }
  };

  return (
    <Window appName="Lecteur audio" appIcon={audiovisualiser_icon}>
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
        {/* Appel de la vidéo */}
        <video
          id="myVideo"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          onTimeUpdate={updateProgressBar}
        ></video>

        <figcaption>
          <div className={s.videoInputsLeft}>
            {/* Button Play Pause */}
            <button className={s.btnPlay} onClick={playVid}>
              {isPlaying && "II"}
              {!isPlaying && "►"}
            </button>
            {/* Restart */}
            <button className={s.btnStop} onClick={restartVid}>
              <div>■</div>
            </button>
          </div>
          <div className={s.videoInputsRight}>
            <div className={s.progressContainer}>
              {/* Rewind */}
              <button onClick={() => skip(-10)}>
                <img src="/images/audiovisualiser/btn_past.svg" alt="" />
              </button>
              {/* Progress bar */}
              <progress
                id="progress-bar"
                min={0}
                max={100}
                value={0}
                onClick={() => seekTimeStamp(event)}
              ></progress>
              {/* Fast Forward */}
              <button onClick={() => skip(10)}>
                <img src="/images/audiovisualiser/btn_forward.svg" alt="" />
              </button>
            </div>
            <div className={s.btnContainer}>
              <div className={s.nextBackBtn}>
                <button>
                  {" "}
                  <img src="/images/audiovisualiser/btn_previous.svg" alt="" />
                </button>
                <button>
                  {" "}
                  <img src="/images/audiovisualiser/btn_next.svg" alt="" />
                </button>
              </div>
              <div className={s.volumeContainer}>
                {/* Volume Mute */}
                <button id="btnMute" className={s.btnMute} onClick={muteVolume}>
                  {isMuted && "Mute"}
                  {!isMuted && (
                    <img src="/images/audiovisualiser/btn_audio.svg" alt="" />
                  )}
                </button>
                {/* Volume Changer */}
                <input
                  type="range"
                  id="volume-bar"
                  title="volume"
                  min={0}
                  max={1}
                  step={0.1}
                  onChange={changeVolume}
                />
              </div>
              <div>
                <span>Nom Chanson</span>
              </div>
            </div>
          </div>
        </figcaption>
      </div>
    </Window>
  );
};

export default Audiovisualiser;
