import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call for payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
    }, 2000);
  };

  if (orderComplete) {
    return (
      <>
        <section className="banner_area">
          <div className="banner_inner d-flex align-items-center">
            <div className="overlay"></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="banner_content text-center">
                    <h2>Order Complete</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_gap text-center">
          <div className="container">
            <h2 className="text-success mb-4"><i className="ti-check-box mr-2"></i>Payment Successful!</h2>
            <p className="lead">Thank you for your purchase. You now have access to your new courses.</p>
            <Link to="/courses" className="primary-btn mt-5">Go to My Courses</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="banner_content text-center">
                  <h2>Checkout</h2>
                  <div className="page_link">
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/checkout">Checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="checkout_area section_gap">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="text-center">
              <h3>You have no items to checkout.</h3>
              <Link to="/courses" className="primary-btn mt-4">Browse Courses</Link>
            </div>
          ) : (
            <div className="billing_details">
              <div className="row">
                <div className="col-lg-8">
                  <h3>Billing Details</h3>
                  <form className="row contact_form" onSubmit={handleSubmit} id="checkoutForm">
                    <div className="col-md-6 form-group p_star">
                      <label>First Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" name="first_name" required />
                    </div>
                    <div className="col-md-6 form-group p_star">
                      <label>Last Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" name="last_name" required />
                    </div>
                    <div className="col-md-6 form-group p_star">
                      <label>Email Address <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" name="email" required />
                    </div>
                    <div className="col-md-6 form-group p_star">
                      <label>Card Number <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" name="card_number" placeholder="XXXX-XXXX-XXXX-XXXX" required />
                    </div>
                    <div className="col-md-6 form-group p_star">
                      <label>Expiry Date <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" name="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="col-md-6 form-group p_star">
                      <label>CVC <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" name="cvc" placeholder="XXX" required />
                    </div>
                  </form>
                </div>
                <div className="col-lg-4">
                  <div className="order_box" style={{ background: '#f9f9ff', padding: '30px', borderRadius: '10px' }}>
                    <h2>Your Order</h2>
                    <ul className="list list_2 w-100 pl-0 mt-3" style={{ listStyle: 'none' }}>
                      {cartItems.map((item) => (
                        <li key={item.id} className="d-flex justify-content-between mb-3 border-bottom pb-2">
                          <span style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</span> 
                          <span className="font-weight-bold">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="list list_2 w-100 pl-0" style={{ listStyle: 'none' }}>
                      <li className="d-flex justify-content-between mt-4 border-top pt-3">
                        <span className="font-weight-bold text-dark">Total</span> 
                        <span className="font-weight-bold text-dark h5 mb-0">${cartTotal.toFixed(2)}</span>
                      </li>
                    </ul>
                    <button 
                      type="submit" 
                      form="checkoutForm" 
                      className="primary-btn w-100 mt-5 text-center"
                      disabled={isProcessing}
                      style={{ border: 'none', cursor: 'pointer' }}
                    >
                      {isProcessing ? 'Processing Payment...' : 'Complete Purchase'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Checkout;
