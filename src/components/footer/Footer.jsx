import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <img
        src="https://static.insales-cdn.com/files/1/1172/14550164/original/markom_logo_bw.svg"
        alt="logo"
      />
      <div className={styles.contacts}>
        <h2>Контакты</h2>
        <strong>Почта: wkurganow@gmail.com</strong>
        <strong>Телефон: +7 929 371 2550</strong>
        <strong>Telegram: @wkurganow</strong>
      </div>
    </div>
  );
};
export default Footer;
