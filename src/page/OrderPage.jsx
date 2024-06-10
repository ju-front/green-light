import React from "react";
import './OrderPage.css'
import '../global.css'
import {MarginVertical} from "../component";

const OrderPage = () => {
  return(
    <div className="container">
      <div className="sub-container">
        <div className="header">
          <div className="sub-header1">
            <span className="title1-1">G-Order</span>
            <span className="title1-2">|</span>
            <span className="title1-3">재형순두부 아라동점</span>
          </div>
          <div className="sub-header2">
            <div className="title2-1">1번 테이블</div>
            <div className="title2-2">주문내역</div>
          </div>
        </div>
        <div className="main">
          <div className="sub-main1">
            <div className="category">
              <div className="category-name">실시간 BEST 3</div>
              <MarginVertical value={30}/>
              <div className="category-items">
                <div className="item">
                  <img
                    src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
                    alt="image"/>
                  <div className="overlay-stock">
                    재고소진
                  </div>
                  <MarginVertical value={10}/>
                  <div className="item-name1">기본 떡볶이</div>
                  <MarginVertical value={10}/>
                  <div className="item-name2">12,000원</div>
                </div>
                <div className="item">
                  <img
                    src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
                    alt="image"/>
                  <MarginVertical value={10}/>
                  <div className="item-name1">기본 떡볶이</div>
                  <MarginVertical value={10}/>
                  <div className="item-name2">12,000원</div>
                </div>
                <div className="item">
                  <img
                    src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
                    alt="image"/>
                  <div className="overlay-allergy">
                    알레르기 발생
                  </div>
                  <MarginVertical value={10}/>
                  <div className="item-name1">기본 떡볶이</div>
                  <MarginVertical value={10}/>
                  <div className="item-name2">12,000원</div>
                </div>
              </div>
            </div>
            <div className="category">
            <div className="category-name">메인메뉴</div>
              <MarginVertical value={30}/>
              <div className="category-items">
                <div className="item">
                  <img
                    src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
                    alt="image"/>
                  <MarginVertical value={10}/>
                  <div className="item-name1">기본 떡볶이</div>
                  <MarginVertical value={10}/>
                  <div className="item-name2">12,000원</div>
                </div>
                <div className="item">
                  <img
                    src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
                    alt="image"/>
                  <MarginVertical value={10}/>
                  <div className="item-name1">기본 떡볶이</div>
                  <MarginVertical value={10}/>
                  <div className="item-name2">12,000원</div>
                </div>
                <div className="item">
                  <img
                    src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
                    alt="image"/>
                  <MarginVertical value={10}/>
                  <div className="item-name1">기본 떡볶이</div>
                  <MarginVertical value={10}/>
                  <div className="item-name2">12,000원</div>
                </div>
                <div className="item">
                  <img
                    src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
                    alt="image"/>
                  <MarginVertical value={10}/>
                  <div className="item-name1">기본 떡볶이</div>
                  <MarginVertical value={10}/>
                  <div className="item-name2">12,000원</div>
                </div>
              </div>
            </div>
            <div className="category">
              <div className="category-name">주류</div>
              <MarginVertical value={30}/>
              <div className="category-items">
                <div className="item">
                  <img
                    src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
                    alt="image"/>
                  <MarginVertical value={10}/>
                  <div className="item-name1">기본 떡볶이</div>
                  <MarginVertical value={10}/>
                  <div className="item-name2">12,000원</div>
                </div>
                <div className="item">
                  <img
                    src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
                    alt="image"/>
                  <MarginVertical value={10}/>
                  <div className="item-name1">기본 떡볶이</div>
                  <MarginVertical value={10}/>
                  <div className="item-name2">12,000원</div>
                </div>
                <div className="item">
                  <img
                    src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
                    alt="image"/>
                  <MarginVertical value={10}/>
                  <div className="item-name1">기본 떡볶이</div>
                  <MarginVertical value={10}/>
                  <div className="item-name2">12,000원</div>
                </div>
                <div className="item">
                  <img
                    src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
                    alt="image"/>
                  <MarginVertical value={10}/>
                  <div className="item-name1">기본 떡볶이</div>
                  <MarginVertical value={10}/>
                  <div className="item-name2">12,000원</div>
                </div>
                <div className="item">
                  <img
                    src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
                    alt="image"/>
                  <MarginVertical value={10}/>
                  <div className="item-name1">기본 떡볶이</div>
                  <MarginVertical value={10}/>
                  <div className="item-name2">12,000원</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-main2">
            <div className="order-list">
              <div className="order">
                <div className="order-name">두루치기 덮밥</div>
                <div className="order-price">12,000원</div>
                <div className="order-bottom">
                  <button className="minus-button">-</button>
                  <div className="order-amount">1개</div>
                  <button className="plus-button">+</button>
                </div>
              </div>
              <div className="order">
                <div className="order-name">두루치기 덮밥</div>
                <div className="order-price">12,000원</div>
                <div className="order-bottom">
                  <button className="minus-button">-</button>
                  <div className="order-amount">1개</div>
                  <button className="plus-button">+</button>
                </div>
              </div>
              <div className="order">
                <div className="order-name">두루치기 덮밥</div>
                <div className="order-price">12,000원</div>
                <div className="order-bottom">
                  <button className="minus-button">-</button>
                  <div className="order-amount">1개</div>
                  <button className="plus-button">+</button>
                </div>
              </div>
              <div className="order">
                <div className="order-name">두루치기 덮밥</div>
                <div className="order-price">12,000원</div>
                <div className="order-bottom">
                  <button className="minus-button">-</button>
                  <div className="order-amount">1개</div>
                  <button className="plus-button">+</button>
                </div>
              </div>
              <div className="order">
                <div className="order-name">두루치기 덮밥</div>
                <div className="order-price">12,000원</div>
                <div className="order-bottom">
                  <button className="minus-button">-</button>
                  <div className="order-amount">1개</div>
                  <button className="plus-button">+</button>
                </div>
              </div>
              <div className="order">
                <div className="order-name">두루치기 덮밥</div>
                <div className="order-price">12,000원</div>
                <div className="order-bottom">
                  <button className="minus-button">-</button>
                  <div className="order-amount">1개</div>
                  <button className="plus-button">+</button>
                </div>
              </div>
            </div>
            <div className="result">
              <span className="sub-result1">합계</span>
              <span className="sub-result2">124,000</span>
            </div>
            <div className="submit-area">
              <div className="back">이전</div>
              <div className="submit">주문하기</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage;
