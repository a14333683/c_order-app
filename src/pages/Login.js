import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 目前僅示範 UI，暫不處理驗證或呼叫 API
    console.log('登入按鈕點擊', { username, password });
  };

  return (
    <div style={styles.container} className='col-lg-9'>
      <h2 style={styles.title}>使用者登入</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>帳號</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="請輸入帳號"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>密碼</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="請輸入密碼"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>登入</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '320px',
    margin: '-450px 150px auto auto',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffffff',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555555',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #cccccc',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px',
    fontSize: '20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#7fad39',
    color: '#ffffff',
  },
};
