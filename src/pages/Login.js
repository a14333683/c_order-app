import React from "react";

export default function Login() {
//   const [account, setAccount] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ account, password })
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setMessage("登入成功！");
//         // 可導向頁面或儲存 token
//       } else {
//         setMessage(result.message || "登入失敗");
//       }
//     } catch (error) {
//       setMessage("伺服器錯誤");
//     }
//   };

  return (
    <div style={{ padding: "30px", maxWidth: "300px", margin: "auto" }}>
      <h2>登入</h2>
      <input
        type="text"
        placeholder="帳號"
        // value={account}
        // onChange={(e) => setAccount(e.target.value)}
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <input
        type="password"
        placeholder="密碼"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <button  style={{ width: "100%", padding: "10px" }}>
        登入
      </button>
      {/* <p>{message}</p> */}
    </div>
  );
}
