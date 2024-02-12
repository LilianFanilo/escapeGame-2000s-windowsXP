import s from "./Blog.module.scss";

export default function Blog() {
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
          <header>
            <ul>
              <li>Accueil</li>
              <li>Galerie</li>
            </ul>
          </header>
          <div className={s.darkpink_border}>
            <div className={s.lightpink_border}>
              <div className={s.first_comment}>
                <p className={s.comment_header}>Little chat up</p>
                  <p className={s.comment_main}>
                  Hey les filles ! 🌟 <br /> <br />
                  Nouvelle update depuis mon Nokia 3310, lol !  <br /> <br />
                  Ce week-end, j'ai vécu une soirée de ouf avec les potes à la maison. On a passé des heures à discuter sur MSN, à choisir nos meilleurs sons pour notre profil Myspace, et à partager nos derniers secrets de cœur. Trop de fun ! 💖 <br /> <br />
                  D'ailleurs, j'ai enfin craqué pour cette nouvelle paire de barrettes à strass qui font fureur. Et vous, quoi de neuf dans vos vies ?  <br /> <br />
                  Let's chat soon, XOXO ! 😘📟  <br /> <br />
                  <span>#LifeInThe00s #BarrettesAndChill</span>
                  <div className={s.comment}><img src="images/blog/blog_center/comment.png" alt="" /></div>
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
