import React from 'react';

export default function DetailsSection({ bismillah, invitationText, bride, groom, hadith }) {
  return (
    <section id="detailsSection" className="details-section">
      <div className="content-wrapper scroll-animate">
        {/* Bismillah */}
        <h2 className="details-bismillah" lang="ar" dir="rtl">
          {bismillah.arabic}
        </h2>

        {/* Translation */}
        <p className="details-bismillah-translation">
          {bismillah.translation}
        </p>

        {/* Invitation Text */}
        <p className="invitation-text">
          <span className="heading">{invitationText.heading}</span>
          <br />
          {invitationText.subheading}
        </p>

        {/* Bride & Groom Cards */}
        <div className="couple-cards">
          {/* Bride Card */}
          <div className="person-card scroll-animate stagger-anim delay-1">
            <span className="person-label">{bride.label || 'THE BRIDE'}</span>
            {bride.fullName && (
              <h3 className="person-name">{bride.fullName}</h3>
            )}
            {bride.qualification && (
              <p className="person-qualification">{bride.qualification}</p>
            )}
            <div className="person-divider" aria-hidden="true" />
            {(bride.relation || 'Daughter of').trim().toLowerCase() !== bride.fullName?.trim().toLowerCase() && (
              <p className="person-relation">{bride.relation || 'Daughter of'}</p>
            )}
            <p className="person-parents">{bride.parents}</p>
            {bride.parentsDetail && (
              <p className="person-father-designation">{bride.parentsDetail}</p>
            )}
          </div>

          {/* Ampersand Divider */}
          <div className="couple-divider" aria-hidden="true">
            <div className="divider-line" />
            <span className="divider-ampersand">&</span>
            <div className="divider-line" />
          </div>

          {/* Groom Card */}
          <div className="person-card scroll-animate stagger-anim delay-2">
            <span className="person-label">{groom.label || 'THE GROOM'}</span>
            <h3 className="person-name">{groom.fullName}</h3>
            {groom.designation && (
              <p className="person-qualification">{groom.designation}</p>
            )}
            {groom.qualification && (
              <p className="person-qualification">{groom.qualification}</p>
            )}
            <div className="person-divider" aria-hidden="true" />
            <p className="person-relation">{groom.relation || 'Son of'}</p>
            <p className="person-parents">{groom.parents}</p>
            {groom.fatherDesignation && (
              <p className="person-father-designation">{groom.fatherDesignation}</p>
            )}
            {groom.parentsDetail && (
              <p className="person-father-designation">{groom.parentsDetail}</p>
            )}
          </div>
        </div>

        {/* Hadith Section */}
        {hadith && (
          <div className="hadith-section scroll-animate stagger-anim delay-3">
            <p className="hadith-arabic" lang="ar" dir="rtl">
              {hadith.arabic}
            </p>
            {hadith.narrator && (
              <p className="hadith-narrator">{hadith.narrator}</p>
            )}
            <p className="hadith-translation">
              {hadith.translation}
            </p>
            <p className="hadith-reference">
              {hadith.reference}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}