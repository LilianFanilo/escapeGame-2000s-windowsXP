import { useState } from "react";
import s from "./WindowsXP.module.scss";
import OfficeFooter from "./OfficeFooter/OfficeFooter";
import Notepad from "./apps/Notepad/Notepad";
import ErrorPopUp from "../ErrorPopUp/ErrorPopUp";
import Blog from "./apps/Blog/Blog";
import Audiovisualiser from "./apps/Audiovisualiser/Audiovisualiser";
import trash_icon from "../../assets/WindowsIcons/trash_icon.png";
import IE_icon from "../../assets/WindowsIcons/IE_icon.png";
import notepad_icon from "../../assets/WindowsIcons/notepad.png";
import doc_icon from "../../assets/WindowsIcons/doc_icon.png";
import blog_icon from "../../assets/WindowsIcons/blog_icone.png";
import audiovisualiser_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";
import Window from "../Window/Window";
import PopUp from "../PopUp/PopUp";

function WindowsXP() {
  const [trashVisible, setTrashVisible] = useState(false);
  const [noteVisible, setNoteVisible] = useState(false);
  const [docVisible, setDocVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const [audioVisible, setAudioVisible] = useState(false);

  const handleTrashIconDoubleClick = () => {
    setTrashVisible(true);
  };

  const handleNoteIconDoubleClick = () => {
    setNoteVisible(true);
  };

  const handleDocIconDoubleClick = () => {
    setDocVisible(true);
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
      <div className={s.officeIcons}>
        <div className={s.app_icon} onDoubleClick={handleTrashIconDoubleClick}>
          <img
            draggable="false"
            height={30}
            width={30}
            src={trash_icon}
            alt=""
          />
          <span className={s.title}>Corbeille</span>
        </div>

        <div className={s.app_icon}>
          <img draggable="false" height={30} width={30} src={IE_icon} alt="" />
          <span className={s.title}>Internet Explorer</span>
        </div>

        <div className={s.app_icon} onDoubleClick={handleNoteIconDoubleClick}>
          <img
            draggable="false"
            height={30}
            width={30}
            src={notepad_icon}
            alt=""
          />
          <span className={s.title}>Notepad</span>
        </div>
        {/* Affichage du composant lecteur audio lorsque blogVisible est true */}
        {noteVisible && <Notepad />}

        <div className={s.app_icon} onDoubleClick={handleDocIconDoubleClick}>
          <img draggable="false" height={30} width={30} src={doc_icon} alt="" />
          <span className={s.title}>Documents</span>
        </div>
        {/* Affichage du composant lecteur audio lorsque blogVisible est true */}

        <div className={s.app_icon} onDoubleClick={handleBlogIconDoubleClick}>
          <img
            draggable="false"
            height={30}
            width={30}
            src={blog_icon}
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
            alt=""
          />
          <span className={s.title}>Lecteur audio</span>
        </div>
        {/* Affichage du composant lecteur audio lorsque blogVisible est true */}
        {audioVisible && <Audiovisualiser />}
        {/* {audioVisible && <PopUp />} */}
      </div>
    </>
  );
}

export default WindowsXP;
