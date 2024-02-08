import s from "./Blog.module.scss";

export default function Blog() {
  return (
    <>
      <div className={s.blog}>
        <div className={s.blog_left}>
          <img src="images/blog/blog_left/logo.png" alt="" />
          <img src="images/blog/blog_left/britney.jpg" alt="" />
          <img src="images/blog/blog_left/image02.jpg" alt="" />
        </div>
        <div className={s.blog_center}></div>
        <div className={s.blog_right}>
          <input type="text" placeholder="Rechercher ..." />
        </div>
      </div>
    </>
  );
}
