import React, {useEffect, useState} from "react";
import './OrderPage.css'
import '../global.css'
import {MarginVertical} from "../component";
import {useNavigate} from "react-router-dom";
import FetchMenu from "../controller/api/menu/FetchMenu";
import {useGlobalData} from "../context/DataContext";
import CreateReceipt from "../controller/api/receipt/CreateReceipt";

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

const OrderPage = () => {
  const {setReceiptID, orderData, setOrderData, allergyData} = useGlobalData();
  const [menuData, setMenuData] = useState({});
  useEffect(() => {
    FetchMenu(allergyData)
      .then((data) => {
        setMenuData(data.data);
        console.log(JSON.stringify(data, null, 2));
      }).catch(()=>{
      console.log("fetch menu error");
    })
  }, []);
  const { top3, appetizer, main_dish, dessert, soldOut_menu, allergy_menu } = menuData;
  const navigate = useNavigate();
  const navigateAllergySelectPage = () => {
    navigate("/allergy-select");
  }
  const navigateNutrientAnalysisPage = async () => {
    const data = await CreateReceipt(orderData);
    console.log(data.data);
    setReceiptID(data.data);
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
                  price={getItemPrice(menuData, name)}
                  amount={orderData.items[name]}
                  onIncrease={() => handleIncrease(menuData, name)}
                  onDecrease={() => handleDecrease(menuData, name)}
                />
              ))}
            </div>
            <div className="result">
              <span className="sub-result1">합계</span>
              <span className="sub-result2">{orderData.total_price.toLocaleString()}원</span>
            </div>
            <div className="submit-area">
              <Button className="back" buttonName={'이전'} onClick={navigateAllergySelectPage} />
              <Button className="submit" buttonName={'주문하기'} onClick={() => navigateNutrientAnalysisPage(orderData)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage;
