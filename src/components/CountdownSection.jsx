import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import confetti from 'canvas-confetti';
import HeartScratchCard from './HeartScratchCard';

export default function CountdownSection({
  videoSrc,
  bgImage,
  scratchCards,
  discoverText,
  revealButtonText,
  targetDate,
  displayDate,
}) {
  const [revealedCount, setRevealedCount] = useState(0);
  const [showCountdown, setShowCountdown] = useState(false);
  const [forceRevealIndex, setForceRevealIndex] = useState(-1);
  const celebrationStarted = useRef(false);
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const triggerCelebration = () => {
    setShowCountdown(true);
    confetti({
      particleCount: 300,
      spread: 180,
      startVelocity: 45,
      origin: { y: 0.6 },
      colors: ['#e5a0ae', '#f3b6c3', '#faf2e6', '#d4af37', '#ffffff', '#c43360'],
    });

    setTimeout(() => {
      const countdownEl = document.getElementById('hiddenCountdown');
      if (countdownEl) {
        countdownEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 500);
  };

  const handleCardComplete = () => {
    if (celebrationStarted.current) return;
    celebrationStarted.current = true;
    setForceRevealIndex(scratchCards.length);
    setRevealedCount(scratchCards.length);
    triggerCelebration();
  };

  const handleRevealAll = () => {
    if (celebrationStarted.current) return;
    celebrationStarted.current = true;
    setForceRevealIndex(scratchCards.length);
    setRevealedCount(scratchCards.length);
    triggerCelebration();
  };

  // Timer logic
  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: days < 10 ? `0${days}` : String(days),
        hours: hours < 10 ? `0${hours}` : String(hours),
        minutes: minutes < 10 ? `0${minutes}` : String(minutes),
        seconds: seconds < 10 ? `0${seconds}` : String(seconds),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="scratch-section countdown-section">
      {/* Background Video / Image */}
      <video
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
        poster={bgImage}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="content-wrapper scroll-animate" style={{ zIndex: 2 }}>
        {/* Reveal Button */}
        <div className="reveal-btn-container stagger-anim delay-2">
          <button
            type="button"
            className="premium-reveal-btn"
            onClick={handleRevealAll}
            disabled={revealedCount >= scratchCards.length}
          >
            <Icon icon="solar:cup-hot-bold" className="btn-icon" />
            <span>{revealButtonText || 'Reveal Date'}</span>
          </button>
        </div>

        {/* Discover Text */}
        <p className="stagger-anim delay-3 discover-text">
          {discoverText || 'SCRATCH TO DISCOVER THE DATE'}
        </p>

        {/* Heart Scratch Cards */}
        <div className="heart-scratch-container stagger-anim delay-4">
          {scratchCards.map((card, idx) => (
            <HeartScratchCard
              key={card.id || idx}
              title={card.title}
              onComplete={handleCardComplete}
              forceReveal={forceRevealIndex >= idx}
            />
          ))}
        </div>

        {/* Hidden Countdown Revealed */}
        <div
          id="hiddenCountdown"
          className={`hidden-countdown ${showCountdown ? 'show' : ''}`}
        >
          <p
            className="premium-font bismillah"
            style={{
              marginBottom: '10px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              color: '#c43360',
              fontWeight: '700',
            }}
          >
            Save The Date
          </p>

          <h2
            className="couple-names countdown-date"
            style={{
              margin: '10px 0 30px 0',
              fontSize: '2.2rem',
              fontFamily: "'Cormorant Garamond', serif",
              color: '#33252a',
            }}
          >
            {displayDate}
          </h2>

          <div className="timer">
            <div className="time-block">
              <span>{timeLeft.days}</span>
              <p>Days</p>
            </div>
            <div className="time-block">
              <span>{timeLeft.hours}</span>
              <p>Hours</p>
            </div>
            <div className="time-block">
              <span>{timeLeft.minutes}</span>
              <p>Minutes</p>
            </div>
            <div className="time-block">
              <span>{timeLeft.seconds}</span>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
