import { useState } from "react";
import s from "./WindowsXP.module.scss";
import OfficeFooter from "./OfficeFooter/OfficeFooter";
import Notepad from "./apps/Notepad/Notepad";
import ErrorPopUp from "../ErrorPopUp/ErrorPopUp";
import Blog from "./apps/Blog/Blog";
import Audiovisualiser from "./apps/Audiovisualiser/Audiovisualiser";
import notepad_icon from "../../assets/WindowsIcons/notepad.png";
import blog_icon from "../../assets/WindowsIcons/blog_icone.png";
import audiovisualiser_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";

function WindowsXP() {
  const [noteVisible, setNoteVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const [audioVisible, setAudioVisible] = useState(false);

  const handleNoteIconDoubleClick = () => {
    setNoteVisible(true);
  };

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
      <div className={s.officeIcons} onDoubleClick={handleNoteIconDoubleClick}>
        <div className={s.app_icon}>
          <img
            draggable="false"
            height={30}
            width={30}
            src={notepad_icon}
            className={s.image}
            alt=""
          />
          <span className={s.title}>Notepad</span>
        </div>
        {/* Affichage du composant lecteur audio lorsque blogVisible est true */}
        {noteVisible && <Notepad />}

        <div className={s.app_icon} onDoubleClick={handleBlogIconDoubleClick}>
          <img
            draggable="false"
            height={30}
            width={30}
            src={blog_icon}
            className={s.blog_icon}
            alt=""
          />
          <span className={s.title}>Blog</span>
        </div>
        {/* Affichage du composant Blog lorsque blogVisible est true */}
        {blogVisible && <Blog />}

        <div className={s.app_icon} onDoubleClick={handleAudioIconDoubleClick}>
          <img
            draggable="false"
            height={30}
            width={30}
            src={audiovisualiser_icon}
            className={s.audiovisualiser_icon}
            alt=""
          />
          <span className={s.title}>Lecteur audio</span>
        </div>
        {/* Affichage du composant lecteur audio lorsque blogVisible est true */}
        {audioVisible && <Audiovisualiser />}
      </div>
    </>
  );
}

export default WindowsXP;
