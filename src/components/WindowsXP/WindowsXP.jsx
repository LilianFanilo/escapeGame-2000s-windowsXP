import s from "./WindowsXP.module.scss";
import OfficeFooter from "./OfficeFooter/OfficeFooter";
import Notepad from "./apps/Notepad/Notepad";
import ErrorPopUp from "../ErrorPopUp/ErrorPopUp";
import Blog from "./apps/Blog/Blog";
import blog_icone from "../../assets/WindowsIcons/blog_icone.png";
import { useState } from "react";
import Audiovisualiser from "./apps/Audiovisualiser/Audiovisualiser";

function WindowsXP() {
  const [blogVisible, setBlogVisible] = useState(false);

  const handleBlogIconDoubleClick = () => {
    setBlogVisible(true);
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
      <Audiovisualiser />
    </>
  );
}

export default WindowsXP;
