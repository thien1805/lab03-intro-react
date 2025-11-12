import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({ 
    username: '', 
    password: '' 
  });

  const handleChange = (event) => {
    // Sửa lỗi cú pháp: dùng Object Destructuring
    const { name, value } = event.target; 
    
    setFormData(prevData => ({ 
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Form Data Submitted:', formData); 
    alert(`Submitting User: ${formData.username} | Password: ${formData.password}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px dashed green', padding: '15px' }}>
      <h3>Multi-Input Controlled Form (Ex 6)</h3>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Log In</button>
      <p style={{ marginTop: '10px', fontSize: '0.9em' }}>
        Current Data: {formData.username} / {formData.password}
      </p>
    </form>
  );
}

export default Login;