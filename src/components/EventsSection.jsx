import React from 'react';
import { Icon } from '@iconify/react';

export default function EventsSection({ events }) {
  return (
    <section className="venue-section">
      <div className="venue-container scroll-animate">
        <p className="events-kicker">A day to remember</p>
        <h2 className="venue-title">Valima Celebration</h2>

        <div className="event-list">
          {events.map((event, index) => (
            <article
              key={event.id || index}
              className="event-detail-card scroll-animate stagger-anim"
              style={{ '--event-index': index }}
            >
              <div className="event-card-ornament" aria-hidden="true">
                <span />
                <Icon icon="solar:star-fall-bold" />
                <span />
              </div>

              <p className="event-card-title">{event.title.replaceAll('✦', '').trim()}</p>
              <h3 className="event-card-date">{event.date}</h3>

              <p className="event-card-time">
                <Icon icon="solar:clock-circle-linear" aria-hidden="true" />
                <span>{event.time.replace(/^⏰\s*/u, '')}</span>
              </p>

              {event.image && (
                <img
                  src={event.image}
                  alt={`${event.venue.replace(/^📍\s*/u, '')} venue`}
                  className="event-card-image"
                />
              )}

              <div className="event-card-location">
                <h4 className="event-card-venue">
                  <Icon icon="solar:map-point-bold" aria-hidden="true" />
                  <span>{event.venue.replace(/^📍\s*/u, '')}</span>
                </h4>
                {event.address && <p className="event-card-address">{event.address}</p>}
              </div>

              {event.mapsUrl && (
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-map-link"
                >
                  <span>View location</span>
                  <Icon icon="solar:arrow-right-up-linear" aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}