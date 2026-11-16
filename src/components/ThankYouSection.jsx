import React from 'react';

export default function ThankYouSection({ thankYou }) {
  const { title, subtitle, cardImage } = thankYou;

  return (
    <section className="thankyou-section">
      <div className="thankyou-container scroll-animate">
        <div className="thankyou-card-wrapper">
          <img
            src={cardImage}
            alt="Thank You"
            className="thankyou-img"
          />
          <div className="thankyou-card-text">
            <span className="ty-main">{title || 'Thank You'}</span>
            <span className="ty-sub">{subtitle || 'For your blessings & love'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
