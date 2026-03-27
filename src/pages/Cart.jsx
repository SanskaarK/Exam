import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, cartTotal, clearCart } = useCart();

  return (
    <>
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="banner_content text-center">
                  <h2>Shopping Cart</h2>
                  <div className="page_link">
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cart_area section_gap">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <h3>Your cart is empty</h3>
              <p className="mt-3">Looks like you haven't added any courses yet.</p>
              <Link to="/courses" className="primary-btn mt-4">Browse Courses</Link>
            </div>
          ) : (
            <div className="cart_inner">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Course</th>
                      <th scope="col">Price</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="media">
                            <div className="d-flex">
                              <img src={item.image} alt={item.title} style={{ width: '100px', borderRadius: '5px' }} />
                            </div>
                            <div className="media-body ml-4 d-flex align-items-center">
                              <p className="mb-0 font-weight-bold">{item.title}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5>{item.price}</h5>
                        </td>
                        <td>
                          <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => removeFromCart(item.id)}
                            style={{ borderRadius: '5px' }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr className="bottom_button">
                      <td>
                        <button className="btn btn-outline-secondary" onClick={clearCart}>Clear Cart</button>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <h5>Subtotal</h5>
                      </td>
                      <td>
                        <h5>${cartTotal.toFixed(2)}</h5>
                      </td>
                    </tr>
                    <tr className="out_button_area">
                      <td></td>
                      <td></td>
                      <td>
                        <div className="checkout_btn_inner d-flex align-items-center">
                          <Link className="primary-btn" to="/checkout">Proceed to Checkout</Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
