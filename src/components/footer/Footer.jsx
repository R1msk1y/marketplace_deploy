import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerBox}>
        <img src="img/icons/arrow_b.png" alt="arrow_b" />
        <h2>Заслать письмо</h2>
        <img src="img/icons/arrow_b.png" alt="arrow_b" />
      </div>

      <div className={styles.contacts}>
        <div className={styles.contactsBlock}>
          <img src="img/icons/gmail.svg" alt="gmail" />
          <strong>Почта: wkurganow@gmail.com</strong>
        </div>

        <div className={styles.contactsBlock}>
          <img src="img/icons/telegram.svg" alt="gmail" />
          <strong>Telegram: @wkurganow</strong>
        </div>
      </div>
    </div>
  );
};
export default Footer;
