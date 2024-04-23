export default class Loader {
  constructor() {
    const images = [
      "/video_thumbnail_1.png",
      "/video_thumbnail_2.png",
      "/video_thumbnail_3.png",
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
}
