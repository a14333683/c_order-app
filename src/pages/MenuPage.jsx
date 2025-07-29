import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../features/menu/menuSlice";
import { v4 as uuidv4 } from "uuid";
import "../styles/css/MenuPage.css";

export default function MenuPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.menu.items);
  const cart = useSelector((state) => state.menu.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // const [orderId, setOrderId] = useState("");
  // const [showSuccess, setShowSuccess] = useState(false);
  const [activeCategory, setActiveCategory] = useState("全部");
  const [notes, setNotes] = useState({});
  const [orderData, setOrderData] = useState(null); // 存放本次訂單資料
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const categories = ["全部", ...new Set(items.map((item) => item.category))];

  const filteredItems =
    activeCategory === "全部"
      ? items
      : items.filter((item) => item.category === activeCategory);
      

  const handleCheckout = () => {
    const id = uuidv4().slice(0, 8);
    const order = {
      id,
      items: cart,
      total,
      time: new Date().toLocaleString(),
    };
    setOrderData(order);
    dispatch(clearCart());
    setShowOrderSummary(true); // ✅ 顯示明細
    // dispatch(saveOrder(order));     // 儲存到 Redux
    // dispatch(clearCart());
    // navigate("/order-list");     // ✅ 導向訂單明細頁
    // setTimeout(() => {
    //   dispatch(clearCart());
    //   setShowSuccess(false);
    // }, 4000);
  };
  const handleNoteChange = (id, value) => {
    setNotes((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  // 初始化資料
  const handleReturnToMenu = () => {
    setShowOrderSummary(false);
    setOrderData(null);
    setNotes({});
    setActiveCategory("全部");
  };
  
  const OrderSummaryBox = ({ order }) => {
    return (
      <div className="order-summary mt-4 p-3 border rounded bg-light">
        <h5>📦 訂單明細</h5>
        <p>訂單編號：<strong>{order.id}</strong></p>
        <p>下單時間：{order.time}</p>
        <ul className="list-group mb-2">
          {order.items.map((item, idx) => (
            <li
              key={idx}
              className="list-group-item d-flex flex-column"
            >
              <div>{item.name} - ${item.price}</div>
              {item.note && (
                <div className="text-muted small">備註：{item.note}</div>
              )}
            </li>
          ))}
        </ul>
        <div className="fw-bold text-end">總金額：${order.total}</div>
        <button className="btn btn-secondary mt-3" onClick={handleReturnToMenu}>
          回到點餐
      </button> 
      </div>
    );
  };

  return (
    <div className="menu-wrapper">
      {showOrderSummary ? (<OrderSummaryBox order={orderData} />
        ) : (
        <>
          <h2 className="menu-title">📋 今日菜單</h2>

          {/* 分類選單 */}
          <div className="menu-tabs mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`btn btn-outline-primary me-2 mb-2 ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 送出 */}
          {/* {showSuccess && (
            <div className="order-success">
              ✅ 訂單已送出！您的訂單編號是：<strong>{orderId}</strong>
            </div>
          )} */}
          
          
          {/* 菜單區 */}
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-card">
                <img src={item.image} alt={item.name} className="menu-img" />
                <div className="menu-info">
                  <h5 className="menu-name">{item.name}</h5>
                  <p className="menu-price">${item.price}</p>
                  <textarea
                    className="form-control form-control-sm mt-2"
                    rows="2"
                    placeholder="備註（例如：少辣、不加香菜）"
                    value={notes[item.id] || ""}
                    onChange={(e) => handleNoteChange(item.id, e.target.value)}
                  />
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() =>
                      dispatch(addToCart({ id: item.id, note: notes[item.id] || "" }))
                    }
                  >
                    加入餐點
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 購物車區 */}
          <div className="menu-cart">
            <h4>🛒 購物車</h4>
            {cart.length === 0 ? (
              <p className="text-muted">尚未選擇餐點</p>
            ) : (
              <ul className="list-group mb-3">
                {cart.map((item, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item.name} - ${item.price}
                    {item.note && (
                      <div className="text-muted small mt-1">備註：{item.note}</div>
                    )}
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => dispatch(removeFromCart(idx))}
                    >
                      移除
                    </button>
                  </li>
                ))}
              </ul>
            )}        

            <div className="text-end fw-bold mb-2">總金額：${total}</div>
            <button
              className="btn btn-primary"
              disabled={cart.length === 0}
              onClick={handleCheckout}
            >
              ✅ 結帳
            </button>
          </div>
        </>
      )}                     
    </div>
  );
}
