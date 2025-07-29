import React from "react";
import { useSelector } from "react-redux";



export default function OrderSummaryPage() {
  const order = useSelector((state) => state.menu.lastOrder);

  if (!order) {
    return <div className="p-4">尚無訂單紀錄</div>;
  }

  return (
    <div className="container p-4">
      <h2 className="mb-3">📦 訂單明細</h2>
      <p><strong>訂單編號：</strong> {order.id}</p>
      <p><strong>時間：</strong> {order.time}</p>

      <ul className="list-group mb-3">
        {order.items.map((item, idx) => (
          <li key={idx} className="list-group-item">
            <div>{item.name} - ${item.price}</div>
            {item.note && <div className="text-muted small">備註：{item.note}</div>}
          </li>
        ))}
      </ul>

      <h5 className="text-end">總金額：${order.total}</h5>
      
    </div>
    
  );
}
