import React, {useState} from "react";
import './OrderPage.css'
import '../global.css'
import {MarginVertical} from "../component";
import {useNavigate} from "react-router-dom";

const Button = ({ className, buttonName, onClick }) => (
  <button className={className} onClick={onClick}>
    {buttonName}
  </button>
);

const Item = ({ name, status, price, imgSrc, addToOrder }) => {
  const handleClick = () => {
    if (status !== 'sold-out' && status !== 'allergy') {
      addToOrder(name, price);
    }
  };
  return (
    <div className="item" onClick={handleClick}>
      <img src={imgSrc} alt="menu-image"/>
      {status && (
        <div className={`overlay-${status}`}>
          {status === 'sold-out' ? '재고소진' : status === 'allergy' ? '알레르기 발생' : ''}
        </div>
      )}
      <MarginVertical value={10}/>
      <div className="item-name1">{name}</div>
      <MarginVertical value={10}/>
      <div className="item-name2">{price.toLocaleString()}원</div>
    </div>
  );
};

const Category = ({title, items, soldOutMenu, allergyMenu, addToOrder }) => {
  const getMenuStatus = (name) => {
    if (soldOutMenu.includes(name)) return 'sold-out';
    if (allergyMenu.includes(name)) return 'allergy';
    return null;
  };
  return (
    <div className="category">
      <div className="category-name">{title}</div>
      <MarginVertical value={30} />
      <div className="category-items">
        {items?.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            status={getMenuStatus(item.name)}
            price={item.price}
            imgSrc={item.img}
            addToOrder={addToOrder}
          />
        ))}
      </div>
    </div>
  );
};

const Order = ({ name, price, amount, onIncrease, onDecrease }) => (
  <div className="order">
    <div className="order-name">{name}</div>
    <div className="order-price">{(amount * price).toLocaleString()}원</div>
    <div className="order-bottom">
      <Button className="minus-button" onClick={onDecrease} buttonName={'-'} />
      <div className="order-amount">{amount}개</div>
      <Button className="plus-button" onClick={onIncrease} buttonName={'+'} />
    </div>
  </div>
);

const mockData = {
  top3: [
    { name: "bruschetta", price: 6000, img: "https://static.wtable.co.kr/image-resize/production/service/recipe/100/4x3/6821ee02-5846-4f9e-a4b8-7cf9b549126b.jpg" },
    { name: "pesto_pasta", price: 13000, img: "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp" },
    { name: "focaccia", price: 5000, img: "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp" }
  ],
  appetizer: [
    { name: "bruschetta", price: 6000, img: "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp" },
    { name: "caprese_salad", price: 8000, img: "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp" }
  ],
  main_dish: [
    { name: "alfredo_pasta", price: 13000, img: "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp" },
    { name: "shrimp_risotto", price: 15000, img: "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp" },
    { name: "pesto_pasta", price: 13000, img: "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp" },
    { name: "bruschetta", price: 6000, img: "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp" },
  ],
  dessert: [
    { name: "gelato", price: 4000, img: "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp" },
    { name: "expresso", price: 3000, img: "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp" },
    { name: "margherita_pizza", price: 6000, img: "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp" }
  ],
  soldOut_menu: [
    "gelato",
    "bolognese_spaghetti"
  ],
  allergy_menu: [
    "margherita_pizza"
  ]
};

const OrderPage = () => {
  const { top3, appetizer, main_dish, dessert, soldOut_menu, allergy_menu } = mockData;
  const [orderData, setOrderData] = useState({ items: {}, total_price: 0 });
  const navigate = useNavigate();
  const navigateAllergySelectPage = () => {
    navigate("/allergy-select");
  }
  const navigateNutrientAnalysisPage = () => {
    navigate("/nutrient-analysis");
  }
  const addToOrder = (name, price) => {
    setOrderData(prevOrderData => {
      const newItems = { ...prevOrderData.items };
      newItems[name] = (newItems[name] || 0) + 1;
      const newTotalPrice = prevOrderData.total_price + price;

      return { items: newItems, total_price: newTotalPrice };
    });
    console.log(orderData);
  };
  const handleIncrease = (data, name) => {
    setOrderData((prevOrderData) => {
      const newItems = { ...prevOrderData.items, [name]: prevOrderData.items[name] + 1 };
      const newTotalPrice = prevOrderData.total_price + getItemPrice(data, name);
      return { items: newItems, total_price: newTotalPrice };
    });
  };

  const handleDecrease = (data, name) => {
    setOrderData((prevOrderData) => {
      const newItems = { ...prevOrderData.items };
      newItems[name] -= 1;
      if (newItems[name] === 0) {
        delete newItems[name];
      }
      const newTotalPrice = prevOrderData.total_price - getItemPrice(data, name);
      return { items: newItems, total_price: newTotalPrice };
    });
  };

  const getItemPrice = (data, name) => {
    const categories = Object.keys(data);
    for (const category of categories) {
      const item = data[category]?.find((item) => item.name === name);
      if (item) {
        return item.price;
      }
    }
    return 0;
  };
  return(
    <div className="container">
      <div className="sub-container">
        <div className="header">
          <div className="sub-header1">
            <span className="title1-1">G-Order</span>
            <span className="title1-2">|</span>
            <span className="title1-3">그린순두부 아라동점</span>
          </div>
          <div className="sub-header2">
            <div className="title2-1">1번 테이블</div>
            <div className="title2-2">주문내역</div>
          </div>
        </div>
        <div className="main">
          <div className="sub-main1">
            <Category title={'TOP3 메뉴'} items={top3} soldOutMenu={soldOut_menu} allergyMenu={allergy_menu} addToOrder={addToOrder} />
            <Category title={'에피타이저'} items={appetizer} soldOutMenu={soldOut_menu} allergyMenu={allergy_menu} addToOrder={addToOrder} />
            <Category title={'메인메뉴'} items={main_dish} soldOutMenu={soldOut_menu} allergyMenu={allergy_menu} addToOrder={addToOrder} />
            <Category title={'디저트'} items={dessert} soldOutMenu={soldOut_menu} allergyMenu={allergy_menu} addToOrder={addToOrder} />
          </div>
          <div className="sub-main2">
            <div className="order-list">
              {Object.keys(orderData.items).map((name) => (
                <Order
                  key={name}
                  name={name}
                  price={getItemPrice(mockData, name)}
                  amount={orderData.items[name]}
                  onIncrease={() => handleIncrease(mockData, name)}
                  onDecrease={() => handleDecrease(mockData, name)}
                />
              ))}
            </div>
            <div className="result">
              <span className="sub-result1">합계</span>
              <span className="sub-result2">{orderData.total_price.toLocaleString()}원</span>
            </div>
            <div className="submit-area">
              <Button className="back" buttonName={'이전'} onClick={navigateAllergySelectPage} />
              <Button className="submit" buttonName={'주문하기'} onClick={navigateNutrientAnalysisPage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage;
