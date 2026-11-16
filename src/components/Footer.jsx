import React from 'react';

export default function Footer({ footer }) {
  const { author, instagramUrl } = footer;

  return (
    <div
      style={{
        backgroundColor: '#0d0d0d',
        padding: '18px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
        }}
      >
        <div
          style={{
            flex: 1,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #e5a0ae)',
          }}
        />

        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#e5a0ae',
              fontSize: '0.85rem',
              fontWeight: 500,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="6"
                stroke="#e5a0ae"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="#e5a0ae"
                strokeWidth="1.8"
              />
              <circle cx="17.5" cy="6.5" r="1.2" fill="#e5a0ae" />
            </svg>
            <span>{author || 'Awesome Creation'}</span>
          </a>
        )}

        <div
          style={{
            flex: 1,
            height: '1px',
            background: 'linear-gradient(90deg, #e5a0ae, transparent)',
          }}
        />
      </div>
    </div>
  );
}
