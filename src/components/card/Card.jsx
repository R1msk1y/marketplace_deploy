import styles from "./card.module.scss";
const Card = ({ id, title, imgUrl, price, addToCart, fullObj }) => {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt="product" />
      <p className={styles.cardDescr}>{title}</p>
      <strong className={styles.cardPrice}>{price} &#x20bd;</strong>
      <button
        onClick={() => {
          addToCart(fullObj);
        }}
        className={styles.cardBtn}
      >
        <strong>В корзину</strong>
        <svg
          className={styles.svg}
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="none" height="256" width="256" />
          <path
            d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="80"
            cy="204"
            fill="none"
            r="20"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="184"
            cy="204"
            fill="none"
            r="20"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <path
            d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </svg>
      </button>
    </div>
  );
};
export default Card;
