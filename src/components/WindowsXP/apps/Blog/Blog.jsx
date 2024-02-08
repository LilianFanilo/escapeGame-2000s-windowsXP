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
        <div className={s.blog_center}></div>
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
