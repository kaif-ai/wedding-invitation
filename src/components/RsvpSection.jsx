import React from 'react';

const YES_WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=919553988326&text=Assalamu+Alaikum!+I'll+be+there+to+celebrate+the+wedding+of+Adiba+Noorin+%26+Mohammed+Mujeeb+Ahmed,+In+shaa+Allah.&type=phone_number&app_absent=0";

const NO_WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=919553988326&text=Assalamu+Alaikum!+Sorry,+I+won't+be+able+to+attend+the+wedding+of+Adiba+Noorin+%26+Mohammed+Mujeeb+Ahmed.+Congratulations+and+best+wishes!&type=phone_number&app_absent=0";

export default function RsvpSection({ rsvpData = {} }) {
  const {
    title = 'Will You Join Our Big Day?',
    subtitle = 'Join us as we step into our forever',
    yesText = 'I’LL BE THERE',
    noText = 'WILL MISS IT',
    yesWhatsappUrl = YES_WHATSAPP_URL,
    noWhatsappUrl = NO_WHATSAPP_URL,
  } = rsvpData;

  return (
    <section className="rsvp-section" aria-labelledby="rsvp-heading">
      <div className="rsvp-container scroll-animate">
        {/* Small burgundy outline heart */}
        <div className="rsvp-heart-wrapper" aria-hidden="true">
          <svg
            className="rsvp-heart-icon"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        {/* Centered serif heading */}
        <h2 id="rsvp-heading" className="rsvp-title">
          {title}
        </h2>

        {/* Muted taupe supporting text */}
        <p className="rsvp-sub">
          {subtitle}
        </p>

        {/* Wide rounded pill buttons */}
        <div className="rsvp-buttons">
          <a
            id="yesBtn"
            href={yesWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rsvp-btn rsvp-btn-primary"
            aria-label={`${yesText} (opens WhatsApp in a new tab)`}
          >
            {yesText}
          </a>

          <a
            id="noBtn"
            href={noWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rsvp-btn rsvp-btn-secondary"
            aria-label={`${noText} (opens WhatsApp in a new tab)`}
          >
            {noText}
          </a>
        </div>
      </div>
    </section>
  );
}
