import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { clearCart } from '../redux/cartSlice';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullName: '',
    street: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // ==========================================
  // TEST / STUDENT BYPASS MODE
  // ==========================================
  const handlePayment = async () => {
    try {
      // Directly bypass Razorpay in localhost/test mode
      await bypassPayment();

    } catch (error) {
      console.error('Payment error:', error);
      alert('Something went wrong while placing the order');
    }
  };

  // ==========================================
  // BYPASS RAZORPAY
  // ==========================================
  const bypassPayment = async () => {
    try {
      const saveOrderRes = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify({
          items: cartItems,
          totalAmount: totalPrice,
          address: address,
          paymentId: 'TEST_BYPASS_' + Date.now()
        })
      });

      const data = await saveOrderRes.json();

      if (!saveOrderRes.ok) {
        console.error('Order error:', data);
        alert(data.message || 'Order saving failed');
        return;
      }

      // Order successfully created
      dispatch(clearCart());

      navigate('/ordersuccess');

    } catch (error) {
      console.error('Bypass payment error:', error);
      alert('Unable to place test order');
    }
  };

  // ==========================================
  // FORM SUBMIT
  // ==========================================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert('Please login first');
      navigate('/login');
      return;
    }

    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }

    handlePayment();
  };

  return (
    <div className="checkout-container">

      <h2>Checkout</h2>

      <div className="checkout-content">

        <form
          onSubmit={handleSubmit}
          className="shipping-form"
        >

          <h3>Shipping Address</h3>

          <input
            type="text"
            placeholder="Full Name"
            required
            value={address.fullName}
            onChange={(e) =>
              setAddress({
                ...address,
                fullName: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Street"
            required
            value={address.street}
            onChange={(e) =>
              setAddress({
                ...address,
                street: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="City"
            required
            value={address.city}
            onChange={(e) =>
              setAddress({
                ...address,
                city: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Postal Code"
            required
            value={address.postalCode}
            onChange={(e) =>
              setAddress({
                ...address,
                postalCode: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Country"
            required
            value={address.country}
            onChange={(e) =>
              setAddress({
                ...address,
                country: e.target.value
              })
            }
          />

          <div className="checkout-summary">

            <h4>
              Total to Pay: ₹{totalPrice.toFixed(2)}
            </h4>

            <button
              type="submit"
              className="btn"
            >
              Place Test Order
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Checkout;