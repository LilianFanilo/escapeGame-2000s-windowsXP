import { useState } from "react";
import s from "./Blog.module.scss";

export default function Blog() {
  const [inputVisible, setInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <>
      <div className={s.blog}>
        <div className={s.blog_left}>
          <img src="images/blog/blog_left/logo.png" alt="" draggable="false" />
          <img
            src="images/blog/blog_left/britney.jpg"
            alt=""
            draggable="false"
          />
          <img
            src="images/blog/blog_left/image02.jpg"
            alt=""
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
              <li>Accueil</li>
              <li>Galerie</li>
            </ul>
          </header>
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
                  barrettes à strass qui font fureur. Et vous, quoi de neuf dans
                  vos vies ? <br /> <br />
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
                  des motifs psychédéliques qui nous font sentir comme des Spice
                  Girls en puissance! Spice up your life, non? 🌸✌️
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
                  bracelets de l'amitié super kawaii. Vous savez, avec les fils
                  fluo et les perles trop mignonnes! Je pense en offrir à mes
                  BFFs, histoire de renforcer notre squad. Si vous avez des
                  idées de motifs ou de couleurs à ajouter, je suis toute ouïe!
                  🌈💕 <br /> <br />
                  Et vous, vous avez des projets créatifs en cours? Let's share
                  the inspo! 🎨✨ <br /> <br />
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
        </div>
        <div className={s.blog_right}>
          <div className={s.input_global}>
            <input type="text" placeholder="Rechercher ..." />
            <img
              src="images/blog/blog_right/search.png"
              alt=""
              draggable="false"
              className={s.search}
            />
          </div>
        </div>
      </div>
    </>
  );
}
