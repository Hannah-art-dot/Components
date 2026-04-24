import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'couple' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="register-form">
      <h2>Sign Up for Twedarr</h2>
      <form>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <select name="role" onChange={handleChange}>
          <option value="couple">Couple</option>
          <option value="vendor">Vendor</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
