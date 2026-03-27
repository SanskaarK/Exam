import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();

  const openLogin = () => { setIsLoginOpen(true); setIsSignupOpen(false); };
  const openSignup = () => { setIsSignupOpen(true); setIsLoginOpen(false); };
  const closeModals = () => { setIsLoginOpen(false); setIsSignupOpen(false); };

  const isWhiteHeader = location.pathname !== '/' && location.pathname !== '/blog';
  const headerClass = `header_area ${isWhiteHeader ? 'white-header' : ''}`;

  useEffect(() => {
    if (window.initNavbarFixed) {
      // Need a slight timeout to ensure height is calculated correctly after CSS applies
      setTimeout(() => {
        window.initNavbarFixed();
      }, 100);
    }
  }, [location.pathname]); // Re-init on path change as well just in case

  return (
    <header className={headerClass}>
      <div className="main_menu">
        <div className="search_input" id="search_input_box" style={{ display: isSearchOpen ? 'block' : 'none' }}>
          <div className="container">
            <form className="d-flex justify-content-between" method="" action="">
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn"></button>
              <span
                className="ti-close"
                id="close_search"
                title="Close Search"
                style={{ cursor: 'pointer' }}
                onClick={() => setIsSearchOpen(false)}
              ></span>
            </form>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <Link className="navbar-brand logo_h" to="/">
              <img src="/img/logo.png" alt="" />
            </Link>
            
            {/* Mobile Cart Icon - Shows only on small screens */}
            <div className="d-lg-none d-flex align-items-center ml-auto mr-3">
              <Link to="/cart" className="cart-icon-wrapper" style={{ color: '#002347' }}>
                <i className="ti-shopping-cart"></i>
                {cartItems.length > 0 && (
                  <span className="cart-badge">{cartItems.length}</span>
                )}
              </Link>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span> <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="nav-link" to="/courses">Courses</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/course-details">Course Details</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/elements">Elements</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/single-blog">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link search" id="search" onClick={(e) => { e.preventDefault(); setIsSearchOpen(!isSearchOpen); }}>
                    <i className="ti-search"></i>
                  </a>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <Link to="/cart" className="nav-link cart-icon-wrapper">
                    <i className="ti-shopping-cart"></i>
                    {cartItems.length > 0 && (
                      <span className="cart-badge">{cartItems.length}</span>
                    )}
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center auth-btn-group ml-3">
                  <a href="#" onClick={(e) => { e.preventDefault(); openLogin(); }}>Login</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); openSignup(); }}>Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <LoginModal isOpen={isLoginOpen} onClose={closeModals} onSwitchToSignup={openSignup} />
      <SignupModal isOpen={isSignupOpen} onClose={closeModals} onSwitchToLogin={openLogin} />
    </header>
  );
};

export default Header;
