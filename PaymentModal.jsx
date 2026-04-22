import React from 'react';

const PaymentModal = ({ amount, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="payment-modal">
        <h3>Secure Payment Processing</h3>
        <p>Total amount to pay: {amount} ETB</p>
        <p>Select Payment Method:</p>
        <select>
          <option value="telebirr">Telebirr</option>
          <option value="cbe_birr">CBE Birr</option>
          <option value="chapa">Chapa</option>
        </select>
        <div className="actions">
          <button onClick={onCancel} className="cancel-btn">Cancel</button>
          <button onClick={onConfirm} className="confirm-btn">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
