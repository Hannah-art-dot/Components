import React, { useState } from 'react';

const ReviewForm = ({ vendorId, onSubmitReview }) => {
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSubmitReview({ vendorId, rating, comments });
  };

  return (
    <form className="review-form" onSubmit={submit}>
      <h3>Leave a Review</h3>
      <label>Rating:</label>
      <select value={rating} onChange={e => setRating(Number(e.target.value))}>
        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Stars</option>)}
      </select>
      <textarea value={comments} onChange={e => setComments(e.target.value)} placeholder="Write your experience..." required />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
