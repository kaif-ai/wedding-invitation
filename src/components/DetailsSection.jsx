import React from 'react';

export default function DetailsSection({ bismillah, invitationText, bride, groom, hadith }) {
  return (
    <section id="detailsSection" className="details-section">
      <div className="content-wrapper scroll-animate" style={{ textAlign: 'center', padding: '25px 15px' }}>
        {/* Bismillah */}
        <h2
          style={{
            fontSize: '1.9rem',
            marginBottom: '8px',
            fontWeight: 'normal',
            color: '#e5a0ae',
            fontFamily: "'Amiri', serif",
            letterSpacing: '1px',
          }}
        >
          {bismillah.arabic}
        </h2>

        {/* Translation */}
        <p
          className="details-text"
          style={{
            marginBottom: '25px',
            lineHeight: '1.6',
            fontStyle: 'italic',
            color: '#888',
            fontSize: '0.85rem',
            whiteSpace: 'pre-line',
          }}
        >
          {bismillah.translation}
        </p>

        {/* Invitation Text */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', 'Alex Brush', serif",
            fontStyle: 'italic',
            fontSize: '1.3rem',
            fontWeight: '500',
            lineHeight: '1.75',
            color: '#33252a',
            maxWidth: '520px',
            margin: '0 auto 30px auto',
            letterSpacing: '0.3px',
          }}
        >
          {invitationText.heading}
          <br />
          {invitationText.subheading}
        </p>

        {/* Bride Card */}
        <div
          className="bride-details-card"
          style={{
            background: '#ffffff',
            border: '1px solid #f3b6c3',
            borderRadius: '18px',
            padding: '24px 20px',
            marginBottom: '20px',
            boxShadow: '0 8px 30px rgba(229, 160, 174, 0.12)',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#e5a0ae',
              fontWeight: '700',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            {bride.label || 'THE BRIDE'}
          </span>
          {bride.fullName && (
            <h3
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
                fontSize: 'clamp(1.9rem, 7vw, 2.4rem)',
                lineHeight: 1.2,
                color: '#33252a',
                margin: '0 0 4px 0',
                fontWeight: 700,
                letterSpacing: '0.03em',
              }}
            >
              {bride.fullName}
            </h3>
          )}
          {bride.qualification && (
            <p
              style={{
                margin: '0 0 12px 0',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.08rem',
                color: '#a87582',
                fontWeight: '600',
                letterSpacing: '0.5px',
              }}
            >
              {bride.qualification}
            </p>
          )}
          <div style={{ width: '40px', height: '1px', background: '#f3b6c3', margin: '12px auto' }} />
          {(bride.relation || 'Daughter of').trim().toLowerCase() !== bride.fullName?.trim().toLowerCase() && (
            <p
              style={{
                margin: '8px 0 0 0',
                fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
                fontSize: '0.9rem',
                color: '#7a4a56',
                textTransform: 'none',
                letterSpacing: '0.08em',
                fontWeight: 700,
                fontStyle: 'italic',
              }}
            >
              {bride.relation || 'Daughter of'}
            </p>
          )}
          <p
            style={{
              margin: '4px 0 0 0',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.25rem',
              color: '#33252a',
              fontWeight: '600',
            }}
          >
            {bride.parents}
          </p>
          {bride.parentsDetail && (
            <p
              style={{
                margin: '4px 0 0 0',
                fontSize: '0.82rem',
                color: '#666',
              }}
            >
              {bride.parentsDetail}
            </p>
          )}
        </div>

        {/* Ampersand Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            margin: '20px 0',
          }}
        >
          <div style={{ width: '50px', height: '1px', background: '#f3b6c3' }} />
          <span
            style={{
              fontFamily: "'Great Vibes', 'Alex Brush', cursive",
              fontSize: '2.5rem',
              color: '#e5a0ae',
            }}
          >
            &
          </span>
          <div style={{ width: '50px', height: '1px', background: '#f3b6c3' }} />
        </div>

        {/* Groom Card */}
        <div
          className="groom-details-card"
          style={{
            background: '#ffffff',
            border: '1px solid #f3b6c3',
            borderRadius: '18px',
            padding: '24px 20px',
            marginBottom: '35px',
            boxShadow: '0 8px 30px rgba(229, 160, 174, 0.12)',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#e5a0ae',
              fontWeight: '700',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            {groom.label || 'THE GROOM'}
          </span>
          <h3
            style={{
              fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
              fontSize: 'clamp(1.9rem, 7vw, 2.4rem)',
              lineHeight: 1.2,
              color: '#33252a',
              margin: '0 0 4px 0',
              fontWeight: 700,
              letterSpacing: '0.03em',
            }}
          >
            {groom.fullName}
          </h3>
          {groom.designation && (
            <p
              style={{
                margin: '0 0 4px 0',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.05rem',
                color: '#9a6976',
                fontWeight: '600',
                letterSpacing: '0.5px',
                fontStyle: 'italic',
              }}
            >
              {groom.designation}
            </p>
          )}
          {groom.qualification && (
            <p
              style={{
                margin: '0 0 12px 0',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.08rem',
                color: '#a87582',
                fontWeight: '600',
                letterSpacing: '0.5px',
              }}
            >
              {groom.qualification}
            </p>
          )}
          <div style={{ width: '40px', height: '1px', background: '#f3b6c3', margin: '12px auto' }} />
          <p
            style={{
              margin: '8px 0 0 0',
              fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
              fontSize: '0.9rem',
              color: '#7a4a56',
              textTransform: 'none',
              letterSpacing: '0.08em',
              fontWeight: '700',
              fontStyle: 'italic',
            }}
          >
            {groom.relation || 'Son of'}
          </p>
          <p
            style={{
              margin: '4px 0 0 0',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.25rem',
              color: '#33252a',
              fontWeight: '600',
            }}
          >
            {groom.parents}
          </p>
          {groom.fatherDesignation && (
            <p
              style={{
                margin: '3px 0 0 0',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1rem',
                color: '#64575a',
                fontStyle: 'italic',
              }}
            >
              {groom.fatherDesignation}
            </p>
          )}
          {groom.parentsDetail && (
            <p
              style={{
                margin: '4px 0 0 0',
                fontSize: '0.82rem',
                color: '#666',
              }}
            >
              {groom.parentsDetail}
            </p>
          )}
        </div>

        {/* Hadith Section */}
        {hadith && (
          <div
            style={{
              margin: '30px auto 0 auto',
              maxWidth: '500px',
              padding: '22px 18px',
              background: 'rgba(229, 160, 174, 0.08)',
              borderRadius: '16px',
              borderLeft: '4px solid #e5a0ae',
              borderRight: '1px solid rgba(229, 160, 174, 0.2)',
            }}
          >
            <p
              style={{
                fontFamily: "'Amiri', serif",
                fontSize: '1.65rem',
                color: '#33252a',
                lineHeight: '1.6',
                margin: '0 auto 12px auto',
              }}
            >
              {hadith.arabic}
            </p>
            {hadith.narrator && (
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  fontStyle: 'italic',
                  marginBottom: '6px',
                }}
              >
                {hadith.narrator}
              </p>
            )}
            <p
              style={{
                fontSize: '1.05rem',
                color: '#33252a',
                fontStyle: 'italic',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: '600',
                margin: '6px 0',
              }}
            >
              {hadith.translation}
            </p>
            <p
              style={{
                fontSize: '0.75rem',
                color: '#e5a0ae',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: '700',
                marginTop: '8px',
              }}
            >
              {hadith.reference}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
