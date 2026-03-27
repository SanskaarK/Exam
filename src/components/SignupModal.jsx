import React from 'react';
import './AuthModal.css';

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={onClose}>&times;</button>
        <h2 className="auth-title">Sign Up</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="signup-name">Full Name</label>
            <input type="text" id="signup-name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="signup-email">Email Address</label>
            <input type="email" id="signup-email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input type="password" id="signup-password" placeholder="Create a password" required />
          </div>
          <button type="submit" className="primary-btn w-100 mt-3 auth-submit-btn">Sign Up</button>
        </form>
        <p className="auth-switch-text mt-4 text-center">
          Already have an account?{' '}
          <span className="auth-switch-link" onClick={onSwitchToLogin}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
