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
import PopupContainer from "../PopUp/PopUp";
import sound from "../../assets/sounds/error.wav";

function WindowsXP() {
  const [trashVisible, setTrashVisible] = useState(false);
  const [noteVisible, setNoteVisible] = useState(false);
  const [docVisible, setDocVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const [audioVisible, setAudioVisible] = useState(false);
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorPrivateVisible, setErrorPrivateVisible] = useState(false);

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
    setPopUpVisible(true);
  };

  const handleErrorDoubleClick = () => {
    setErrorVisible(true);
  };

  const handleErrorPrivateDoubleClick = () => {
    setErrorPrivateVisible(true);
  };

  return (
    <>
      <div className={s.windowsXP}>
        <OfficeFooter />
      </div>
      <div className={s.officeIcons}>
        <div className={s.app_icon} onDoubleClick={handleErrorDoubleClick}>
          <img
            draggable="false"
            height={30}
            width={30}
            src={trash_icon}
            alt=""
          />
          <span className={s.title}>Corbeille</span>
        </div>

        <div className={s.app_icon} onDoubleClick={handleErrorDoubleClick}>
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
        {noteVisible && <Notepad onClose={() => setNoteVisible(false)} />}

        <div
          className={s.app_icon}
          onDoubleClick={handleErrorPrivateDoubleClick}
        >
          <img draggable="false" height={30} width={30} src={doc_icon} alt="" />
          <span className={s.title}>Documents</span>
        </div>
        {errorPrivateVisible && (
          <ErrorPopUp
            onClose={() => setErrorPrivateVisible(false)}
            errorContent={"HÉ C'EST PRIVÉ OKAY ?!"}
            errorTextBtn={"Désolé..."}
            errorAudio={"/audios/ELO.m4a"}
          />
        )}
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
        {blogVisible && <Blog onClose={() => setBlogVisible(false)} />}
        {blogVisible && <PopupContainer />}

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
        {audioVisible && (
          <Audiovisualiser onClose={() => setAudioVisible(false)} />
        )}
        {audioVisible && <PopupContainer />}

        {errorVisible && (
          <ErrorPopUp
            onClose={() => setErrorVisible(false)}
            errorAudio={sound}
          />
        )}
      </div>
    </>
  );
}

export default WindowsXP;
