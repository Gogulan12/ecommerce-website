import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
  return (
    <section>
      <div className="container">
        <h1>Checkout Successful</h1>
        <p>Thank you for your purchase</p>
        <br />
        <button className="--btn --btn-primary">
          <Link to="/order-history">View Order Status</Link>
        </button>
      </div>
    </section>
  );
}
