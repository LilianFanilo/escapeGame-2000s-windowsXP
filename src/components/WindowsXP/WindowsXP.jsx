import { useState } from "react";
import s from "./WindowsXP.module.scss";
import OfficeFooter from "./OfficeFooter/OfficeFooter";
import Notepad from "./apps/Notepad/Notepad";
import ErrorPopUp from "../ErrorPopUp/ErrorPopUp";
import Blog from "./apps/Blog/Blog";
import Audiovisualiser from "./apps/Audiovisualiser/Audiovisualiser";
import blog_icone from "../../assets/WindowsIcons/blog_icone.png";
import audiovisualiser_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";

function WindowsXP() {
  const [blogVisible, setBlogVisible] = useState(false);
  const [audioVisible, setAudioVisible] = useState(false);

  const handleBlogIconDoubleClick = () => {
    setBlogVisible(true);
  };

  const handleAudioIconDoubleClick = () => {
    setAudioVisible(true);
  };

  return (
    <>
      <div className={s.windowsXP}>
        <OfficeFooter />
      </div>
      <Notepad />
      <div className={s.blog_icone} onDoubleClick={handleBlogIconDoubleClick}>
        <img
          draggable="false"
          height={30}
          width={30}
          src={blog_icone}
          className={s.blog_icone}
          alt=""
        />
        <p className={s.title}>Blog</p>
      </div>
      {/* Affichage du composant Blog lorsque blogVisible est true */}
      {blogVisible && <Blog />}

      <div
        className={s.audiovisualiser_icon}
        onDoubleClick={handleAudioIconDoubleClick}
      >
        <img
          draggable="false"
          height={30}
          width={30}
          src={audiovisualiser_icon}
          className={s.audiovisualiser_icon}
          alt=""
        />
        <p className={s.title}>Lecteur audio</p>
      </div>
      {/* Affichage du composant Blog lorsque blogVisible est true */}
      {audioVisible && <Audiovisualiser />}
    </>
  );
}

export default WindowsXP;
