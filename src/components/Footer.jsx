import React from 'react';

export default function Footer({ footer }) {
  const { author, instagramUrl } = footer;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-divider" aria-hidden="true" />

        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-author"
            aria-label={`Follow ${author} on Instagram`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="6"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
            <span>{author || 'First basket'}</span>
          </a>
        )}

        <div className="footer-divider" aria-hidden="true" />
      </div>
    </footer>
  );
}