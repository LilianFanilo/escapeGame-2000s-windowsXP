import { useRef, useState } from "react";
import s from "./Blog.module.scss";

export default function Blog() {
  const [inputVisible, setInputVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("Accueil");

  const toggleInputVisibility = () => {
    setInputVisible(!inputVisible);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  function loadVideo(videoSrc) {
    var videoPlayer = document.getElementById("videoPlayer");
    var videoSource = document.getElementById("videoSource");

    videoSource.src = videoSrc;
    videoPlayer.load();
    videoPlayer.style.display = "block";
  }

  return (
    <>
      <div className={s.blog}>
        <div className={s.blog_left}>
          <img
            src="images/blog/blog_left/logo.png"
            alt=""
            className={s.logo}
            draggable="false"
          />
          <img
            src="images/blog/blog_left/jewel01.png"
            alt=""
            className={s.jewel01}
            draggable="false"
          />
          <img
            src="images/blog/blog_left/britney.jpg"
            alt=""
            className={s.britney}
            draggable="false"
          />
          <img
            src="images/blog/blog_left/jewel02.png"
            alt=""
            className={s.jewel02}
            draggable="false"
          />
          <img
            src="images/blog/blog_left/image02.jpg"
            alt=""
            className={s.image02}
            draggable="false"
          />
          <img
            src="images/blog/blog_left/jewel03.png"
            alt=""
            className={s.jewel03}
            draggable="false"
          />
          <div className={s.prefs}>
            <h3>Mes trucs prefs'</h3>
            <p>
              <span>Parle à ma main - FatalBazouca</span>
            </p>
            <p>Série - Big Bang Theory</p>
            <p>Film - N’oublie jamais</p>
            <p>Célébrité - Ryan Golsing</p>
          </div>
          <img
            src="images/blog/blog_left/jewel04.png"
            alt=""
            className={s.jewel04}
            draggable="false"
          />
        </div>
        <div className={s.blog_center}>
          <h1 className={s.title}>Élodie la Best ! XD</h1>
          <img
            src="images/blog/blog_center/jewel01.png"
            alt=""
            draggable="false"
            className={s.jewel01}
          />
          <header>
            <ul>
              <li
                className={activeSection === "Accueil" ? s.active : ""}
                onClick={() => handleSectionClick("Accueil")}
              >
                Accueil
              </li>
              <li
                className={activeSection === "Galerie" ? s.active : ""}
                onClick={() => handleSectionClick("Galerie")}
              >
                Galerie
              </li>
            </ul>
          </header>
          {activeSection === "Accueil" && (
            <div className={s.darkpink_border}>
              <div className={s.lightpink_border}>
                <img
                  src="images/blog/blog_center/jewel02.png"
                  alt=""
                  draggable="false"
                  className={s.jewel02}
                />
                <img
                  src="images/blog/blog_center/jewel03.png"
                  alt=""
                  draggable="false"
                  className={s.jewel03}
                />
                <div className={s.first_comment}>
                  <p className={s.comment_header}>Little chat up</p>
                  <p className={s.comment_main}>
                    Hey les filles ! 🌟 <br /> <br />
                    Nouvelle update depuis mon Nokia 3310, lol ! <br /> <br />
                    Ce week-end, j'ai vécu une soirée de ouf avec les potes à la
                    maison. On a passé des heures à discuter sur MSN, à choisir
                    nos meilleurs sons pour notre profil Myspace, et à partager
                    nos derniers secrets de cœur. Trop de fun ! 💖 <br /> <br />
                    D'ailleurs, j'ai enfin craqué pour cette nouvelle paire de
                    barrettes à strass qui font fureur. Et vous, quoi de neuf
                    dans vos vies ? <br /> <br />
                    Let's chat soon, XOXO ! 😘📟 <br /> <br />
                    <span>#LifeInThe00s #BarrettesAndChill</span>
                    <div className={s.comment}>
                      <img
                        src="images/blog/blog_center/comment.png"
                        alt=""
                        draggable="false"
                      />
                    </div>
                  </p>
                </div>
                <div className={s.first_comment}>
                  <p className={s.comment_header}>Mode</p>
                  <p className={s.comment_main}>
                    Salut les filles! 😊 <br /> <br />
                    Hier, j'ai découvert une boutique trop stylée avec des
                    fringues vintage à tomber par terre! J'ai dégoté la jupe à
                    fleurs parfaite, façon 90s revival. Vous savez, celles avec
                    des motifs psychédéliques qui nous font sentir comme des
                    Spice Girls en puissance! Spice up your life, non? 🌸✌️
                    <br /> <br />
                    J'ai aussi déniché des mini sacs trop cute. Vous avez des
                    adresses cool pour shopper des fringues rétro? Partagez vos
                    bons plans! 👗🛍️ <br /> <br />
                    <span>#VintageFashion #90sVibes</span>
                    <div className={s.comment}>
                      <img
                        src="images/blog/blog_center/comment.png"
                        alt=""
                        draggable="false"
                      />
                    </div>
                  </p>
                </div>
                <div className={s.first_comment}>
                  <p className={s.comment_header}>Fashion accessoire</p>
                  <p className={s.comment_main}>
                    "Hey les coupines! 🌸 <br /> <br />
                    Aujourd'hui, j'ai décidé de me lancer dans la confection de
                    bracelets de l'amitié super kawaii. Vous savez, avec les
                    fils fluo et les perles trop mignonnes! Je pense en offrir à
                    mes BFFs, histoire de renforcer notre squad. Si vous avez
                    des idées de motifs ou de couleurs à ajouter, je suis toute
                    ouïe! 🌈💕 <br /> <br />
                    Et vous, vous avez des projets créatifs en cours? Let's
                    share the inspo! 🎨✨ <br /> <br />
                    <span>#DIYQueen #FriendshipGoals</span>
                    <div className={s.comment}>
                      <img
                        onClick={toggleInputVisibility}
                        src="images/blog/blog_center/comment_outline.png"
                        alt=""
                        draggable="false"
                      />
                      {inputVisible && (
                        <input
                          className={s.input_comment}
                          type="text"
                          placeholder="Commentaire ..."
                        />
                      )}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeSection === "Galerie" && (
            <div className={s.darkpink_border}>
              <div className={s.gallery}>
                <div
                  className={s.video}
                  onClick={() => loadVideo("video_001.mp4")}
                >
                  <img
                    src="images/blog/blog_center/video_thumbnail_01.png"
                    alt="Video 001"
                    draggable="false"
                  />
                  <p>vidéo 001</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_02.png"
                    alt="Video 002"
                    draggable="false"
                  />
                  <p>vidéo 002</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_03.png"
                    alt="Video 003"
                    draggable="false"
                  />
                  <p>vidéo 003</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_04.png"
                    alt="Video 004"
                    draggable="false"
                  />
                  <p>vidéo 004</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_05.png"
                    alt="Video 005"
                    draggable="false"
                  />
                  <p>vidéo 005</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_06.png"
                    alt="Video 006"
                    draggable="false"
                  />
                  <p>vidéo 006</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_07.png"
                    alt="Video 007"
                    draggable="false"
                  />
                  <p>vidéo 007</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_08.png"
                    alt="Video 008"
                    draggable="false"
                  />
                  <p>vidéo 008</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_09.png"
                    alt="Video 009"
                    draggable="false"
                  />
                  <p>vidéo 009</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_10.png"
                    alt="Video 010"
                    draggable="false"
                  />
                  <p>vidéo 010</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_11.png"
                    alt="Video 011"
                    draggable="false"
                  />
                  <p>vidéo 011</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_12.png"
                    alt="Video 012"
                    draggable="false"
                  />
                  <p>vidéo 012</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_13.png"
                    alt="Video 013"
                    draggable="false"
                  />
                  <p>vidéo 013</p>
                </div>
                <div className={s.video}>
                  <img
                    src="images/blog/blog_center/video_thumbnail_14.png"
                    alt="Video 014"
                    draggable="false"
                  />
                  <p>vidéo 014</p>
                </div>
              </div>
              <video
                id="videoPlayer"
                controls
                style={{ display: "none" }}
                className={s.video_on}
              >
                <source
                  id="videoSource"
                  src="/videos/video_001.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
        <div className={s.blog_right}>
          <div className={s.image01}>
            <img
              src="images/blog/blog_right/image01.png"
              alt=""
              className={s.image}
              draggable="false"
            />
            <div className={s.text}>
              <p>Élodie - “Élo”</p>
              <p>17 ans</p>
              <p>Lion</p>
              <p>26/07/1991</p>
            </div>
          </div>
          <div className={s.input_global}>
            <input type="text" placeholder="Rechercher ..." />
            <div className={s.seach_div}>
              <img
                src="images/blog/blog_right/search.png"
                alt=""
                draggable="false"
                className={s.search}
              />
            </div>
          </div>
          <img
            src="images/blog/blog_right/image02.png"
            alt=""
            className={s.image02}
            draggable="false"
          />
          <img
            src="images/blog/blog_right/image03.png"
            alt=""
            draggable="false"
          />
        </div>
      </div>
    </>
  );
}
