import React from 'react';

export default function ComplimentsSection({ compliments }) {
  const { heading = 'With Best Compliments From', familyMembers = [], footer = '✦ Near & Dear ✦' } = compliments || {};

  return (
    <section className="compliments-section">
      <div className="compliments-container scroll-animate">
        <div className="compliments-header">
          <span className="comp-line" />
          <span className="comp-label">{heading}</span>
          <span className="comp-line" />
        </div>

        <div className="comp-ornament">❧</div>

        {familyMembers && familyMembers.length > 0 && (
          <div className="comp-family-list">
            {familyMembers.map((member, index) => (
              <div key={index} className="comp-member">
                <p className="comp-name" style={{ fontWeight: 600 }}>
                  {member.name}
                </p>
                {member.role && (
                  <p className="comp-role">{member.role}</p>
                )}
                {index < familyMembers.length - 1 && (
                  <div className="comp-divider" />
                )}
              </div>
            ))}
          </div>
        )}

        <div className="comp-stars">{footer}</div>
      </div>
    </section>
  );
}
