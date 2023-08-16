import styles from "./slider.module.scss";
const Slider = () => {
  return (
    <div className={styles.slider}>
      <img src="img/slider/slide1.jpg" alt="" />
      <div className={styles.overlay}></div>
      <h1 className={styles.mainTitle}>Интернет магазин на React JS</h1>
    </div>
  );
};
export default Slider;
