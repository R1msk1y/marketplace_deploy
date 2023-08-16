import axios from "axios";
import styles from "./drawer.module.scss";
import React, { useState } from "react";
import AppContext from "../../context";
const Drawer = ({ cartArr, setCartArr, cartStateToggle, removeOnCart }) => {
  const { stateOrder, setStateOrder } = React.useContext(AppContext);

  const [order, setOrder] = useState([]);
  let totalPrice = cartArr.reduce((sum, obj) => obj.price + sum, 0);
  const sendOrder = () => {
    if (cartArr.length > 0) {
      axios
        .post("https://64dbcbc0593f57e435b16da2.mockapi.io/orders", cartArr)
        .then(() => {
          setCartArr([]);
        })
        .then(() => {
          axios
            .get("https://64dbcbc0593f57e435b16da2.mockapi.io/orders")
            .then((resp) => {
              let hhh = resp.data.at(-1);
              setOrder(hhh);
            });
        })
        .then((resp) => {
          return setStateOrder(!stateOrder);
        });
    }
  };
  return (
    <div className={styles.drawer}>
      <div className={styles.drawerRemoveBox}>
        <h2 className={styles.drawerMainTitle}>Корзина</h2>
        <button onClick={cartStateToggle}>
          <img className={styles.deleteBtn} src="img/icons/remove.svg" alt="" />
        </button>
      </div>

      {cartArr.length > 0 ? (
        <div className={styles.drawerList_container}>
          <div className={styles.drawerList}>
            {cartArr.map((obj) => {
              console.log(cartArr);
              return (
                <div className={styles.listItem}>
                  <img
                    width={90}
                    height={90}
                    src={obj.imgUrl}
                    alt="productInCart"
                  />
                  <div>
                    <p>{obj.title}</p>
                    <strong>{obj.price} &#x20bd;</strong>
                  </div>
                  <svg
                    className={styles.delCard}
                    onClick={() => {
                      removeOnCart(obj);
                    }}
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="18" x2="6" y1="6" y2="18" />
                    <line x1="6" x2="18" y1="6" y2="18" />
                  </svg>
                </div>
              );
            })}
          </div>
          <div className={styles.orderBox}>
            <p>
              <strong>Итого: </strong>
              <span>{totalPrice} &#x20bd;</span>
            </p>
          </div>

          <button
            onClick={() => {
              sendOrder();
            }}
            className={styles.orderBtn}
          >
            <span> Оформить заказ</span>

            <svg
              className={styles.orderBtn_svg}
              fill="none"
              height="30"
              viewBox="0 0 151 84"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68.1002 41.3499C50.104 41.2042 32.1079 41.0874 14.1118 40.8905C10.5249 40.8505 6.93279 40.5689 3.36035 40.2178C2.76932 40.1535 2.21142 39.9124 1.75964 39.526C1.30786 39.1395 0.983227 38.6258 0.828173 38.0518C0.53479 37.133 1.55475 35.8295 2.77291 35.6378C3.95432 35.4521 5.12976 35.1639 6.31707 35.0924C13.8997 34.6329 21.4818 33.9826 29.0717 33.8454C44.665 33.5652 60.2628 33.4943 75.8594 33.4765C90.6565 33.4595 105.454 33.6446 120.251 33.6787C122.627 33.6846 125.005 33.3853 127.377 33.1733C127.534 33.1345 127.679 33.0567 127.799 32.9472C127.918 32.8377 128.008 32.6999 128.061 32.5465C128.103 32.1803 127.995 31.562 127.751 31.4307C123.204 28.9589 118.713 26.3585 114.037 24.1526C103.16 19.0207 92.9557 12.7277 82.7588 6.41374C81.0832 5.37607 79.3268 4.32201 78.6508 2.26308C78.528 1.88831 78.3364 1.24642 78.4926 1.12106C79.052 0.599398 79.7318 0.224347 80.4715 0.0295109C81.2592 -0.0634608 82.0572 0.0642497 82.7765 0.39838C85.3244 1.55222 87.854 2.75664 90.333 4.05094C108.051 13.3014 125.763 22.5621 143.469 31.8331C150.157 35.3116 153.336 38.6846 145.307 46.3329C142.994 48.5375 140.654 50.7389 138.139 52.6993C126.475 61.8006 114.768 70.8462 103.018 79.8362C101.403 80.9957 99.699 82.0271 97.9228 82.9211C96.7644 83.5499 95.6046 83.177 94.6044 82.4229C93.5037 81.5926 92.8204 79.1793 93.1998 78.118C94.0432 75.7617 95.7235 74.033 97.5278 72.4676C104.475 66.4411 111.46 60.4579 118.481 54.518C123.044 50.6365 127.655 46.812 132.211 42.9225C132.436 42.7309 132.447 42.1349 132.356 41.7766C132.296 41.6215 132.199 41.4833 132.074 41.3737C131.949 41.2642 131.799 41.1867 131.638 41.1478C129.256 40.9916 126.871 40.7927 124.488 40.8052C105.691 40.9045 86.8948 41.0283 68.0982 41.1767L68.1002 41.3499Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className={styles.cartEmpty}>
          {stateOrder === false ? (
            <div>
              <h2 className={styles.emptyCart_title}>Корзина пуста</h2>
              <p>Добавьте товары в корзину</p>
              <img src="img/drawer/cart_empty.svg" alt="" />
            </div>
          ) : (
            <div className={styles.orderComplete}>
              <h2>Спасибо за покупку!</h2>
              <p>Ваш заказ #{order.id} оформлен. Ждите курьерскую доставку.</p>
              <img src="img/drawer/orderComplete.png" alt="" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Drawer;
