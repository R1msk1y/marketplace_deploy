import "../src/styles/main.scss";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import React, { useState } from "react";
import mainArr from "./data/data";
import Drawer from "./components/drawer/Drawer";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/footer/Footer";
import AppContext from "./context";

function App() {
  //Реализация поиска, его логика
  const [searchValue, setSearchValue] = useState("");
  const searchFucntion = (event) => {
    setSearchValue(event.target.value);
  };
  //Реализация поиска, его логика END

  //    Функция изменяюшая массив товаров на основание введенного в поиск значения

  const renderFruitsBlock = (obj) => {
    const filtredItems = mainArr[0].filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filtredItems.map((obj) => {
      return <Card key={obj.id} addToCart={addToCart} {...obj} fullObj={obj} />;
    });
  };
  const renderJuiceBlock = (obj) => {
    const filtredItems = mainArr[1].filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filtredItems.map((obj) => {
      return <Card key={obj.id} addToCart={addToCart} {...obj} fullObj={obj} />;
    });
  };
  const renderNutsBlock = (obj) => {
    const filtredItems = mainArr[2].filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filtredItems.map((obj) => {
      return <Card key={obj.id} addToCart={addToCart} {...obj} fullObj={obj} />;
    });
  };

  //  Функция изменяюшая массив товаров на основание введенного в поиск значения END

  //Добавление в корзину
  const [cartArr, setCartArr] = useState([]);
  const addToCart = (cardObj) => {
    if (cartArr.find((item) => Number(item.id) === Number(cardObj.id))) {
    } else {
      setCartArr((prev) => [...prev, cardObj]);
    }
  };
  //Добавление в корзину **END

  //Удаление из корзины
  const removeOnCart = (obj) => {
    setStateOrder(false);
    setCartArr((prev) => prev.filter((item) => item.id !== obj.id));
  };
  //Удаление из корзины END

  //Закрытие или скрытие корзины
  const [cartState, setCartState] = useState(false);
  const cartStateToggle = () => {
    setCartState(!cartState);
  };
  //Закрытие или скрытие корзины **END

  const [stateOrder, setStateOrder] = useState(false);

  return (
    <div className="App">
      <AppContext.Provider value={{ stateOrder, setStateOrder }}>
        <div className="wrapper">
          {cartState === false ? null : (
            <Drawer
              setCartArr={setCartArr}
              cartArr={cartArr}
              cartStateToggle={cartStateToggle}
              removeOnCart={removeOnCart}
            />
          )}
          <Header
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            cartStateToggle={cartStateToggle}
            searchFucntion={searchFucntion}
            cartArr={cartArr}
          />
          <Slider />
          <div className="content">
            <h2 className="categoryTitle">Фрукты</h2>
            <div className="fruitsList">{renderFruitsBlock()}</div>
            <h2 className="categoryTitle">Соки</h2>
            <div className="fruitsList">{renderJuiceBlock()}</div>
            <h2 className="categoryTitle">Орехи</h2>
            <div className="fruitsList">{renderNutsBlock()}</div>
          </div>
          <Feedback />
        </div>
      </AppContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
