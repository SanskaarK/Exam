import React from 'react';
import './AuthModal.css';

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={onClose}>&times;</button>
        <h2 className="auth-title">Login</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="login-email">Email Address</label>
            <input type="email" id="login-email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input type="password" id="login-password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="primary-btn w-100 mt-3 auth-submit-btn">Login</button>
        </form>
        <p className="auth-switch-text mt-4 text-center">
          Don't have an account?{' '}
          <span className="auth-switch-link" onClick={onSwitchToSignup}>
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
